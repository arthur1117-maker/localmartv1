// ─── Base ─────────────────────────────────────────────────────────────────────
export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

// Token helpers
export const getToken   = () => (typeof window !== "undefined" ? localStorage.getItem("access_token")  : null);
export const getRefresh = () => (typeof window !== "undefined" ? localStorage.getItem("refresh_token") : null);
export const saveTokens = (access: string, refresh: string) => {
  localStorage.setItem("access_token",  access);
  localStorage.setItem("refresh_token", refresh);
};
export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

// ─── Fetch wrapper ────────────────────────────────────────────────────────────
async function request<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const token = getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers ?? {}),
  };

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  // Auto-refresh on 401
  if (res.status === 401 && retry) {
    const refreshed = await tryRefresh();
    if (refreshed) return request<T>(path, options, false);
    clearTokens();
    throw new Error("UNAUTHORIZED");
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? `HTTP ${res.status}`);
  }

  // 204 No Content
  if (res.status === 204) return undefined as unknown as T;
  return res.json() as Promise<T>;
}

async function tryRefresh(): Promise<boolean> {
  const refresh = getRefresh();
  if (!refresh) return false;
  try {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: refresh }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    saveTokens(data.accessToken, data.refreshToken);
    return true;
  } catch {
    return false;
  }
}

// ─── Auth API ─────────────────────────────────────────────────────────────────
export interface LoginResponse {
  accessToken:  string;
  refreshToken: string;
  user: {
    id:       string;
    name:     string;
    email:    string;
    role:     string;
    phone?:   string;
    aimag?:   string;
    verified: boolean;
    active:   boolean;
  };
}

export const authApi = {
  login: (email: string, password: string) =>
    request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (data: {
    name: string; email: string; password: string;
    role: string; phone?: string; aimag?: string;
  }) =>
    request<LoginResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  refresh: (refreshToken: string) =>
    request<LoginResponse>("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    }),

  me: () => request<LoginResponse["user"]>("/users/me"),
};

// ─── Product API ──────────────────────────────────────────────────────────────
export interface ProductDto {
  id:          number;
  name:        string;
  price:       number;
  unit:        string;
  category:    string;
  aimag:       string;
  emoji:       string;
  story:       string;
  rating:      number;
  reviewCount: number;
  stock:       number;
  imageCount:  number;
  isNew:       boolean;
  isOrganic:   boolean;
  verified:    boolean;
  active:      boolean;
  seller:      string;
  sellerPhone: string;
  createdAt:   string;
}

export interface PageResponse<T> {
  content:       T[];
  totalElements: number;
  totalPages:    number;
  number:        number;
  size:          number;
}

export interface ProductSearchParams {
  q?:            string;
  category?:     string;
  aimag?:        string;
  maxPrice?:     number;
  minRating?:    number;
  verifiedOnly?: boolean;
  sort?:         string;
  page?:         number;
  size?:         number;
}

export const productApi = {
  search: (params: ProductSearchParams = {}) => {
    const q = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "" && v !== null) q.set(k, String(v));
    });
    return request<PageResponse<ProductDto>>(`/products/search?${q}`);
  },

  get: (id: number) => request<ProductDto>(`/products/${id}`),

  myProducts: () => request<ProductDto[]>("/products/me"),

  create: (data: Partial<ProductDto>) =>
    request<ProductDto>("/products", { method: "POST", body: JSON.stringify(data) }),

  update: (id: number, data: Partial<ProductDto>) =>
    request<ProductDto>(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  delete: (id: number) =>
    request<void>(`/products/${id}`, { method: "DELETE" }),
};

// ─── Order API ────────────────────────────────────────────────────────────────
export interface OrderItemRequest { productId: number; quantity: number; }
export interface CreateOrderRequest {
  items:           OrderItemRequest[];
  deliveryAddress: string;
  buyerPhone:      string;
  paymentMethod:   string;
}

