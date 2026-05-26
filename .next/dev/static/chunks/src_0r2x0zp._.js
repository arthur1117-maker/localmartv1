(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/types/tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DARK_TOKENS",
    ()=>DARK_TOKENS,
    "LIGHT_TOKENS",
    ()=>LIGHT_TOKENS,
    "SEMANTIC",
    ()=>SEMANTIC
]);
const LIGHT_TOKENS = {
    // ── Primary: Emerald ──────────────────────────────────────────────────────
    green: "#059669",
    greenMid: "#10b981",
    greenLight: "#34d399",
    greenSoft: "#d1fae5",
    greenBg: "#ecfdf5",
    // ── Secondary: Teal ──────────────────────────────────────────────────────
    orange: "#14b8a6",
    orangeD: "#0d9488",
    orangeSoft: "#f0fdfa",
    // ── Accent: Cyan ─────────────────────────────────────────────────────────
    blue: "#06b6d4",
    blueSoft: "#ecfeff",
    // ── Surfaces ─────────────────────────────────────────────────────────────
    beige: "#f8fafc",
    white: "#ffffff",
    // ── Slate scale ──────────────────────────────────────────────────────────
    g50: "#f8fafc",
    g100: "#f1f5f9",
    g200: "#e2e8f0",
    g300: "#cbd5e1",
    g400: "#94a3b8",
    g500: "#64748b",
    g600: "#475569",
    g700: "#334155",
    // ── Text ─────────────────────────────────────────────────────────────────
    text: "#0f172a",
    // ── Status ───────────────────────────────────────────────────────────────
    red: "#dc2626",
    redSoft: "#fef2f2",
    yellow: "#f59e0b"
};
const DARK_TOKENS = {
    // ── Primary: Emerald (brightened for dark bg) ────────────────────────────
    green: "#34d399",
    greenMid: "#10b981",
    greenLight: "#6ee7b7",
    greenSoft: "#064e3b",
    greenBg: "#022c22",
    // ── Secondary: Teal ──────────────────────────────────────────────────────
    orange: "#2dd4bf",
    orangeD: "#14b8a6",
    orangeSoft: "#042f2e",
    // ── Accent: Cyan ─────────────────────────────────────────────────────────
    blue: "#22d3ee",
    blueSoft: "#083344",
    // ── Surfaces: Slate 950/900 — deep, premium dark ─────────────────────────
    beige: "#020617",
    white: "#0f172a",
    g50: "#0f172a",
    g100: "#1e293b",
    g200: "#334155",
    g300: "#475569",
    g400: "#64748b",
    g500: "#94a3b8",
    g600: "#cbd5e1",
    g700: "#e2e8f0",
    text: "#f1f5f9",
    red: "#f87171",
    redSoft: "#1a0505",
    yellow: "#fbbf24"
};
const SEMANTIC = {
    // Borders
    borderLight: "rgba(148,163,184,0.15)",
    borderDark: "rgba(255,255,255,0.08)",
    // Glassmorphism
    glassLight: "rgba(255,255,255,0.80)",
    glassDark: "rgba(15,23,42,0.75)",
    // Shadows
    shadowSm: "0 2px 8px rgba(0,0,0,0.05)",
    shadowMd: "0 8px 24px rgba(0,0,0,0.08)",
    shadowLg: "0 20px 50px rgba(0,0,0,0.12)",
    shadowBrand: "0 8px 28px rgba(5,150,105,0.22)",
    shadowBrandLg: "0 16px 48px rgba(5,150,105,0.28)",
    // Background gradients
    heroBgLight: "linear-gradient(145deg, #f0fdf4 0%, #ecfdf5 40%, #f0fdfa 70%, #ecfeff 100%)",
    heroBgDark: "linear-gradient(145deg, #020617 0%, #0f172a 40%, #111827 70%, #0b1120 100%)",
    // Dot grid
    dotGridLight: "radial-gradient(rgba(0,0,0,.04) 1px, transparent 1px)",
    dotGridDark: "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/tokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    dark: false,
    toggle: ()=>{},
    C: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_TOKENS"]
});
function ThemeProvider({ children }) {
    _s();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tailwind "dark" class-ийг <html> дээр нэмж/хаснэ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.documentElement.classList.toggle("dark", dark);
            document.body.style.background = dark ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_TOKENS"].beige : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_TOKENS"].beige;
            document.body.style.color = dark ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_TOKENS"].text : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_TOKENS"].text;
        }
    }["ThemeProvider.useEffect"], [
        dark
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            dark,
            toggle: ()=>setDark((d)=>!d),
            C: dark ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_TOKENS"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_TOKENS"]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "NIHBMCmnQYc/ThVDFkFE1j89faA=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/WishlistContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    wishlist: [],
    toggle: ()=>{},
    has: ()=>false
});
function WishlistProvider({ children }) {
    _s();
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        2,
        5,
        8
    ]);
    const toggle = (id)=>setWishlist((w)=>w.includes(id) ? w.filter((x)=>x !== id) : [
                ...w,
                id
            ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: {
            wishlist,
            toggle,
            has: (id)=>wishlist.includes(id)
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/WishlistContext.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(WishlistProvider, "Idp37ODACTYAIwjgARd1DvHPqA0=");
_c = WishlistProvider;
const useWishlist = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
};
_s1(useWishlist, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Base ─────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE,
    "adminApi",
    ()=>adminApi,
    "authApi",
    ()=>authApi,
    "chatApi",
    ()=>chatApi,
    "clearTokens",
    ()=>clearTokens,
    "getRefresh",
    ()=>getRefresh,
    "getToken",
    ()=>getToken,
    "notifApi",
    ()=>notifApi,
    "orderApi",
    ()=>orderApi,
    "productApi",
    ()=>productApi,
    "reviewApi",
    ()=>reviewApi,
    "saveTokens",
    ()=>saveTokens,
    "sellerApi",
    ()=>sellerApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8080/api") ?? "http://localhost:8080/api";
const getToken = ()=>("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable";
const getRefresh = ()=>("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("refresh_token") : "TURBOPACK unreachable";
const saveTokens = (access, refresh)=>{
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
};
const clearTokens = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};
// ─── Fetch wrapper ────────────────────────────────────────────────────────────
async function request(path, options = {}, retry = true) {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json",
        ...token ? {
            Authorization: `Bearer ${token}`
        } : {},
        ...options.headers ?? {}
    };
    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers
    });
    // Auto-refresh on 401
    if (res.status === 401 && retry) {
        const refreshed = await tryRefresh();
        if (refreshed) return request(path, options, false);
        clearTokens();
        throw new Error("UNAUTHORIZED");
    }
    if (!res.ok) {
        const err = await res.json().catch(()=>({
                message: res.statusText
            }));
        throw new Error(err.message ?? `HTTP ${res.status}`);
    }
    // 204 No Content
    if (res.status === 204) return undefined;
    return res.json();
}
async function tryRefresh() {
    const refresh = getRefresh();
    if (!refresh) return false;
    try {
        const res = await fetch(`${API_BASE}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refreshToken: refresh
            })
        });
        if (!res.ok) return false;
        const data = await res.json();
        saveTokens(data.accessToken, data.refreshToken);
        return true;
    } catch  {
        return false;
    }
}
const authApi = {
    login: (email, password)=>request("/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        }),
    register: (data)=>request("/auth/register", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    refresh: (refreshToken)=>request("/auth/refresh", {
            method: "POST",
            body: JSON.stringify({
                refreshToken
            })
        }),
    me: ()=>request("/users/me")
};
const productApi = {
    search: (params = {})=>{
        const q = new URLSearchParams();
        Object.entries(params).forEach(([k, v])=>{
            if (v !== undefined && v !== "" && v !== null) q.set(k, String(v));
        });
        return request(`/products/search?${q}`);
    },
    get: (id)=>request(`/products/${id}`),
    myProducts: ()=>request("/products/me"),
    create: (data)=>request("/products", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>request(`/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    delete: (id)=>request(`/products/${id}`, {
            method: "DELETE"
        })
};
const orderApi = {
    create: (data)=>request("/orders", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    myOrders: ()=>request("/orders/my"),
    get: (orderNumber)=>request(`/orders/${orderNumber}`),
    sellerOrders: ()=>request("/orders/seller"),
    updateStatus: (orderNumber, status)=>request(`/orders/${orderNumber}/status`, {
            method: "PATCH",
            body: JSON.stringify({
                status
            })
        })
};
const reviewApi = {
    getByProduct: (productId)=>request(`/reviews/product/${productId}`),
    create: (data)=>request("/reviews", {
            method: "POST",
            body: JSON.stringify(data)
        })
};
const chatApi = {
    send: (data)=>request("/chat/send", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    conversation: (partnerId)=>request(`/chat/conversation/${partnerId}`),
    unreadCount: ()=>request("/chat/unread"),
    markRead: (senderId)=>request(`/chat/read/${senderId}`, {
            method: "PATCH"
        })
};
const notifApi = {
    all: ()=>request("/notifications"),
    unreadCount: ()=>request("/notifications/unread"),
    markRead: (id)=>request(`/notifications/${id}/read`, {
            method: "PATCH"
        }),
    markAllRead: ()=>request("/notifications/read-all", {
            method: "PATCH"
        })
};
const sellerApi = {
    stats: ()=>request("/seller/stats")
};
const adminApi = {
    users: ()=>request("/admin/users"),
    toggleActive: (id)=>request(`/admin/users/${id}/toggle-active`, {
            method: "PATCH"
        }),
    verifyUser: (id)=>request(`/admin/users/${id}/verify`, {
            method: "PATCH"
        }),
    toggleProduct: (id)=>request(`/admin/products/${id}/toggle-active`, {
            method: "PATCH"
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    isLoggedIn: false,
    loading: true,
    login: async ()=>false,
    register: async ()=>false,
    logout: ()=>{}
});
function mapUser(u) {
    return {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role.toLowerCase(),
        phone: u.phone,
        aimag: u.aimag,
        verified: u.verified ?? false,
        avatar: u.avatar ?? (u.role === "seller" ? "👨‍🌾" : u.role === "admin" ? "⚙️" : "👤")
    };
}
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Restore session on page load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
            if (!token) {
                setLoading(false);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].me().then({
                "AuthProvider.useEffect": (u)=>setUser(mapUser(u))
            }["AuthProvider.useEffect"]).catch({
                "AuthProvider.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])()
            }["AuthProvider.useEffect"]).finally({
                "AuthProvider.useEffect": ()=>setLoading(false)
            }["AuthProvider.useEffect"]);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].login(email, password);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTokens"])(res.accessToken, res.refreshToken);
            setUser(mapUser(res.user));
            return true;
        } catch  {
            return false;
        }
    };
    const register = async (data)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].register({
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role ?? "buyer",
                phone: data.phone,
                aimag: data.aimag
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTokens"])(res.accessToken, res.refreshToken);
            setUser(mapUser(res.user));
            return true;
        } catch  {
            return false;
        }
    };
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])();
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoggedIn: !!user,
            loading,
            login,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AuthContext.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "vsSe/dTvlLd6Zm3e5lF13RggPpY=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    items: [],
    add: ()=>{},
    remove: ()=>{},
    update: ()=>{},
    clear: ()=>{},
    total: 0,
    count: 0
});
function CartProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const add = (p, qty = 1)=>setItems((prev)=>{
            const ex = prev.find((i)=>i.product.id === p.id);
            return ex ? prev.map((i)=>i.product.id === p.id ? {
                    ...i,
                    qty: i.qty + qty
                } : i) : [
                ...prev,
                {
                    product: p,
                    qty
                }
            ];
        });
    const remove = (id)=>setItems((prev)=>prev.filter((i)=>i.product.id !== id));
    const update = (id, qty)=>setItems((prev)=>qty <= 0 ? prev.filter((i)=>i.product.id !== id) : prev.map((i)=>i.product.id === id ? {
                    ...i,
                    qty
                } : i));
    const total = items.reduce((s, i)=>s + i.product.price * i.qty, 0);
    const count = items.reduce((s, i)=>s + i.qty, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            add,
            remove,
            update,
            clear: ()=>setItems([]),
            total,
            count
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "6WAym07vHedVzpAy8bFDJKqtv8I=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
};
_s1(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/NotificationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const NotifContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    notifications: [],
    unreadCount: 0,
    loading: false,
    markRead: ()=>{},
    markAllRead: ()=>{},
    refresh: ()=>{},
    add: ()=>{}
});
function NotificationProvider({ children }) {
    _s();
    const { isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [notifications, setNotifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[load]": async ()=>{
            if (!isLoggedIn) return;
            setLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifApi"].all();
                setNotifs(data);
            } catch  {} finally{
                setLoading(false);
            }
        }
    }["NotificationProvider.useCallback[load]"], [
        isLoggedIn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            load();
        }
    }["NotificationProvider.useEffect"], [
        load
    ]);
    // Poll every 30 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (!isLoggedIn) return;
            const id = setInterval(load, 30_000);
            return ({
                "NotificationProvider.useEffect": ()=>clearInterval(id)
            })["NotificationProvider.useEffect"];
        }
    }["NotificationProvider.useEffect"], [
        isLoggedIn,
        load
    ]);
    const markRead = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifApi"].markRead(id).catch(()=>{});
        setNotifs((ns)=>ns.map((n)=>n.id === id ? {
                    ...n,
                    isRead: true
                } : n));
    };
    const markAllRead = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifApi"].markAllRead().catch(()=>{});
        setNotifs((ns)=>ns.map((n)=>({
                    ...n,
                    isRead: true
                })));
    };
    // Local-only add (optimistic, e.g. from checkout)
    const add = (n)=>{
        const local = {
            id: Date.now(),
            type: n.type,
            icon: n.icon,
            title: n.title,
            body: n.body,
            isRead: false,
            createdAt: new Date().toISOString()
        };
        setNotifs((prev)=>[
                local,
                ...prev
            ]);
    };
    const unreadCount = notifications.filter((n)=>!n.isRead).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotifContext.Provider, {
        value: {
            notifications,
            unreadCount,
            loading,
            markRead,
            markAllRead,
            refresh: load,
            add
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/NotificationContext.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(NotificationProvider, "kCq58SZs/+9U98RrAWaHRbwpe48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = NotificationProvider;
const useNotifications = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotifContext);
};
_s1(useNotifications, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ChatContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProvider",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    activeThread: null,
    messages: [],
    threads: [],
    totalUnread: 0,
    loadingMsgs: false,
    openThread: ()=>{},
    sendMessage: async ()=>{},
    refreshUnread: ()=>{}
});
function ChatProvider({ children }) {
    _s();
    const { isLoggedIn, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeThread, setActiveThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalUnread, setTotalUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadingMsgs, setLoadingMsgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const refreshUnread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatProvider.useCallback[refreshUnread]": async ()=>{
            if (!isLoggedIn) return;
            try {
                const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].unreadCount();
                setTotalUnread(count);
            } catch  {}
        }
    }["ChatProvider.useCallback[refreshUnread]"], [
        isLoggedIn
    ]);
    const openThread = async (partnerId)=>{
        setActiveThread(partnerId);
        if (!threads.includes(partnerId)) setThreads((prev)=>[
                partnerId,
                ...prev
            ]);
        setLoadingMsgs(true);
        try {
            const msgs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].conversation(partnerId);
            setMessages(msgs);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markRead(partnerId).catch(()=>{});
            refreshUnread();
        } catch  {
            setMessages([]);
        } finally{
            setLoadingMsgs(false);
        }
    };
    const sendMessage = async (partnerId, content, productId)=>{
        try {
            const msg = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].send({
                receiverId: partnerId,
                content,
                productId
            });
            setMessages((prev)=>[
                    ...prev,
                    msg
                ]);
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: {
            activeThread,
            messages,
            threads,
            totalUnread,
            loadingMsgs,
            openThread,
            sendMessage,
            refreshUnread
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ChatContext.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ChatProvider, "PEDojdHSsyMj1uhcRjLzLGphWis=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ChatProvider;
const useChat = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
};
_s1(useChat, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/StarRating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarRating",
    ()=>StarRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StarRating({ rating, reviews, size = "sm", showCount = true }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const sz = {
        sm: 11,
        md: 13,
        lg: 15
    }[size];
    const txSz = {
        sm: 11,
        md: 12,
        lg: 13
    }[size];
    const filled = Math.floor(rating);
    const partial = rating - filled;
    const empty = 5 - Math.ceil(rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5
                },
                children: [
                    Array.from({
                        length: filled
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                            type: "full",
                            size: sz
                        }, `f${i}`, false, {
                            fileName: "[project]/src/components/ui/StarRating.tsx",
                            lineNumber: 22,
                            columnNumber: 55
                        }, this)),
                    partial >= 0.3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                        type: partial >= 0.7 ? "three-quarter" : "half",
                        size: sz
                    }, "p", false, {
                        fileName: "[project]/src/components/ui/StarRating.tsx",
                        lineNumber: 23,
                        columnNumber: 28
                    }, this),
                    Array.from({
                        length: empty
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                            type: "empty",
                            size: sz
                        }, `e${i}`, false, {
                            fileName: "[project]/src/components/ui/StarRating.tsx",
                            lineNumber: 24,
                            columnNumber: 54
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/StarRating.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: txSz,
                    fontWeight: 700,
                    color: "#059669",
                    lineHeight: 1
                },
                children: rating.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StarRating.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            showCount && reviews !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: txSz - 1,
                    fontWeight: 500,
                    color: dark ? "#475569" : "#94a3b8"
                },
                children: [
                    "(",
                    reviews,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/StarRating.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/StarRating.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(StarRating, "ctd7bk181ggBewbYxR6SkNLPMrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = StarRating;
function Star({ type, size }) {
    const gold = "#f59e0b";
    const empty = "#e2e8f0";
    if (type === "full") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: gold,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/StarRating.tsx",
            lineNumber: 41,
            columnNumber: 96
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/StarRating.tsx",
        lineNumber: 41,
        columnNumber: 32
    }, this);
    if (type === "empty") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: empty,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/StarRating.tsx",
            lineNumber: 42,
            columnNumber: 97
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/StarRating.tsx",
        lineNumber: 42,
        columnNumber: 32
    }, this);
    const pct = type === "half" ? "50%" : "75%";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `sg-${type}-${size}`,
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: pct,
                            stopColor: gold
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/StarRating.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: pct,
                            stopColor: empty
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/StarRating.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/StarRating.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StarRating.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 1l1.9 4 4.1.6-3 2.9.7 4.2L8 10.5 4.3 12.7l.7-4.2L2 5.6l4.1-.6z",
                fill: `url(#sg-${type}-${size})`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StarRating.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/StarRating.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c1 = Star;
