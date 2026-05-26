module.exports = [
"[project]/src/components/notifications/NotificationPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPanel",
    ()=>NotificationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/NotificationContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TYPE_COLOR = {
    order: "#059669",
    chat: "#06b6d4",
    promo: "#14b8a6",
    system: "#6b7280"
};
function NotificationPanel({ onClose }) {
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { notifications, markRead, markAllRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotifications"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) onClose();
        };
        setTimeout(()=>document.addEventListener("mousedown", handler), 50);
        return ()=>document.removeEventListener("mousedown", handler);
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "absolute right-0 top-12 w-80 rounded-2xl overflow-hidden animate-scale-in z-50",
        style: {
            background: C.white,
            border: `1px solid ${C.g200}`,
            boxShadow: "0 16px 48px rgba(0,0,0,.18)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3.5",
                style: {
                    borderBottom: `1px solid ${C.g100}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-extrabold",
                        style: {
                            color: C.text
                        },
                        children: "🔔 Мэдэгдэл"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: markAllRead,
                        className: "text-[11px] font-bold transition-opacity hover:opacity-70 font-sans",
                        style: {
                            color: C.green
                        },
                        children: "Бүгдийг уншсан"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-80 overflow-y-auto",
                children: notifications.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>markRead(n.id),
                        className: "flex gap-3 px-4 py-3 cursor-pointer transition-colors",
                        style: {
                            background: n.isRead ? "transparent" : `${TYPE_COLOR[n.type]}08`,
                            borderBottom: `1px solid ${C.g100}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0",
                                style: {
                                    background: `${TYPE_COLOR[n.type]}15`
                                },
                                children: n.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-extrabold leading-snug",
                                                style: {
                                                    color: C.text
                                                },
                                                children: n.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            !n.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full flex-shrink-0 mt-1",
                                                style: {
                                                    background: TYPE_COLOR[n.type]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-0.5 leading-relaxed",
                                        style: {
                                            color: C.g500
                                        },
                                        children: n.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] mt-1 font-semibold",
                                        style: {
                                            color: C.g400
                                        },
                                        children: new Date(n.createdAt).toLocaleDateString("mn-MN")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-center",
                style: {
                    borderTop: `1px solid ${C.g100}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-xs font-bold transition-opacity hover:opacity-70 font-sans",
                    style: {
                        color: C.green
                    },
                    children: "Бүх мэдэгдэл харах →"
                }, void 0, false, {
                    fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notifications/NotificationPanel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/NotificationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$NotificationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notifications/NotificationPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/UserMenu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const NAV = [
    {
        id: "home",
        label: "Нүүр"
    },
    {
        id: "explore",
        label: "Зах зээл"
    }
];
const SELLER_NAV = {
    id: "seller",
    label: "Самбар"
};
const ADMIN_NAV = {
    id: "admin",
    label: "Админ"
};
function useScrollY() {
    const [y, setY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setY(window.scrollY);
        window.addEventListener("scroll", h, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    return y;
}
function Navbar({ activeTab, onTabChange, onCart, onChat, onAuth, onRegister, orders }) {
    const scrollY = useScrollY();
    const { dark, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { user, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { count: cartCnt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { unreadCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotifications"])();
    const { totalUnread } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const scrolled = scrollY > 12;
    const onHero = activeTab === "home" && !scrolled;
    const [showNotif, setShowNotif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUser, setShowUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const navBg = scrolled ? dark ? "rgba(2,6,23,.96)" : "rgba(255,255,255,.96)" : "transparent";
    const navBorder = scrolled ? dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)" : "transparent";
    const navShadow = scrolled ? dark ? "0 4px 24px rgba(0,0,0,.32)" : "0 4px 24px rgba(0,0,0,.06)" : "none";
    const textCol = dark ? "#e2e8f0" : "#0f172a";
    const visibleNav = [
        ...NAV,
        ...isLoggedIn && user?.role === "seller" ? [
            SELLER_NAV
        ] : [],
        ...isLoggedIn && user?.role === "admin" ? [
            ADMIN_NAV
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-[300]",
                style: {
                    height: 64,
                    background: navBg,
                    backdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
                    borderBottom: `1px solid ${navBorder}`,
                    boxShadow: navShadow,
                    transition: "background .28s ease, box-shadow .28s ease, border-color .28s ease",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 clamp(1rem, 3.5vw, 2rem)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTabChange("home"),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            flexShrink: 0,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 34,
                                    height: 34,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
                                    boxShadow: "0 2px 14px rgba(5,150,105,.32)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 16,
                                    flexShrink: 0,
                                    transition: "box-shadow .2s ease, transform .2s ease"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(5,150,105,.45)";
                                    e.currentTarget.style.transform = "scale(1.04)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 2px 14px rgba(5,150,105,.32)";
                                    e.currentTarget.style.transform = "none";
                                },
                                children: "🏪"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 800,
                                            letterSpacing: "-0.025em",
                                            lineHeight: 1,
                                            color: textCol,
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "LocalMart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: ".18em",
                                            color: "#10b981",
                                            textTransform: "uppercase",
                                            lineHeight: 1,
                                            marginTop: 2
                                        },
                                        children: "Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center",
                        style: {
                            marginLeft: "auto",
                            marginRight: "auto",
                            gap: 2
                        },
                        children: visibleNav.map((t)=>{
                            const active = activeTab === t.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onTabChange(t.id),
                                style: {
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "7px 15px",
                                    borderRadius: 10,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "var(--font-display)",
                                    fontSize: 13,
                                    fontWeight: active ? 700 : 500,
                                    background: active ? dark ? "rgba(16,185,129,.10)" : "rgba(5,150,105,.07)" : "transparent",
                                    color: active ? "#059669" : textCol,
                                    transition: "all .18s ease",
                                    overflow: "hidden"
                                },
                                onMouseEnter: (e)=>{
                                    if (!active) e.currentTarget.style.background = dark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)";
                                },
                                onMouseLeave: (e)=>{
                                    if (!active) e.currentTarget.style.background = "transparent";
                                },
                                children: [
                                    t.label,
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            bottom: 0,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: 18,
                                            height: 2,
                                            borderRadius: 999,
                                            background: "linear-gradient(90deg, #059669, #10b981)",
                                            boxShadow: "0 1px 6px rgba(5,150,105,.35)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            marginLeft: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIconBtn, {
                                onClick: toggle,
                                dark: dark,
                                title: "Горим",
                                children: dark ? "☀" : "◑"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIconBtn, {
                                        onClick: onChat,
                                        dark: dark,
                                        title: "Чат",
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    totalUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBadge, {
                                        n: totalUnread,
                                        color: "#0d9488"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 184,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIconBtn, {
                                        onClick: ()=>{
                                            setShowNotif((s)=>!s);
                                            setShowUser(false);
                                        },
                                        dark: dark,
                                        active: showNotif,
                                        title: "Мэдэгдэл",
                                        children: "🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBadge, {
                                        n: unreadCount,
                                        color: "#10b981"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 35
                                    }, this),
                                    showNotif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notifications$2f$NotificationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPanel"], {
                                        onClose: ()=>setShowNotif(false)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIconBtn, {
                                        onClick: onCart,
                                        dark: dark,
                                        title: "Сагс",
                                        children: "◉"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    cartCnt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBadge, {
                                        n: cartCnt,
                                        color: "#059669"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowUser((s)=>!s);
                                            setShowNotif(false);
                                        },
                                        style: {
                                            width: 34,
                                            height: 34,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #059669, #0d9488)",
                                            border: `2px solid ${showUser ? "#34d399" : "transparent"}`,
                                            boxShadow: showUser ? "0 0 0 3px rgba(52,211,153,.22)" : "0 2px 10px rgba(5,150,105,.28)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 16,
                                            cursor: "pointer",
                                            transition: "all .22s var(--ease-spring)"
                                        },
                                        children: user?.avatar || "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    showUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$UserMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserMenu"], {
                                        onClose: ()=>setShowUser(false),
                                        onViewOrders: ()=>onTabChange("orders"),
                                        onSeller: ()=>onTabChange("seller"),
                                        onAdmin: ()=>onTabChange("admin"),
                                        orders: orders
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 8,
                                    marginLeft: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onAuth,
                                        className: "btn btn-muted btn-sm hidden sm:flex",
                                        style: {
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "Нэвтрэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onRegister,
                                        className: "btn btn-primary btn-sm",
                                        style: {
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "Бүртгүүлэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex md:hidden flex-col gap-1.5 p-2 tap-target",
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    borderRadius: 8,
                                    marginLeft: 2
                                },
                                onClick: ()=>setMenuOpen((o)=>!o),
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: 18,
                                            height: 1.5,
                                            borderRadius: 9,
                                            background: textCol,
                                            transition: "all .24s var(--ease-spring)",
                                            transform: menuOpen ? i === 0 ? "rotate(45deg) translate(2.5px,2.5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(2.5px,-2.5px)" : "none",
                                            opacity: menuOpen && i === 1 ? 0 : 1
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[290]",
                        style: {
                            background: "rgba(0,0,0,.45)",
                            backdropFilter: "blur(6px)"
                        },
                        onClick: ()=>setMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed z-[295] top-16 left-0 right-0 animate-slide-up",
                        style: {
                            background: dark ? "#0f172a" : "#fff",
                            borderBottom: `1px solid ${dark ? "rgba(255,255,255,.07)" : "#e2e8f0"}`,
                            boxShadow: "0 12px 48px rgba(0,0,0,.18)"
                        },
                        children: [
                            visibleNav.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onTabChange(t.id);
                                        setMenuOpen(false);
                                    },
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        width: "100%",
                                        padding: "15px 20px",
                                        background: activeTab === t.id ? dark ? "rgba(16,185,129,.07)" : "#ecfdf5" : "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        borderLeft: `3px solid ${activeTab === t.id ? "#10b981" : "transparent"}`,
                                        fontSize: 14,
                                        fontWeight: activeTab === t.id ? 700 : 500,
                                        color: activeTab === t.id ? "#059669" : dark ? "#94a3b8" : "#475569",
                                        fontFamily: "var(--font-display)",
                                        textAlign: "left",
                                        transition: "all .15s ease"
                                    },
                                    children: t.label
                                }, t.id, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)),
                            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    padding: "14px 20px",
                                    borderTop: `1px solid ${dark ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onAuth();
                                            setMenuOpen(false);
                                        },
                                        className: "btn btn-outline btn-md",
                                        style: {
                                            flex: 1,
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "Нэвтрэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onRegister();
                                            setMenuOpen(false);
                                        },
                                        className: "btn btn-primary btn-md",
                                        style: {
                                            flex: 1,
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "Бүртгүүлэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileBottomNav, {
                tabs: visibleNav,
                activeTab: activeTab,
                onTabChange: onTabChange,
                onCart: onCart,
                cartCnt: cartCnt,
                dark: dark
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
/* ── Sub-components ──────────────────────────────────────────────────────── */ function NavIconBtn({ children, onClick, active, dark, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: title,
        className: "tap-target",
        style: {
            width: 36,
            height: 36,
            borderRadius: 9,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            background: active ? dark ? "rgba(16,185,129,.12)" : "rgba(5,150,105,.08)" : "transparent",
            color: dark ? "#94a3b8" : "#64748b",
            transition: "all .18s ease",
            position: "relative"
        },
        onMouseEnter: (e)=>{
            if (!active) {
                e.currentTarget.style.background = dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.045)";
                e.currentTarget.style.transform = "scale(1.08)";
            }
        },
        onMouseLeave: (e)=>{
            if (!active) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "none";
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
function NavBadge({ n, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            top: -2,
            right: -2,
            minWidth: 16,
            height: 16,
            borderRadius: 999,
            background: color,
            color: "#fff",
            fontSize: 9,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 3px",
            boxShadow: `0 2px 8px ${color}55`,
            animation: "badgePop .35s var(--ease-spring)"
        },
        children: n > 9 ? "9+" : n
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, this);
}
function MobileBottomNav({ tabs, activeTab, onTabChange, onCart, cartCnt, dark }) {
    const allTabs = [
        ...tabs,
        {
            id: "cart",
            label: "Сагс"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-[200] flex md:hidden safe-bottom",
        style: {
            background: dark ? "rgba(2,6,23,.97)" : "rgba(255,255,255,.97)",
            backdropFilter: "blur(22px) saturate(1.4)",
            WebkitBackdropFilter: "blur(22px) saturate(1.4)",
            borderTop: `1px solid ${dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)"}`,
            boxShadow: "0 -4px 24px rgba(0,0,0,.08)"
        },
        children: allTabs.map((t)=>{
            const isCart = t.id === "cart";
            const active = !isCart && activeTab === t.id;
            const icon = t.id === "home" ? "⌂" : t.id === "explore" ? "◈" : t.id === "seller" ? "⊞" : t.id === "admin" ? "⚙" : "🛒";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>isCart ? onCart() : onTabChange(t.id),
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    padding: "10px 0",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    position: "relative",
                    minHeight: 56,
                    transition: "opacity .15s ease"
                },
                children: [
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 24,
                            height: 2.5,
                            borderRadius: 999,
                            background: "linear-gradient(90deg, #059669, #10b981)",
                            boxShadow: "0 2px 8px rgba(5,150,105,.35)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 426,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 19,
                            lineHeight: 1,
                            transform: active ? "scale(1.1)" : "scale(1)",
                            transition: "transform .22s var(--ease-spring)",
                            display: "inline-block"
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 433,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 10,
                            fontWeight: active ? 700 : 500,
                            color: active ? "#059669" : dark ? "#64748b" : "#94a3b8",
                            fontFamily: "var(--font-display)",
                            transition: "color .18s ease"
                        },
                        children: t.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 441,
                        columnNumber: 13
                    }, this),
                    isCart && cartCnt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBadge, {
                        n: cartCnt,
                        color: "#059669"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 449,
                        columnNumber: 39
                    }, this)
                ]
            }, t.id, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 415,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LINKS = {
    "Бараа": [
        "Мах, Загас",
        "Ноос, Ноолуур",
        "Сүүн бүтээгдэхүүн",
        "Ногоо, Жимс",
        "Гар урлал"
    ],
    "Компани": [
        "Тухай бид",
        "Карьер",
        "Мэдээ",
        "Нэгдэх",
        "Холбогдох"
    ],
    "Дэмжлэг": [
        "Тусламж",
        "Нэвтрэх",
        "Бүртгүүлэх",
        "Тохиргоо",
        "Нууцлал"
    ]
};
const TECH = [
    "Next.js 14",
    "TypeScript",
    "Tailwind",
    "Spring Boot",
    "MySQL",
    "JWT Auth"
];
function Footer() {
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.05);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subscribed, setSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const bg = dark ? "#020617" : "#0a1220";
    const border = "rgba(255,255,255,.07)";
    const text = "rgba(148,163,184,.5)";
    const textHov = "#34d399";
    const head = "rgba(241,245,249,.85)";
    const handleSubscribe = ()=>{
        if (email) {
            setSubscribed(true);
        }
    };
    const show = (delay = 0)=>visible ? {
            animation: `fadeUp .54s ease ${delay}s both`,
            opacity: 1
        } : {
            opacity: 0
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: ref,
        style: {
            background: bg,
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-20%",
                    left: "-5%",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(16,185,129,.05), transparent 60%)",
                    pointerEvents: "none",
                    filter: "blur(80px)",
                    animation: "orbSlow 26s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 line-grid pointer-events-none",
                style: {
                    opacity: .3
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: `1px solid ${border}`,
                    padding: "44px 24px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1152,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 24,
                        flexWrap: "wrap",
                        ...show(0.04)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: "#34d399",
                                        marginBottom: 6,
                                        letterSpacing: ".08em",
                                        textTransform: "uppercase",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 5,
                                                height: 5,
                                                borderRadius: "50%",
                                                background: "#10b981",
                                                display: "inline-block",
                                                animation: "pulseDot 2s ease-in-out infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        "📧 Мэдэгдэл авах"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 20,
                                        fontWeight: 800,
                                        color: head,
                                        fontFamily: "var(--font-display)",
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.2
                                    },
                                    children: "Шинэ бараа, хямдрал — имэйлээр авах"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8
                            },
                            children: subscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "10px 18px",
                                    borderRadius: 10,
                                    background: "rgba(16,185,129,.1)",
                                    border: "1px solid rgba(52,211,153,.2)",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#34d399",
                                    animation: "bounceIn .4s var(--ease-spring)"
                                },
                                children: "✓ Бүртгэгдлээ!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && handleSubscribe(),
                                        placeholder: "you@example.mn",
                                        style: {
                                            background: "rgba(255,255,255,.06)",
                                            border: "1px solid rgba(255,255,255,.09)",
                                            borderRadius: 10,
                                            padding: "10px 16px",
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: "#f1f5f9",
                                            fontFamily: "inherit",
                                            outline: "none",
                                            width: 230,
                                            transition: "border-color .18s ease, box-shadow .18s ease"
                                        },
                                        onFocus: (e)=>{
                                            e.target.style.borderColor = "rgba(52,211,153,.35)";
                                            e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,.1)";
                                        },
                                        onBlur: (e)=>{
                                            e.target.style.borderColor = "rgba(255,255,255,.09)";
                                            e.target.style.boxShadow = "none";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubscribe,
                                        className: "btn btn-primary btn-md",
                                        style: {
                                            fontFamily: "var(--font-display)",
                                            flexShrink: 0,
                                            letterSpacing: "-0.01em"
                                        },
                                        children: "Бүртгүүлэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "60px 24px 44px",
                    borderBottom: `1px solid ${border}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1152,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        gap: 44,
                        ...show(0.08)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        marginBottom: 18
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 36,
                                                height: 36,
                                                borderRadius: 11,
                                                background: "linear-gradient(135deg, #059669, #0d9488)",
                                                boxShadow: "0 4px 16px rgba(5,150,105,.30)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: 17,
                                                transition: "box-shadow .2s ease"
                                            },
                                            children: "🏪"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 15,
                                                        fontWeight: 800,
                                                        color: head,
                                                        fontFamily: "var(--font-display)",
                                                        letterSpacing: "-0.022em"
                                                    },
                                                    children: "LocalMart"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        fontWeight: 700,
                                                        letterSpacing: ".2em",
                                                        color: "#10b981",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "Connected"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        lineHeight: 1.75,
                                        color: text,
                                        maxWidth: 260,
                                        marginBottom: 22,
                                        fontWeight: 400
                                    },
                                    children: "Монголын малчид, фермерүүдийн шинэхэн бүтээгдэхүүнийг шууд захиалж, гэртээ хүргүүлээрэй."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8
                                    },
                                    children: [
                                        "𝕏",
                                        "in",
                                        "f",
                                        "▶"
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                width: 34,
                                                height: 34,
                                                borderRadius: 9,
                                                border: `1px solid ${border}`,
                                                background: "rgba(255,255,255,.04)",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: text,
                                                fontFamily: "inherit",
                                                transition: "all .2s var(--ease-spring)"
                                            },
                                            onMouseEnter: (e)=>{
                                                const el = e.currentTarget;
                                                el.style.background = "rgba(16,185,129,.1)";
                                                el.style.color = "#34d399";
                                                el.style.borderColor = "rgba(52,211,153,.2)";
                                                el.style.transform = "translateY(-2px)";
                                            },
                                            onMouseLeave: (e)=>{
                                                const el = e.currentTarget;
                                                el.style.background = "rgba(255,255,255,.04)";
                                                el.style.color = text;
                                                el.style.borderColor = border;
                                                el.style.transform = "none";
                                            },
                                            children: s
                                        }, i, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        Object.entries(LINKS).map(([title, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            fontWeight: 800,
                                            letterSpacing: ".12em",
                                            color: "rgba(241,245,249,.45)",
                                            textTransform: "uppercase",
                                            marginBottom: 18
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 10
                                        },
                                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        background: "none",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        fontSize: 13,
                                                        fontWeight: 400,
                                                        color: text,
                                                        fontFamily: "inherit",
                                                        padding: 0,
                                                        transition: "color .16s ease, transform .16s ease",
                                                        textAlign: "left",
                                                        display: "block"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = textHov;
                                                        e.currentTarget.style.transform = "translateX(3px)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = text;
                                                        e.currentTarget.style.transform = "none";
                                                    },
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this)
                                            }, item, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "22px 24px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1152,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 14,
                        ...show(0.16)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: text
                            },
                            children: "© 2025 LocalMart Connected · Дипломийн ажил"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 6,
                                flexWrap: "wrap"
                            },
                            children: TECH.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: 600,
                                        padding: "3px 9px",
                                        borderRadius: 999,
                                        background: "rgba(255,255,255,.04)",
                                        border: `1px solid ${border}`,
                                        color: text,
                                        transition: "all .18s ease",
                                        cursor: "default"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "rgba(16,185,129,.08)";
                                        e.currentTarget.style.color = "#34d399";
                                        e.currentTarget.style.borderColor = "rgba(52,211,153,.18)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "rgba(255,255,255,.04)";
                                        e.currentTarget.style.color = text;
                                        e.currentTarget.style.borderColor = border;
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/PageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PageHeader({ title, subtitle, badge, actions, gradient, compact = false }) {
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.01);
    const bg = gradient ?? (dark ? "linear-gradient(145deg, #020617 0%, #071a10 40%, #0d2535 100%)" : "linear-gradient(145deg, #052e16 0%, #14532d 50%, #059669 100%)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative overflow-hidden",
        style: {
            background: bg,
            paddingTop: 72
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none line-grid",
                style: {
                    opacity: .25
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageHeader.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-30%",
                    right: "-8%",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(52,211,153,.10), transparent 65%)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                    animation: "orbSlow 18s ease-in-out infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageHeader.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "-40%",
                    left: "20%",
                    width: 360,
                    height: 360,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(20,184,166,.07), transparent 65%)",
                    filter: "blur(50px)",
                    pointerEvents: "none",
                    animation: "orbSlow 24s ease-in-out 4s infinite reverse"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageHeader.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative max-w-7xl mx-auto px-5 md:px-8 ${compact ? "py-6" : "py-12"} flex items-center justify-between gap-4 flex-wrap`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-3 uppercase",
                                style: {
                                    color: "#34d399",
                                    background: "rgba(52,211,153,.10)",
                                    border: "1px solid rgba(52,211,153,.22)",
                                    opacity: visible ? 1 : 0,
                                    animation: visible ? "badgePop .4s var(--ease-spring) both" : "none"
                                },
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHeader.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `font-black text-white tracking-tight display-font ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl lg:text-4xl"}`,
                                style: {
                                    letterSpacing: "-0.028em",
                                    lineHeight: 1.1,
                                    opacity: visible ? 1 : 0,
                                    animation: visible ? "fadeUp .58s cubic-bezier(.16,1,.3,1) .06s both" : "none",
                                    textShadow: "0 2px 20px rgba(0,0,0,.15)"
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHeader.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base mt-2",
                                style: {
                                    color: "rgba(255,255,255,.52)",
                                    opacity: visible ? 1 : 0,
                                    animation: visible ? "fadeUp .56s ease .14s both" : "none",
                                    fontWeight: 400,
                                    lineHeight: 1.65
                                },
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHeader.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PageHeader.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .56s ease .2s both" : "none"
                        },
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHeader.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageHeader.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(52,211,153,.25), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageHeader.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/PageHeader.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/MobileBottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileBottomNav",
    ()=>MobileBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TABS = [
    {
        id: "home",
        icon: "🏠",
        label: "Нүүр"
    },
    {
        id: "explore",
        icon: "🔍",
        label: "Хайлт"
    },
    {
        id: "cart",
        icon: "🛒",
        label: "Сагс"
    },
    {
        id: "orders",
        icon: "📦",
        label: "Захиалга"
    },
    {
        id: "chat",
        icon: "💬",
        label: "Мессеж"
    }
];
function MobileBottomNav({ activeTab, onTabChange, onCart }) {
    const { dark, C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { count: cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { totalUnread } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const navBg = dark ? "rgba(2,6,23,.97)" : "rgba(255,255,255,.97)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-[290] md:hidden",
        style: {
            background: navBg,
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            borderTop: `1px solid ${dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"}`,
            boxShadow: dark ? "0 -4px 24px rgba(0,0,0,.40)" : "0 -4px 24px rgba(0,0,0,.07)",
            display: "flex",
            // Safe area inset for iPhone notch
            paddingBottom: "env(safe-area-inset-bottom, 0px)"
        },
        children: TABS.map((tab)=>{
            const isActive = tab.id === activeTab || tab.id === "cart" && false;
            const badge = tab.id === "cart" ? cartCount : tab.id === "chat" ? totalUnread : 0;
            const handleTap = ()=>{
                if (tab.id === "cart") {
                    onCart();
                    return;
                }
                if (tab.id === "chat") {
                    return;
                } // handled by parent if needed
                onTabChange(tab.id);
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleTap,
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    padding: "10px 4px 8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    // Active state: subtle bg highlight
                    borderTop: `2px solid ${isActive ? "#059669" : "transparent"}`,
                    transition: "border-color .2s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 22,
                            filter: isActive ? "none" : "grayscale(0.3) opacity(0.6)",
                            transform: isActive ? "scale(1.12)" : "scale(1)",
                            transition: "all .2s var(--ease-spring)",
                            display: "block",
                            lineHeight: 1
                        },
                        children: tab.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MobileBottomNav.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? "#059669" : dark ? "#64748b" : "#94a3b8",
                            letterSpacing: ".02em",
                            fontFamily: "var(--font-display)",
                            transition: "color .2s"
                        },
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MobileBottomNav.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            top: 6,
                            left: "50%",
                            transform: "translateX(2px)",
                            minWidth: 16,
                            height: 16,
                            borderRadius: 999,
                            background: "#ef4444",
                            color: "#fff",
                            fontSize: 9,
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 4px",
                            border: `2px solid ${dark ? "rgba(2,6,23,.97)" : "rgba(255,255,255,.97)"}`,
                            animation: "badgePop .35s cubic-bezier(.16,1,.3,1) both"
                        },
                        children: badge > 99 ? "99+" : badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/MobileBottomNav.tsx",
                        lineNumber: 96,
                        columnNumber: 15
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/src/components/layout/MobileBottomNav.tsx",
                lineNumber: 57,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/layout/MobileBottomNav.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileBottomNav.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/components/map/MongoliaMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MongoliaMap",
    ()=>MongoliaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MongoliaMap({ onExplore }) {
    const { dark, C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.08);
    const [hovered, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIMAG_NODES"].find((a)=>a.id === selected);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "transition-all duration-700",
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(32px)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block text-[11px] font-extrabold rounded-full px-4 py-1 mb-3.5 tracking-widest uppercase",
                        style: {
                            color: C.green,
                            background: C.greenSoft
                        },
                        children: "🗺 ИНТЕРАКТИВ ГАЗРЫН ЗУРАГ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-black tracking-tight",
                        style: {
                            color: C.text
                        },
                        children: "Аймгаасаа бараа хайх"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base mt-2",
                        style: {
                            color: C.g500
                        },
                        children: "Аймаг дэр дараад тухайн нутгийн барааг үзнэ үү"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/MongoliaMap.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl overflow-hidden",
                style: {
                    background: C.white,
                    border: `1px solid ${C.g200}`,
                    boxShadow: `0 4px 24px rgba(0,0,0,.07)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        style: {
                            paddingTop: "42%",
                            background: dark ? "#0a1f0e" : "#e8f5e9"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 42",
                            className: "absolute inset-0 w-full h-full",
                            preserveAspectRatio: "xMidYMid meet",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5,13 Q9,8 14,9 Q20,7 26,8 Q32,6 38,8 Q44,7 50,8 Q58,6 64,7 Q72,5 78,8 Q85,7 91,10 Q96,13 97,18 Q97,24 95,28 Q92,32 88,34 Q83,36 78,38 Q72,39 66,38 Q60,40 54,41 Q48,42 42,41 Q36,42 30,40 Q24,38 18,36 Q12,33 8,29 Q5,25 5,19 Z",
                                    fill: dark ? "#0d2818" : "#c8e6c9",
                                    stroke: dark ? "#1a4a2a" : "#81c784",
                                    strokeWidth: ".3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "53",
                                    cy: "64",
                                    rx: "26",
                                    ry: "8",
                                    fill: dark ? "#1a1206" : "#fff8e1",
                                    opacity: ".55"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIMAG_NODES"].map((a)=>{
                                    const isH = hovered === a.id;
                                    const isS = selected === a.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        onMouseEnter: ()=>setHov(a.id),
                                        onMouseLeave: ()=>setHov(null),
                                        onClick: ()=>setSel(isS ? null : a.id),
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: [
                                            (isH || isS) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: a.x,
                                                cy: a.y,
                                                r: 4,
                                                fill: "none",
                                                stroke: isS ? "#14b8a6" : "#059669",
                                                strokeWidth: ".7",
                                                opacity: ".5",
                                                style: {
                                                    animation: "pulse 1.5s ease infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: a.x,
                                                cy: a.y,
                                                r: isS ? 2.4 : isH ? 2.1 : 1.7,
                                                fill: isS ? "#14b8a6" : isH ? "#059669" : dark ? "#4ade80" : "#059669",
                                                style: {
                                                    transition: "all .2s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            (isH || isS) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: a.x,
                                                y: a.y - 3.2,
                                                textAnchor: "middle",
                                                fontSize: "2.3",
                                                fontWeight: "700",
                                                fill: dark ? "#f0f6fc" : "#1f2937",
                                                style: {
                                                    pointerEvents: "none",
                                                    fontFamily: "inherit"
                                                },
                                                children: a.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            isS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: a.x - 5.5,
                                                        y: a.y + 2.5,
                                                        width: 11,
                                                        height: 5,
                                                        rx: 2.5,
                                                        fill: "#14b8a6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: a.x,
                                                        y: a.y + 6.3,
                                                        textAnchor: "middle",
                                                        fontSize: "2",
                                                        fontWeight: "800",
                                                        fill: "#fff",
                                                        style: {
                                                            pointerEvents: "none"
                                                        },
                                                        children: [
                                                            a.count,
                                                            " бараа"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/map/MongoliaMap.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 flex items-center gap-4 flex-wrap min-h-[72px]",
                        style: {
                            borderTop: `1px solid ${C.g200}`
                        },
                        children: selData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0",
                                    style: {
                                        background: C.greenBg,
                                        border: `1px solid ${C.greenSoft}`
                                    },
                                    children: "📍"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-extrabold",
                                            style: {
                                                color: C.text
                                            },
                                            children: [
                                                selData.name,
                                                " аймаг"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm mt-0.5",
                                            style: {
                                                color: C.g500
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: [
                                                        selData.count,
                                                        " бараа"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                " бэлэн байна"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onExplore(selData.name),
                                    className: "px-6 py-2.5 rounded-2xl text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 font-sans",
                                    style: {
                                        background: C.green,
                                        boxShadow: "0 4px 14px rgba(22,101,52,.28)"
                                    },
                                    children: "Бараа харах →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 text-sm",
                            style: {
                                color: C.g400
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "👆"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MongoliaMap.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                "Аймаг дэр дараад барааг харна уу"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/map/MongoliaMap.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MongoliaMap.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/MongoliaMap.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/MongoliaMap.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/map/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MongoliaMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MongoliaMap.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "NewBadge",
    ()=>NewBadge,
    "OrganicBadge",
    ()=>OrganicBadge,
    "PremiumBadge",
    ()=>PremiumBadge,
    "VerifiedBadge",
    ()=>VerifiedBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Badge({ children, variant = "slate", color, className = "" }) {
    if (color) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-white ${className}`,
            style: {
                background: color
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Badge.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `badge badge-${variant} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function NewBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: ".06em",
            color: "#047857",
            background: "#ecfdf5",
            border: "1px solid #a7f3d0",
            animation: "badgePop .35s var(--ease-spring)"
        },
        children: "✦ ШИНЭ"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function OrganicBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: ".04em",
            color: "#065f46",
            background: "#d1fae5",
            border: "1px solid #6ee7b7",
            animation: "badgePop .35s var(--ease-spring) .05s both"
        },
        children: "🌿 ORGANIC"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function VerifiedBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: ".04em",
            color: "#0f766e",
            background: "#ccfbf1",
            border: "1px solid #5eead4",
            animation: "badgePop .35s var(--ease-spring) .10s both"
        },
        children: "✓ Баталгаа"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function PremiumBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: ".04em",
            color: "#1e40af",
            background: "#dbeafe",
            border: "1px solid #93c5fd"
        },
        children: "⭐ Шилдэг"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StarRating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SkeletonCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SkeletonCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumbs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumbs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterTags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FilterTags.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollProgress.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}),
"[project]/src/components/orders/OrderTrackingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderTrackingModal",
    ()=>OrderTrackingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const STATUS_CONFIG = {
    БАТАЛГААЖСАН: {
        color: "#059669",
        bg: "#f0fdf4",
        icon: "✅"
    },
    БЭЛТГЭЖ_БАЙНА: {
        color: "#d97706",
        bg: "#fffbeb",
        icon: "📦"
    },
    ХҮРГЭЛТЭНД: {
        color: "#0e7490",
        bg: "#eff6ff",
        icon: "🚚"
    },
    ХҮРГЭГДСЭН: {
        color: "#059669",
        bg: "#f0fdf4",
        icon: "🎉"
    },
    ЦУЦЛАСАН: {
        color: "#dc2626",
        bg: "#fef2f2",
        icon: "❌"
    }
};
function OrderTrackingModal({ order, onClose }) {
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const cfg = STATUS_CONFIG[order.status] || {
        color: C.green,
        bg: C.greenBg,
        icon: "📦"
    };
    const total = order.items.reduce((s, i)=>s + i.product.price * i.qty, 0);
    const STEPS = [
        {
            key: "БАТАЛГААЖСАН",
            label: "Захиалга баталгаажсан",
            icon: "✅",
            desc: "Таны захиалгыг хүлээн авлаа"
        },
        {
            key: "БЭЛТГЭЖ_БАЙНА",
            label: "Бэлтгэж байна",
            icon: "📦",
            desc: "Худалдагч бараагаа бэлдэж байна"
        },
        {
            key: "ХҮРГЭЛТЭНД",
            label: "Хүргэлтэнд гарсан",
            icon: "🚚",
            desc: "Таны хаяг руу хүргэж явна"
        },
        {
            key: "ХҮРГЭГДСЭН",
            label: "Амжилттай хүргэгдсэн",
            icon: "🎉",
            desc: "Бараа хүргэгдлээ"
        }
    ];
    const statuses = [
        "БАТАЛГААЖСАН",
        "БЭЛТГЭЖ_БАЙНА",
        "ХҮРГЭЛТЭНД",
        "ХҮРГЭГДСЭН"
    ];
    const currentIdx = statuses.indexOf(order.status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[800] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-lg rounded-3xl overflow-hidden animate-scale-in",
                style: {
                    background: C.white,
                    boxShadow: "0 32px 80px rgba(0,0,0,.25)",
                    maxHeight: "90vh",
                    overflow: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden px-6 pt-7 pb-6",
                        style: {
                            background: `linear-gradient(135deg,${cfg.color},${cfg.color}cc)`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-all hover:bg-white/30",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-3",
                                children: cfg.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-white/60 font-bold tracking-widest uppercase mb-1",
                                children: "Захиалгын дугаар"
                            }, void 0, false, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-black text-white display-font mb-1",
                                children: order.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/70",
                                        children: [
                                            "📅 ",
                                            order.createdAt
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/70",
                                        children: [
                                            "🏪 ",
                                            order.seller
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black text-white",
                                        children: [
                                            "₮",
                                            total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex flex-col gap-5",
                        children: [
                            order.status !== "ЦУЦЛАСАН" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black mb-4 display-font",
                                        style: {
                                            color: C.text
                                        },
                                        children: "📍 Хүргэлтийн явц"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-5 top-5 bottom-5 w-0.5",
                                                style: {
                                                    background: C.g100,
                                                    zIndex: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-5 top-5 w-0.5 transition-all duration-1000",
                                                style: {
                                                    background: `linear-gradient(to bottom,${cfg.color},${cfg.color})`,
                                                    height: `${Math.max(0, currentIdx / (STEPS.length - 1) * 100)}%`,
                                                    zIndex: 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-5 relative z-10",
                                                children: STEPS.map((step, i)=>{
                                                    const done = i <= currentIdx;
                                                    const current = i === currentIdx;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 transition-all duration-500",
                                                                style: {
                                                                    background: done ? cfg.color : C.g100,
                                                                    boxShadow: current ? `0 0 0 6px ${cfg.color}25` : "none",
                                                                    transform: current ? "scale(1.1)" : "none"
                                                                },
                                                                children: done ? step.icon : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: C.g300,
                                                                        fontSize: 12
                                                                    },
                                                                    children: "○"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 47
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 pt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-black",
                                                                        style: {
                                                                            color: done ? C.text : C.g300
                                                                        },
                                                                        children: step.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] mt-0.5",
                                                                        style: {
                                                                            color: done ? C.g500 : C.g300
                                                                        },
                                                                        children: done ? step.desc : "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 mt-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 rounded-full animate-pulse",
                                                                                style: {
                                                                                    background: cfg.color
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                                lineNumber: 107,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-black",
                                                                                style: {
                                                                                    color: cfg.color
                                                                                },
                                                                                children: "Одоогийн байдал"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                                lineNumber: 108,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, step.key, true, {
                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            order.status === "ЦУЦЛАСАН" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl text-center",
                                style: {
                                    background: "#fef2f2",
                                    border: "1.5px solid #fecaca"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-2",
                                        children: "😔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-black text-red-700 mb-1",
                                        children: "Захиалга цуцлагдсан"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500",
                                        children: "Та дахин захиалга хийх боломжтой"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black mb-3 display-font",
                                        style: {
                                            color: C.text
                                        },
                                        children: "🛍 Захиалгын бараанууд"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: order.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 p-3 rounded-2xl",
                                                style: {
                                                    background: C.g50,
                                                    border: `1px solid ${C.g100}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                                                        style: {
                                                            background: C.greenBg
                                                        },
                                                        children: item.product.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold truncate",
                                                                style: {
                                                                    color: C.text
                                                                },
                                                                children: item.product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs",
                                                                style: {
                                                                    color: C.g400
                                                                },
                                                                children: [
                                                                    "₮",
                                                                    item.product.price.toLocaleString(),
                                                                    " × ",
                                                                    item.qty,
                                                                    " ",
                                                                    item.product.unit
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-black flex-shrink-0",
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: [
                                                            "₮",
                                                            (item.product.price * item.qty).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-2xl",
                                style: {
                                    background: C.g50,
                                    border: `1px solid ${C.g100}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-black",
                                                style: {
                                                    color: C.text
                                                },
                                                children: "Хүргэлтийн хаяг"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: C.g600
                                        },
                                        children: order.address
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-3.5 rounded-2xl",
                                style: {
                                    background: C.greenBg,
                                    border: `1.5px solid ${C.green}30`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: C.green
                                        },
                                        children: "Нийт дүн"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-black display-font",
                                        style: {
                                            color: C.green
                                        },
                                        children: [
                                            "₮",
                                            total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    order.status !== "ХҮРГЭГДСЭН" && order.status !== "ЦУЦЛАСАН" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-1 py-3 rounded-2xl text-sm font-black font-sans border transition-all hover:scale-[1.02]",
                                        style: {
                                            color: C.g600,
                                            borderColor: C.g200,
                                            background: "transparent"
                                        },
                                        children: "📞 Дэмжлэг авах"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "flex-1 py-3 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5",
                                        style: {
                                            background: "linear-gradient(135deg,#059669,#059669)",
                                            boxShadow: "0 6px 20px rgba(22,101,52,.3)"
                                        },
                                        children: "✓ Хаах"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/orders/OrderTrackingModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/orders/OrdersView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrdersView",
    ()=>OrdersView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrderTrackingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/orders/OrderTrackingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const STATUS_CONFIG = {
    CONFIRMED: {
        bg: "#dcfce7",
        color: "#059669",
        dot: "#22c55e",
        icon: "✅",
        label: "БАТАЛГААЖСАН"
    },
    PREPARING: {
        bg: "#fef9c3",
        color: "#854d0e",
        dot: "#eab308",
        icon: "📦",
        label: "БЭЛТГЭЖ БАЙНА"
    },
    SHIPPED: {
        bg: "#dbeafe",
        color: "#0e7490",
        dot: "#3b82f6",
        icon: "🚚",
        label: "ХҮРГЭЛТЭНД"
    },
    DELIVERED: {
        bg: "#f0fdf4",
        color: "#059669",
        dot: "#4ade80",
        icon: "🎉",
        label: "ХҮРГЭГДСЭН"
    },
    CANCELLED: {
        bg: "#fee2e2",
        color: "#dc2626",
        dot: "#ef4444",
        icon: "❌",
        label: "ЦУЦЛАСАН"
    }
};
const STATUS_TRANSLATE = {
    CONFIRMED: "БАТАЛГААЖСАН",
    PREPARING: "БЭЛТГЭЖ_БАЙНА",
    SHIPPED: "ХҮРГЭЛТЭНД",
    DELIVERED: "ХҮРГЭГДСЭН",
    CANCELLED: "ЦУЦЛАСАН"
};
function toUserOrder(d) {
    return {
        id: String(d.id),
        status: STATUS_TRANSLATE[d.status] ?? d.status,
        address: d.deliveryAddress,
        seller: d.seller,
        createdAt: new Date(d.createdAt).toLocaleDateString("mn-MN"),
        total: d.items.reduce((s, i)=>s + i.unitPrice * i.quantity, 0),
        trackingSteps: [
            {
                label: "Баталгаажсан",
                done: true
            },
            {
                label: "Бэлтгэж байна",
                done: [
                    "PREPARING",
                    "SHIPPED",
                    "DELIVERED"
                ].includes(d.status)
            },
            {
                label: "Хүргэлтэнд гарсан",
                done: [
                    "SHIPPED",
                    "DELIVERED"
                ].includes(d.status)
            },
            {
                label: "Хүргэгдсэн",
                done: d.status === "DELIVERED"
            }
        ],
        items: d.items.map((i)=>({
                product: {
                    id: 0,
                    name: i.productName,
                    price: i.unitPrice,
                    unit: "кг",
                    emoji: i.productEmoji ?? "📦",
                    cat: "",
                    aimag: "",
                    seller: d.seller,
                    story: "",
                    phone: "",
                    rating: 5,
                    reviews: 0,
                    verified: true,
                    isNew: false,
                    isOrganic: false,
                    imageCount: 1,
                    date: new Date(d.createdAt).toLocaleDateString("mn-MN")
                },
                qty: i.quantity
            }))
    };
}
function OrdersView({ orders: propOrders = [] }) {
    const { C, dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.04);
    const [apiOrders, setApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tracking, setTracking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterStatus, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Бүгд");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoggedIn) return;
        setLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderApi"].myOrders().then((res)=>setApi(Array.isArray(res) ? res.map(toUserOrder) : [])).catch(()=>{}).finally(()=>setLoading(false));
    }, [
        isLoggedIn
    ]);
    const allOrders = [
        ...propOrders,
        ...apiOrders
    ];
    const STATUS_FILTERS = [
        "Бүгд",
        "БАТАЛГААЖСАН",
        "ХҮРГЭЛТЭНД",
        "ХҮРГЭГДСЭН",
        "ЦУЦЛАСАН"
    ];
    const filtered = filterStatus === "Бүгд" ? allOrders : allOrders.filter((o)=>o.status === filterStatus);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "📦 Миний захиалгууд",
                subtitle: `${allOrders.length} захиалга`,
                badge: "📬 Захиалгын түүх"
            }, void 0, false, {
                fileName: "[project]/src/components/orders/OrdersView.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-4xl mx-auto px-4 md:px-8 py-8",
                style: {
                    opacity: visible ? 1 : 0,
                    animation: visible ? "fadeUp .6s ease both" : "none"
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageLoader"], {
                    message: "Захиалгууд ачааллаж байна..."
                }, void 0, false, {
                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this) : allOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl overflow-hidden",
                    style: {
                        background: C.white,
                        border: `1.5px solid ${C.g100}`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                        type: "orders"
                    }, void 0, false, {
                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 flex-wrap mb-6",
                            children: STATUS_FILTERS.map((st)=>{
                                const cfg = st === "Бүгд" ? null : Object.values(STATUS_CONFIG).find((c)=>c.label.replace(" ", "_") === st || c.label === st);
                                const active = filterStatus === st;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(st),
                                    className: "px-4 py-2 rounded-xl text-xs font-black transition-all hover:-translate-y-0.5 font-sans",
                                    style: {
                                        background: active ? cfg?.color ?? C.green : C.g50,
                                        color: active ? "#fff" : C.g500,
                                        border: `1.5px solid ${active ? (cfg?.color ?? C.green) + "40" : C.g200}`,
                                        boxShadow: active ? `0 4px 12px ${cfg?.color ?? C.green}30` : "none"
                                    },
                                    children: cfg ? `${cfg.icon} ${st}` : `📋 ${st}`
                                }, st, false, {
                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                    lineNumber: 110,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl p-12 text-center",
                                style: {
                                    background: C.white,
                                    border: `1.5px solid ${C.g100}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl mb-3",
                                        children: "📭"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-black",
                                        style: {
                                            color: C.text
                                        },
                                        children: "Энэ төлөвт захиалга байхгүй"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this) : filtered.map((order, i)=>{
                                // Look up by translated status
                                const cfgKey = Object.entries(STATUS_TRANSLATE).find(([, v])=>v === order.status)?.[0] ?? "";
                                const cfg = STATUS_CONFIG[cfgKey] ?? {
                                    bg: C.g100,
                                    color: C.g500,
                                    dot: C.g400,
                                    icon: "📦",
                                    label: order.status
                                };
                                const total = order.items.reduce((s, it)=>s + it.product.price * it.qty, 0);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group",
                                    style: {
                                        background: C.white,
                                        border: `1.5px solid ${C.g100}`,
                                        boxShadow: "0 2px 12px rgba(0,0,0,.05)",
                                        animation: `fadeUp .5s cubic-bezier(.16,1,.3,1) ${i * 0.07}s both`
                                    },
                                    onClick: ()=>setTracking(order),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-5 py-3",
                                            style: {
                                                background: cfg.bg,
                                                borderBottom: `1px solid ${cfg.color}20`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: cfg.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-black",
                                                            style: {
                                                                color: cfg.color
                                                            },
                                                            children: cfg.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-semibold",
                                                            style: {
                                                                color: cfg.color
                                                            },
                                                            children: [
                                                                "📅 ",
                                                                order.createdAt
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg transition-transform group-hover:translate-x-1 duration-200",
                                                            style: {
                                                                color: cfg.color
                                                            },
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                            lineNumber: 153,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-black font-mono px-2 py-0.5 rounded-lg",
                                                                        style: {
                                                                            background: C.g100,
                                                                            color: C.g600
                                                                        },
                                                                        children: [
                                                                            "#",
                                                                            order.id.slice(-8).toUpperCase()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold",
                                                                        style: {
                                                                            color: C.g400
                                                                        },
                                                                        children: [
                                                                            "🏪 ",
                                                                            order.seller
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-wrap mt-2",
                                                                children: [
                                                                    order.items.slice(0, 3).map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold",
                                                                            style: {
                                                                                background: C.g50,
                                                                                border: `1px solid ${C.g100}`
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-base",
                                                                                    children: item.product.emoji
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                                    lineNumber: 189,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: C.text
                                                                                    },
                                                                                    children: item.product.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                                    lineNumber: 190,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold",
                                                                                    style: {
                                                                                        color: C.g400
                                                                                    },
                                                                                    children: [
                                                                                        "×",
                                                                                        item.qty
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                                    lineNumber: 191,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                            lineNumber: 186,
                                                                            columnNumber: 33
                                                                        }, this)),
                                                                    order.items.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-2.5 py-1.5 rounded-xl text-xs font-bold",
                                                                        style: {
                                                                            background: C.g50,
                                                                            color: C.g400
                                                                        },
                                                                        children: [
                                                                            "+",
                                                                            order.items.length - 3,
                                                                            " дахь"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 mt-2.5 text-[11px] font-semibold",
                                                                style: {
                                                                    color: C.g400
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📍"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "line-clamp-1",
                                                                        children: order.address
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-black display-font",
                                                                style: {
                                                                    color: C.orange
                                                                },
                                                                children: [
                                                                    "₮",
                                                                    total.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] mt-0.5",
                                                                style: {
                                                                    color: C.g400
                                                                },
                                                                children: [
                                                                    order.items.length,
                                                                    " бараа"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "mt-2 px-3 py-1.5 rounded-xl text-[11px] font-black text-white font-sans transition-all hover:scale-105",
                                                                style: {
                                                                    background: `linear-gradient(135deg,${cfg.color},${cfg.color}cc)`
                                                                },
                                                                children: "Дэлгэрэнгүй →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/orders/OrdersView.tsx",
                                                lineNumber: 170,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                                            lineNumber: 169,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, order.id, true, {
                                    fileName: "[project]/src/components/orders/OrdersView.tsx",
                                    lineNumber: 141,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/orders/OrdersView.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/orders/OrdersView.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            tracking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrderTrackingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingModal"], {
                order: tracking,
                onClose: ()=>setTracking(null)
            }, void 0, false, {
                fileName: "[project]/src/components/orders/OrdersView.tsx",
                lineNumber: 235,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/chat/ChatPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatPanel",
    ()=>ChatPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PARTNERS = {
    "seller1": {
        name: "Б. Мөнхбаяр",
        emoji: "👨‍🌾",
        product: "Ямааны ноолуур",
        online: true
    },
    "seller2": {
        name: "Д. Эрдэнэ",
        emoji: "🧑‍🌾",
        product: "Хонины мах",
        online: false
    },
    "seller3": {
        name: "Т. Болормаа",
        emoji: "👩‍🌾",
        product: "Зөгийн бал",
        online: true
    }
};
const DEFAULT_PARTNER = {
    name: "Худалдагч",
    emoji: "👤",
    product: "Бараа",
    online: false
};
const QUICK_REPLIES = [
    "Бараа байна уу?",
    "Үнэ хэд вэ?",
    "Хэзээ хүргэх вэ?",
    "Баярлалаа!"
];
// Relative time formatter (Mongolian)
function relTime(iso) {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Яг одоо";
    if (mins < 60) return `${mins} мин өмнө`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} цаг өмнө`;
    return `Өчигдөр`;
}
// Typing indicator dots
function TypingBubble({ dark, C }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "10px 14px",
            borderRadius: "18px 18px 18px 4px",
            background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
            width: "fit-content",
            maxWidth: 72
        },
        children: [
            0,
            0.2,
            0.4
        ].map((delay, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: dark ? "#64748b" : "#94a3b8",
                    display: "inline-block",
                    animation: `typingDot 1.2s ease-in-out ${delay}s infinite`
                }
            }, i, false, {
                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/chat/ChatPanel.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function ChatPanel({ onClose }) {
    const { C, dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { threads, activeThread, openThread, messages, sendMessage, loadingMsgs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [localView, setLocalView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeThread ? "chat" : "list");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages.length,
        isTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeThread) {
            setLocalView("chat");
            setTimeout(()=>inputRef.current?.focus(), 300);
        }
    }, [
        activeThread
    ]);
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!input.trim()) return;
        if (!activeThread) {
            error("Яриа сонгоно уу");
            return;
        }
        sendMessage(activeThread, input.trim());
        setInput("");
        // Show typing indicator for 1.2s then it auto-resolves via ChatContext
        setIsTyping(true);
        setTimeout(()=>setIsTyping(false), 1600);
    }, [
        input,
        activeThread,
        sendMessage,
        error
    ]);
    const handleKey = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };
    const partner = activeThread ? PARTNERS[activeThread] || DEFAULT_PARTNER : null;
    const displayThreads = threads.length > 0 ? threads : [
        "seller1",
        "seller2",
        "seller3"
    ];
    const borderColor = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[490]",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[500] rounded-3xl overflow-hidden animate-scale-in flex flex-col",
                style: {
                    width: "calc(100vw - 2rem)",
                    maxWidth: 360,
                    background: C.white,
                    border: `1.5px solid ${borderColor}`,
                    boxShadow: "0 24px 80px rgba(0,0,0,.24), 0 8px 32px rgba(0,0,0,.10)",
                    height: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "linear-gradient(135deg,#059669 0%,#0d9488 100%)",
                            padding: "14px 16px",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: 10
                        },
                        children: [
                            localView === "chat" && partner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLocalView("list"),
                                        style: {
                                            background: "rgba(255,255,255,.15)",
                                            border: "none",
                                            borderRadius: 8,
                                            width: 32,
                                            height: 32,
                                            cursor: "pointer",
                                            color: "#fff",
                                            fontSize: 16,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: "←"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 38,
                                                    height: 38,
                                                    borderRadius: "50%",
                                                    fontSize: 22,
                                                    background: "rgba(255,255,255,.2)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: partner.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: "absolute",
                                                    bottom: 0,
                                                    right: 0,
                                                    width: 11,
                                                    height: 11,
                                                    borderRadius: "50%",
                                                    background: partner.online ? "#4ade80" : "#94a3b8",
                                                    border: "2px solid #059669",
                                                    animation: partner.online ? "pulseDot 2s ease-in-out infinite" : "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: "#fff",
                                                    lineHeight: 1.2
                                                },
                                                children: partner.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    color: "rgba(255,255,255,.65)",
                                                    marginTop: 2
                                                },
                                                children: [
                                                    partner.online ? "● Онлайн" : "● Офлайн",
                                                    " · ",
                                                    partner.product
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            fontSize: 18,
                                            background: "rgba(255,255,255,.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: "#fff"
                                                },
                                                children: "Мессеж"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    color: "rgba(255,255,255,.65)"
                                                },
                                                children: [
                                                    displayThreads.length,
                                                    " яриа"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "rgba(255,255,255,.15)",
                                    border: "none",
                                    borderRadius: 8,
                                    width: 32,
                                    height: 32,
                                    cursor: "pointer",
                                    color: "#fff",
                                    fontSize: 15,
                                    fontWeight: 700,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    localView === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto"
                        },
                        children: displayThreads.map((tid, i)=>{
                            const pt = PARTNERS[tid] || DEFAULT_PARTNER;
                            const unread = i === 0 ? 2 : i === 2 ? 1 : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>openThread(tid),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    width: "100%",
                                    padding: "12px 16px",
                                    background: "none",
                                    border: "none",
                                    borderBottom: `1px solid ${borderColor}`,
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontFamily: "inherit",
                                    transition: "background .15s"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = dark ? "rgba(255,255,255,.04)" : "#f8fafc",
                                onMouseLeave: (e)=>e.currentTarget.style.background = "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 42,
                                                    height: 42,
                                                    borderRadius: "50%",
                                                    fontSize: 24,
                                                    background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: pt.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: "absolute",
                                                    bottom: 0,
                                                    right: 0,
                                                    width: 11,
                                                    height: 11,
                                                    borderRadius: "50%",
                                                    background: pt.online ? "#10b981" : "#94a3b8",
                                                    border: `2px solid ${C.white}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: 3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 700,
                                                            color: C.text
                                                        },
                                                        children: pt.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: C.g400
                                                        },
                                                        children: "2 цаг өмнө"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: unread > 0 ? C.text : C.g400,
                                                    fontWeight: unread > 0 ? 600 : 400,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                children: [
                                                    pt.product,
                                                    " талаар асуусан"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 216,
                                        columnNumber: 19
                                    }, this),
                                    unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            background: "#059669",
                                            color: "#fff",
                                            fontSize: 10,
                                            fontWeight: 800,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        children: unread
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 235,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, tid, true, {
                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                lineNumber: 186,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    localView === "chat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto",
                                    padding: "14px 14px 8px"
                                },
                                children: [
                                    loadingMsgs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: "20px 0",
                                            color: C.g400,
                                            fontSize: 12
                                        },
                                        children: "Татаж байна..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "24px 16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 36,
                                                    marginBottom: 12
                                                },
                                                children: "👋"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color: C.text,
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    partner?.name,
                                                    "тай яриа эхлэх"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: C.g400
                                                },
                                                children: "Дор байгаа хурдан хариулт ашиглана уу"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this) : messages.map((msg)=>{
                                        const isUser = msg.from === "user";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: isUser ? "flex-end" : "flex-start",
                                                marginBottom: 10
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: "78%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "9px 13px",
                                                            borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                                                            background: isUser ? "linear-gradient(135deg,#059669,#0d9488)" : dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                                                            color: isUser ? "#fff" : C.text,
                                                            fontSize: 13,
                                                            lineHeight: 1.5,
                                                            fontWeight: 500
                                                        },
                                                        children: msg.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 9,
                                                            color: C.g400,
                                                            marginTop: 3,
                                                            textAlign: isUser ? "right" : "left",
                                                            paddingLeft: isUser ? 0 : 4,
                                                            paddingRight: isUser ? 4 : 0
                                                        },
                                                        children: [
                                                            relTime(msg.time || new Date().toISOString()),
                                                            isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    marginLeft: 4
                                                                },
                                                                children: msg.read ? " ✓✓" : " ✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                                lineNumber: 276,
                                                columnNumber: 23
                                            }, this)
                                        }, msg.id, false, {
                                            fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            marginBottom: 10
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingBubble, {
                                            dark: dark,
                                            C: C
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6,
                                    padding: "4px 12px",
                                    overflowX: "auto",
                                    flexShrink: 0,
                                    borderTop: `1px solid ${borderColor}`
                                },
                                children: QUICK_REPLIES.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setInput(q);
                                            inputRef.current?.focus();
                                        },
                                        style: {
                                            flexShrink: 0,
                                            padding: "5px 12px",
                                            borderRadius: 999,
                                            fontSize: 11,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            background: dark ? "rgba(16,185,129,.07)" : "#f0fdf4",
                                            color: dark ? "#34d399" : "#059669",
                                            border: `1px solid ${dark ? "rgba(52,211,153,.15)" : "rgba(5,150,105,.15)"}`,
                                            fontFamily: "inherit",
                                            transition: "all .15s"
                                        },
                                        children: q
                                    }, q, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "10px 12px",
                                    borderTop: `1px solid ${borderColor}`,
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            border: "none",
                                            background: dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                                            cursor: "pointer",
                                            fontSize: 16,
                                            flexShrink: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: C.g400
                                        },
                                        title: "Зураг илгээх",
                                        children: "📷"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: handleKey,
                                        placeholder: "Мессеж бичих...",
                                        style: {
                                            flex: 1,
                                            background: dark ? "rgba(255,255,255,.07)" : "#f8fafc",
                                            border: `1.5px solid ${dark ? "rgba(255,255,255,.10)" : "#e2e8f0"}`,
                                            borderRadius: 12,
                                            padding: "9px 14px",
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: C.text,
                                            fontFamily: "inherit",
                                            outline: "none",
                                            transition: "border-color .2s"
                                        },
                                        onFocus: (e)=>e.target.style.borderColor = "#059669",
                                        onBlur: (e)=>e.target.style.borderColor = dark ? "rgba(255,255,255,.10)" : "#e2e8f0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: send,
                                        disabled: !input.trim(),
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            border: "none",
                                            background: input.trim() ? "linear-gradient(135deg,#059669,#0d9488)" : dark ? "rgba(255,255,255,.08)" : "#f1f5f9",
                                            cursor: input.trim() ? "pointer" : "not-allowed",
                                            color: input.trim() ? "#fff" : C.g400,
                                            fontSize: 16,
                                            flexShrink: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all .2s",
                                            boxShadow: input.trim() ? "0 3px 10px rgba(5,150,105,.28)" : "none"
                                        },
                                        children: "➤"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatPanel.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_components_0~-mj8x._.js.map