export interface OrderDto {
  id:              number;
  orderNumber:     string;
  status:          string;
  totalAmount:     number;
  deliveryAddress: string;
  buyerPhone:      string;
  paymentMethod:   string;
  buyer:           string;
  seller:          string;
  createdAt:       string;
  items: {
    productName: string;
    productEmoji:string;
    quantity:    number;
    unitPrice:   number;
    subtotal:    number;
  }[];
}

export const orderApi = {
  create: (data: CreateOrderRequest) =>
    request<OrderDto>("/orders", { method: "POST", body: JSON.stringify(data) }),

  myOrders: () => request<OrderDto[]>("/orders/my"),

  get: (orderNumber: string) => request<OrderDto>(`/orders/${orderNumber}`),

  sellerOrders: () => request<OrderDto[]>("/orders/seller"),

  updateStatus: (orderNumber: string, status: string) =>
    request<OrderDto>(`/orders/${orderNumber}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};

// ─── Review API ───────────────────────────────────────────────────────────────
export interface ReviewDto {
  id:        number;
  rating:    number;
  comment:   string;
  buyerName: string;
  createdAt: string;
}

export const reviewApi = {
  getByProduct: (productId: number) =>
    request<ReviewDto[]>(`/reviews/product/${productId}`),

  create: (data: { productId: number; rating: number; comment: string }) =>
    request<ReviewDto>("/reviews", { method: "POST", body: JSON.stringify(data) }),
};

// ─── Chat API ─────────────────────────────────────────────────────────────────
export interface ChatMessageDto {
  id:         number;
  senderId:   string;
  senderName: string;
  receiverId: string;
  content:    string;
  isRead:     boolean;
  sentAt:     string;
  productId?: number;
}

export const chatApi = {
  send: (data: { receiverId: string; content: string; productId?: number }) =>
    request<ChatMessageDto>("/chat/send", { method: "POST", body: JSON.stringify(data) }),

  conversation: (partnerId: string) =>
    request<ChatMessageDto[]>(`/chat/conversation/${partnerId}`),

  unreadCount: () => request<number>("/chat/unread"),

  markRead: (senderId: string) =>
    request<void>(`/chat/read/${senderId}`, { method: "PATCH" }),
};

// ─── Notification API ─────────────────────────────────────────────────────────
export interface NotificationDto {
  id:        number;
  type:      string;
  icon:      string;
  title:     string;
  body:      string;
  isRead:    boolean;
  createdAt: string;
}

export const notifApi = {
  all: () => request<NotificationDto[]>("/notifications"),

  unreadCount: () => request<number>("/notifications/unread"),

  markRead: (id: number) =>
    request<void>(`/notifications/${id}/read`, { method: "PATCH" }),

  markAllRead: () =>
    request<void>("/notifications/read-all", { method: "PATCH" }),
};

// ─── Seller Stats API ─────────────────────────────────────────────────────────
export interface DayRevenue { day: string; revenue: number; pct: number; }
export interface SellerStats {
  totalRevenue:  number;
  orderCount:    number;
  productCount:  number;
  avgRating:     number;
  weeklyRevenue: DayRevenue[];
}

export const sellerApi = {
  stats: () => request<SellerStats>("/seller/stats"),
};

// ─── Admin API ────────────────────────────────────────────────────────────────
export interface AdminUserDto {
  id:       string;
  name:     string;
  email:    string;
  role:     string;
  aimag:    string;
  verified: boolean;
  active:   boolean;
  joined:   string;
  avatar:   string;
}

export const adminApi = {
  users: () => request<AdminUserDto[]>("/admin/users"),

  toggleActive: (id: string) =>
    request<void>(`/admin/users/${id}/toggle-active`, { method: "PATCH" }),

  verifyUser: (id: string) =>
    request<void>(`/admin/users/${id}/verify`, { method: "PATCH" }),

  toggleProduct: (id: number) =>
    request<void>(`/admin/products/${id}/toggle-active`, { method: "PATCH" }),
};