var _c, _c1;
__turbopack_context__.k.register(_c, "StarRating");
__turbopack_context__.k.register(_c1, "Star");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SkeletonCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonCard",
    ()=>SkeletonCard,
    "SkeletonList",
    ()=>SkeletonList,
    "SkeletonPage",
    ()=>SkeletonPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SkeletonCard() {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const bg = dark ? "#0f172a" : "#ffffff";
    const bdr = dark ? "rgba(255,255,255,.06)" : "rgba(148,163,184,.12)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: bg,
            border: `1px solid ${bdr}`,
            borderRadius: 16,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton",
                style: {
                    height: 180
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "14px 14px 16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton",
                        style: {
                            height: 10,
                            width: "45%",
                            borderRadius: 999,
                            marginBottom: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton",
                        style: {
                            height: 14,
                            width: "80%",
                            borderRadius: 8,
                            marginBottom: 6
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton",
                        style: {
                            height: 14,
                            width: "55%",
                            borderRadius: 8,
                            marginBottom: 12
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton",
                        style: {
                            height: 10,
                            width: "60%",
                            borderRadius: 999,
                            marginBottom: 14
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton",
                        style: {
                            height: 20,
                            width: "50%",
                            borderRadius: 8,
                            marginBottom: 12
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton",
                                style: {
                                    height: 9,
                                    width: "30%",
                                    borderRadius: 999
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton",
                                style: {
                                    height: 26,
                                    width: "28%",
                                    borderRadius: 999
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(SkeletonCard, "ctd7bk181ggBewbYxR6SkNLPMrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SkeletonCard;
function SkeletonList({ count = 4 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 12
        },
        children: Array.from({
            length: count
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton",
                style: {
                    height: 64,
                    borderRadius: 12
                }
            }, i, false, {
                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = SkeletonList;
function SkeletonPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 1152,
            margin: "0 auto",
            padding: "40px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton",
                style: {
                    height: 36,
                    width: 200,
                    borderRadius: 10,
                    marginBottom: 28
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                    gap: 14
                },
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, i, false, {
                        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                        lineNumber: 41,
                        columnNumber: 50
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SkeletonCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SkeletonCard.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = SkeletonPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SkeletonCard");
__turbopack_context__.k.register(_c1, "SkeletonList");
__turbopack_context__.k.register(_c2, "SkeletonPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BtnSpinner",
    ()=>BtnSpinner,
    "PageLoader",
    ()=>PageLoader,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function Spinner({ size = 20, color }) {
    _s();
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const c = color ?? C.green;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        style: {
            animation: "spin .8s linear infinite",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "8",
                fill: "none",
                stroke: C.g200,
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Spinner.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 2 A8 8 0 0 1 18 10",
                fill: "none",
                stroke: c,
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Spinner.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin{to{transform:rotate(360deg)}}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Spinner.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Spinner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Spinner, "5AwKdyffvMFKFb/CeXnkjLh5kuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Spinner;
function PageLoader({ message = "Уншиж байна..." }) {
    _s1();
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-20 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                size: 36
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Spinner.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold",
                style: {
                    color: C.g500
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Spinner.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Spinner.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s1(PageLoader, "5AwKdyffvMFKFb/CeXnkjLh5kuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = PageLoader;
function BtnSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
        size: 16,
        color: "currentColor"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Spinner.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c2 = BtnSpinner;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "PageLoader");
__turbopack_context__.k.register(_c2, "BtnSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Spinner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SIZES = {
    xs: "px-3 py-1.5 text-[11px] rounded-xl gap-1",
    sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-2xl gap-2",
    lg: "px-7 py-3.5 text-[15px] rounded-2xl gap-2",
    xl: "px-9 py-4 text-base rounded-2xl gap-2.5"
};
// Maps variant to CSS class from globals.css btn system
const VARIANT_CLASS = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    glass: "btn-glass",
    danger: ""
};
const DANGER_STYLE = {
    background: "#fef2f2",
    color: "#dc2626",
    border: "1.5px solid #fecaca"
};
function Button({ children, onClick, variant = "primary", size = "md", loading = false, disabled = false, fullWidth = false, type = "button", className = "", icon }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDisabled = disabled || loading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: !isDisabled ? onClick : undefined,
        className: `
        btn font-black font-sans display-font
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50 !cursor-not-allowed !transform-none" : ""}
        ${VARIANT_CLASS[variant]}
        ${SIZES[size]}
        ${className}
      `,
        style: variant === "danger" ? DANGER_STYLE : undefined,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnSpinner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 68,
                columnNumber: 19
            }, this),
            !loading && icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 69,
                columnNumber: 28
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Button, "ctd7bk181ggBewbYxR6SkNLPMrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Breadcrumbs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Breadcrumbs({ crumbs, dark: darkProp = false }) {
    _s();
    const { C, dark: themeDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const onDark = darkProp;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center gap-1.5 text-[12px] font-semibold flex-wrap",
        "aria-label": "breadcrumb",
        children: crumbs.map((c, i)=>{
            const isLast = i === crumbs.length - 1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center gap-1.5",
                children: [
                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: onDark ? "rgba(255,255,255,.35)" : C.g300
                        },
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Breadcrumbs.tsx",
                        lineNumber: 25,
                        columnNumber: 15
                    }, this),
                    isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-black px-2 py-0.5 rounded-lg",
                        style: {
                            color: onDark ? "#4ade80" : C.green,
                            background: onDark ? "rgba(74,222,128,.15)" : C.greenBg,
                            border: `1px solid ${onDark ? "rgba(74,222,128,.25)" : C.green + "25"}`
                        },
                        children: c.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Breadcrumbs.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: c.onClick,
                        className: "transition-colors hover:opacity-80 font-sans",
                        style: {
                            color: onDark ? "rgba(255,255,255,.55)" : C.g500,
                            background: "none",
                            border: "none",
                            cursor: c.onClick ? "pointer" : "default"
                        },
                        children: c.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Breadcrumbs.tsx",
                        lineNumber: 37,
                        columnNumber: 15
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/ui/Breadcrumbs.tsx",
                lineNumber: 23,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Breadcrumbs.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Breadcrumbs, "ZgjZIiwOXgYZUyWt0oOREWNSjc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Breadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PRESETS = {
    search: {
        emoji: "🔍",
        title: "Бараа олдсонгүй",
        sub: "Шүүлтүүрийг өөрчлөөд дахин хайна уу"
    },
    orders: {
        emoji: "📦",
        title: "Захиалга байхгүй",
        sub: "Зах зээлд орж анхны захиалгаа хийнэ үү"
    },
    cart: {
        emoji: "🛒",
        title: "Сагс хоосон байна",
        sub: "Зах зээлд орж бараа нэмнэ үү"
    },
    wishlist: {
        emoji: "❤️",
        title: "Дуртай бараа байхгүй",
        sub: "Бараануудад дурлаад нэмэж үзээрэй"
    },
    notifications: {
        emoji: "🔔",
        title: "Мэдэгдэл байхгүй",
        sub: "Шинэ мэдэгдэл ирэхэд энд харагдана"
    }
};
function EmptyState({ type, title, sub, emoji, onReset, resetLabel }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const preset = type ? PRESETS[type] : null;
    const ic = emoji ?? preset?.emoji ?? "📭";
    const ttl = title ?? preset?.title ?? "Хоосон байна";
    const sb = sub ?? preset?.sub ?? "";
    const rl = resetLabel ?? "Шүүлтүүр арилгах";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "64px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 52,
                    marginBottom: 18,
                    animation: "float 3.5s ease-in-out infinite"
                },
                children: ic
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 16,
                    fontWeight: 700,
                    color: dark ? "#e2e8f0" : "#0f172a",
                    fontFamily: "var(--font-display)",
                    marginBottom: 8,
                    letterSpacing: "-0.015em"
                },
                children: ttl
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: dark ? "#64748b" : "#94a3b8",
                    maxWidth: 280,
                    lineHeight: 1.65,
                    fontWeight: 400
                },
                children: sb
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            onReset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onReset,
                className: "btn btn-ghost btn-md",
                style: {
                    marginTop: 20,
                    fontFamily: "var(--font-display)"
                },
                children: rl
            }, void 0, false, {
                fileName: "[project]/src/components/ui/EmptyState.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/EmptyState.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(EmptyState, "ctd7bk181ggBewbYxR6SkNLPMrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/FilterTags.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterTags",
    ()=>FilterTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FilterTags({ tags, count, onClear, dark: darkProp = false }) {
    _s();
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    if (tags.length === 0) return null;
    const tagBg = darkProp ? "rgba(74,222,128,.15)" : C.greenBg;
    const tagColor = darkProp ? "#4ade80" : C.green;
    const tagBorder = darkProp ? "rgba(74,222,128,.3)" : C.greenSoft;
    const txtColor = darkProp ? "rgba(255,255,255,.65)" : C.g600;
    const emphColor = darkProp ? "#fff" : C.text;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 flex-wrap mb-4 px-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-bold",
                style: {
                    color: txtColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base font-black",
                        style: {
                            color: emphColor
                        },
                        children: count
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/FilterTags.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    " бараа"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/FilterTags.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: darkProp ? "rgba(255,255,255,.25)" : C.g300
                },
                children: "·"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FilterTags.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all hover:opacity-80",
                    style: {
                        background: tagBg,
                        color: tagColor,
                        border: `1px solid ${tagBorder}`
                    },
                    children: [
                        tag.label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: tag.onRemove,
                            className: "w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] font-black leading-none",
                            style: {
                                background: tagColor,
                                color: "#fff",
                                flexShrink: 0
                            },
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/FilterTags.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/ui/FilterTags.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)),
            tags.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClear,
                className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all hover:opacity-80 font-sans",
                style: {
                    background: darkProp ? "rgba(239,68,68,.15)" : "#fef2f2",
                    color: darkProp ? "#f87171" : "#dc2626",
                    border: `1px solid ${darkProp ? "rgba(239,68,68,.3)" : "#fecaca"}`
                },
                children: "✕ Бүгдийг арилгах"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FilterTags.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/FilterTags.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(FilterTags, "5AwKdyffvMFKFb/CeXnkjLh5kuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = FilterTags;
var _c;
__turbopack_context__.k.register(_c, "FilterTags");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    toast: ()=>"",
    success: ()=>{},
    error: ()=>{},
    warning: ()=>{},
    loading: ()=>"",
    dismiss: ()=>{}
});
const useToast = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
};
_s(useToast, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ToastProvider({ children }) {
    _s1();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[dismiss]": (id)=>setItems({
                "ToastProvider.useCallback[dismiss]": (prev)=>prev.filter({
                        "ToastProvider.useCallback[dismiss]": (t)=>t.id !== id
                    }["ToastProvider.useCallback[dismiss]"])
            }["ToastProvider.useCallback[dismiss]"])
    }["ToastProvider.useCallback[dismiss]"], []);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[toast]": (message, type = "info", duration = 3500)=>{
            const id = `t-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            setItems({
                "ToastProvider.useCallback[toast]": (prev)=>{
                    // Max 4 toasts at a time
                    const capped = prev.length >= 4 ? prev.slice(1) : prev;
                    return [
                        ...capped,
                        {
                            id,
                            type,
                            message,
                            duration
                        }
                    ];
                }
            }["ToastProvider.useCallback[toast]"]);
            if (type !== "loading") {
                setTimeout({
                    "ToastProvider.useCallback[toast]": ()=>dismiss(id)
                }["ToastProvider.useCallback[toast]"], duration);
            }
            return id;
        }
    }["ToastProvider.useCallback[toast]"], [
        dismiss
    ]);
    const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[success]": (m)=>{
            toast(m, "success");
        }
    }["ToastProvider.useCallback[success]"], [
        toast
    ]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[error]": (m)=>{
            toast(m, "error", 4500);
        }
    }["ToastProvider.useCallback[error]"], [
        toast
    ]);
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[warning]": (m)=>{
            toast(m, "warning", 4000);
        }
    }["ToastProvider.useCallback[warning]"], [
        toast
    ]);
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[loading]": (m)=>toast(m, "loading", 99999)
    }["ToastProvider.useCallback[loading]"], [
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toast,
            success,
            error,
            warning,
            loading,
            dismiss
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {
                items: items,
                onDismiss: dismiss
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s1(ToastProvider, "wVPoF8ZymN6jGvB8tNcNc7R2uZU=");
_c = ToastProvider;
function ToastContainer({ items, onDismiss }) {
    if (items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-[1000] flex flex-col gap-2.5 items-center",
        style: {
            bottom: "clamp(80px, 12vw, 28px)",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            width: "min(460px, calc(100vw - 2rem))"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastChip, {
                item: item,
                onDismiss: onDismiss,
                index: i,
                total: items.length
            }, item.id, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c1 = ToastContainer;
function ToastChip({ item, onDismiss, index, total }) {
    _s2();
    const { C, dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastChip.useEffect": ()=>{
            // Entrance
            const t = setTimeout({
                "ToastChip.useEffect.t": ()=>setVisible(true)
            }["ToastChip.useEffect.t"], 16);
            // Progress bar countdown
            if (item.type !== "loading" && item.duration && item.duration < 99999) {
                const tick = 50;
                const steps = (item.duration - 300) / tick;
                let step = 0;
                intervalRef.current = setInterval({
                    "ToastChip.useEffect": ()=>{
                        step++;
                        setProgress(Math.max(0, 100 - step / steps * 100));
                        if (step >= steps) clearInterval(intervalRef.current);
                    }
                }["ToastChip.useEffect"], tick);
            }
            return ({
                "ToastChip.useEffect": ()=>{
                    clearTimeout(t);
                    clearInterval(intervalRef.current);
                }
            })["ToastChip.useEffect"];
        }
    }["ToastChip.useEffect"], []);
    const handleDismiss = ()=>{
        setVisible(false);
        clearInterval(intervalRef.current);
        setTimeout(()=>onDismiss(item.id), 250);
    };
    const CONFIGS = {
        success: {
            bg: dark ? "#052e16" : "#f0fdf4",
            border: dark ? "#059669" : "#bbf7d0",
            iconBg: "#dcfce7",
            color: "#059669",
            icon: "✅",
            bar: "#22c55e"
        },
        error: {
            bg: dark ? "#450a0a" : "#fef2f2",
            border: dark ? "#dc2626" : "#fecaca",
            iconBg: "#fee2e2",
            color: "#dc2626",
            icon: "❌",
            bar: "#ef4444"
        },
        warning: {
            bg: dark ? "#422006" : "#fffbeb",
            border: dark ? "#d97706" : "#fde68a",
            iconBg: "#fef3c7",
            color: "#d97706",
            icon: "⚠️",
            bar: "#f59e0b"
        },
        loading: {
            bg: dark ? C.white : C.white,
            border: C.g200,
            iconBg: C.greenBg,
            color: C.green,
            icon: "⏳",
            bar: C.green
        },
        info: {
            bg: dark ? "#0c1a3a" : "#eff6ff",
            border: dark ? "#0e7490" : "#bfdbfe",
            iconBg: "#dbeafe",
            color: "#0e7490",
            icon: "ℹ️",
            bar: "#3b82f6"
        }
    };
    const cfg = CONFIGS[item.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleDismiss,
        role: "status",
        "aria-live": "polite",
        className: "w-full flex items-center gap-3 cursor-pointer overflow-hidden relative",
        style: {
            background: cfg.bg,
            border: `1.5px solid ${cfg.border}`,
            borderRadius: 16,
            boxShadow: "0 8px 36px rgba(0,0,0,.16), 0 2px 8px rgba(0,0,0,.08)",
            pointerEvents: "auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(.94)",
            transition: "opacity .25s cubic-bezier(.16,1,.3,1), transform .25s cubic-bezier(.16,1,.3,1)",
            padding: "12px 14px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0",
                style: {
                    background: cfg.iconBg
                },
                children: item.type === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    style: {
                        animation: "spin .8s linear infinite"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "10",
                            cy: "10",
                            r: "7.5",
                            fill: "none",
                            stroke: dark ? C.g200 : "#e5e7eb",
                            strokeWidth: "2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Toast.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 2.5 A7.5 7.5 0 0 1 17.5 10",
                            fill: "none",
                            stroke: cfg.color,
                            strokeWidth: "2.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Toast.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cfg.icon
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold flex-1 leading-snug",
                style: {
                    color: cfg.color
                },
                children: item.message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    handleDismiss();
                },
                className: "w-6 h-6 rounded-lg flex items-center justify-center text-xs transition-all hover:scale-110 flex-shrink-0",
                style: {
                    background: `${cfg.border}60`,
                    color: cfg.color,
                    opacity: 0.7
                },
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            item.type !== "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full transition-all",
                    style: {
                        width: `${progress}%`,
                        background: cfg.bar,
                        transition: "width 50ms linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 180,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin{to{transform:rotate(360deg)}}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s2(ToastChip, "XM+CnUurwFd+pxVKayCeM0PJBvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = ToastChip;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ToastProvider");
__turbopack_context__.k.register(_c1, "ToastContainer");
__turbopack_context__.k.register(_c2, "ToastChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const update = {
                "ScrollProgress.useEffect.update": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const pct = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
                    setProgress(Math.min(pct, 100));
                }
            }["ScrollProgress.useEffect.update"];
            window.addEventListener("scroll", update, {
                passive: true
            });
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener("scroll", update)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    if (progress <= 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scroll-indicator",
        style: {
            width: `${progress}%`
        },
        role: "progressbar",
        "aria-valuenow": Math.round(progress),
        "aria-valuemin": 0,
        "aria-valuemax": 100
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScrollProgress.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ScrollProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0r2x0zp._.js.map