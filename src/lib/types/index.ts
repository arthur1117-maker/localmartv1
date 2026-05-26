// ─── Product ──────────────────────────────────────────────────────────────────
export interface Product {
  id: number;
  name: string;
  price: number;
  aimag: string;
  seller: string;
  verified: boolean;
  cat: string;
  emoji: string;
  rating: number;
  reviews: number;
  date: string;
  phone: string;
  isNew: boolean;
  isOrganic: boolean;
  story: string;
  unit: string;
  imageCount: number;
}

// ─── Category ─────────────────────────────────────────────────────────────────
export interface Category {
  icon: string;
  label: string;
  color: string;
  bg: string;
  count: number;
}

// ─── Aimag ────────────────────────────────────────────────────────────────────
export interface AimagNode {
  id: string;
  name: string;
  x: number;
  y: number;
  count: number;
}

// ─── Order ────────────────────────────────────────────────────────────────────
export interface Order {
  product: string;
  buyer: string;
  status: string;
  statusColor: string;
  amount: string;
  date: string;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────
export interface CartItem {
  product: Product;
  qty: number;
}

// ─── User Order (buyer-side) ──────────────────────────────────────────────────
export type OrderStatus = "БАТАЛГААЖСАН" | "БЭЛТГЭЖ_БАЙНА" | "ХҮРГЭЛТЭНД" | "ХҮРГЭГДСЭН" | "ЦУЦЛАСАН";

export interface UserOrder {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
  seller: string;
  trackingSteps: { label: string; done: boolean; time?: string }[];
}

// ─── Notification ─────────────────────────────────────────────────────────────
export interface Notification {
  id: string;
  type: "order" | "chat" | "promo" | "system";
  title: string;
  body: string;
  time: string;
  read: boolean;
  icon: string;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
export type UserRole = "buyer" | "seller" | "admin";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  phone?: string;
}

// ─── Chat ─────────────────────────────────────────────────────────────────────
export interface ChatMessage {
  id: string;
  from: "user" | "seller";
  text: string;
  time: string;
  read: boolean;
}

export interface ChatThread {
  id: string;
  seller: string;
  sellerEmoji: string;
  product: string;
  lastMsg: string;
  lastTime: string;
  unread: number;
  messages: ChatMessage[];
}

// ─── Review ───────────────────────────────────────────────────────────────────
export interface Review {
  name: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

// ─── Theme tokens ─────────────────────────────────────────────────────────────
export interface ThemeTokens {
  green: string; greenMid: string; greenLight: string;
  greenSoft: string; greenBg: string;
  orange: string; orangeD: string; orangeSoft: string;
  blue: string; blueSoft: string;
  beige: string; white: string;
  g50: string; g100: string; g200: string; g300: string;
  g400: string; g500: string; g600: string; g700: string;
  text: string; red: string; redSoft: string; yellow: string;
}
