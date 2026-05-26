module.exports = [
"[project]/src/components/products/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishlistContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WishlistContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StarRating.tsx [app-ssr] (ecmascript)");
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
function ProductCard({ product: p, index = 0, onOpen, onAuthRequired }) {
    const { dark, C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { has, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishlistContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { add: addCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { success } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.04);
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dotIdx, setDotIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [added, setAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishAnim, setWishAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wished = has(p.id);
    const stockLevel = p.id % 3 === 0 ? "low" : p.id % 5 === 0 ? "out" : "good";
    const stockCfg = {
        good: {
            color: "#10b981",
            label: "Байна",
            dot: "#10b981"
        },
        low: {
            color: "#f59e0b",
            label: "Бага үлдсэн",
            dot: "#f59e0b"
        },
        out: {
            color: "#ef4444",
            label: "Дууссан",
            dot: "#ef4444"
        }
    }[stockLevel];
    const handleMouseEnter = ()=>{
        setHov(true);
        setDotIdx((d)=>(d + 1) % p.imageCount);
    };
    const handleAddCart = (e)=>{
        e.stopPropagation();
        if (!isLoggedIn) {
            onAuthRequired?.();
            return;
        }
        addCart(p, 1);
        setAdded(true);
        success(`"${p.name}" сагсанд нэмэгдлээ! 🛒`);
        setTimeout(()=>setAdded(false), 1800);
    };
    const handleWishlist = (e)=>{
        e.stopPropagation();
        toggle(p.id);
        setWishAnim(true);
        setTimeout(()=>setWishAnim(false), 650);
    };
    // Premium image bg
    const imgBg = dark ? `linear-gradient(145deg, #0a1f18, #0c1d1d)` : `linear-gradient(145deg, #ecfdf5, #f0fdfa)`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: ()=>setHov(false),
        onClick: ()=>onOpen(p),
        className: "card-accent-top",
        style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: 18,
            overflow: "hidden",
            cursor: "pointer",
            background: C.white,
            border: `1.5px solid ${hov ? dark ? "rgba(52,211,153,.25)" : "rgba(16,185,129,.22)" : dark ? "rgba(255,255,255,.07)" : "#e8edf2"}`,
            boxShadow: hov ? dark ? "0 24px 60px rgba(0,0,0,.52), 0 4px 14px rgba(0,0,0,.38), 0 0 0 3px rgba(52,211,153,.08)" : "0 24px 56px rgba(0,0,0,.09), 0 4px 12px rgba(0,0,0,.05), 0 0 0 3px rgba(16,185,129,.07)" : dark ? "0 2px 10px rgba(0,0,0,.28)" : "0 1px 4px rgba(0,0,0,.04)",
            transform: hov ? "translateY(-7px) scale(1.009)" : "none",
            transition: "transform .3s var(--ease-spring), box-shadow .3s ease, border-color .22s ease",
            opacity: visible ? 1 : 0,
            animation: visible ? `fadeUp .55s cubic-bezier(.16,1,.3,1) ${index * 0.065}s both` : "none",
            position: "relative",
            isolation: "isolate"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    paddingTop: "72%",
                    background: imgBg,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "clamp(50px, 7vw, 70px)",
                            transform: hov ? "scale(1.18) translateY(-4px)" : "scale(1)",
                            transition: "transform .5s cubic-bezier(.4,0,.2,1)",
                            filter: hov ? "drop-shadow(0 12px 24px rgba(0,0,0,.14))" : "none"
                        },
                        children: p.emoji
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "40%",
                            background: "linear-gradient(to top, rgba(0,0,0,.06), transparent)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 10,
                            left: 10,
                            display: "flex",
                            gap: 5,
                            flexWrap: "wrap",
                            zIndex: 10
                        },
                        children: [
                            p.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewBadge"], {}, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 116,
                                columnNumber: 27
                            }, this),
                            p.isOrganic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganicBadge"], {}, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 117,
                                columnNumber: 27
                            }, this),
                            p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerifiedBadge"], {}, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 118,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleWishlist,
                        style: {
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 15,
                            cursor: "pointer",
                            zIndex: 10,
                            background: wished ? "rgba(239,68,68,.12)" : "rgba(255,255,255,.92)",
                            backdropFilter: "blur(12px)",
                            border: wished ? "1.5px solid rgba(239,68,68,.28)" : "1.5px solid rgba(255,255,255,.7)",
                            boxShadow: wished ? "0 4px 14px rgba(239,68,68,.18)" : "0 2px 12px rgba(0,0,0,.12)",
                            animation: wishAnim ? "wishPop .38s cubic-bezier(.16,1,.3,1)" : "none",
                            outline: "none",
                            transition: "all .2s var(--ease-spring)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                filter: wished ? "none" : "grayscale(1)",
                                transition: "filter .2s, transform .2s",
                                transform: wished ? "scale(1)" : "scale(.9)",
                                display: "inline-block"
                            },
                            children: wished ? "❤️" : "🤍"
                        }, void 0, false, {
                            fileName: "[project]/src/components/products/ProductCard.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    stockLevel === "low" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "3px 10px",
                            borderRadius: 999,
                            fontSize: 10,
                            fontWeight: 800,
                            color: "#92400e",
                            background: "rgba(254,243,199,.95)",
                            border: "1px solid #fde68a",
                            backdropFilter: "blur(6px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: "#f59e0b",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            "Бага үлдсэн"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    p.imageCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 10,
                            left: 0,
                            right: 0,
                            display: "flex",
                            justifyContent: "center",
                            gap: 4,
                            zIndex: 10,
                            pointerEvents: "none"
                        },
                        children: Array.from({
                            length: p.imageCount
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderRadius: 999,
                                    transition: "all .28s var(--ease-spring)",
                                    width: i === dotIdx ? 16 : 5,
                                    height: 5,
                                    background: i === dotIdx ? "#fff" : "rgba(255,255,255,.45)",
                                    boxShadow: i === dotIdx ? "0 2px 6px rgba(0,0,0,.2)" : "none"
                                }
                            }, i, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 10,
                            bottom: 10,
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            padding: "3px 10px",
                            borderRadius: 999,
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#fff",
                            backdropFilter: "blur(10px)",
                            background: "rgba(5,150,105,.88)",
                            border: "1px solid rgba(52,211,153,.22)",
                            boxShadow: "0 2px 8px rgba(5,150,105,.25)"
                        },
                        children: [
                            "📍 ",
                            p.aimag
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 20,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            padding: 10,
                            gap: 7,
                            background: "linear-gradient(to top, rgba(2,20,14,.94) 0%, rgba(2,20,14,.40) 55%, transparent 80%)",
                            opacity: hov ? 1 : 0,
                            transform: hov ? "translateY(0)" : "translateY(8px)",
                            transition: "all .3s var(--ease-spring)",
                            pointerEvents: hov ? "auto" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    alert(`📞 ${p.phone}`);
                                },
                                style: {
                                    width: "100%",
                                    padding: "9px",
                                    borderRadius: 12,
                                    border: "none",
                                    fontSize: 12,
                                    fontWeight: 800,
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    background: "rgba(255,255,255,.95)",
                                    color: "#059669",
                                    boxShadow: "0 4px 16px rgba(0,0,0,.20)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 6,
                                    transition: "all .18s ease"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "#fff";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,.95)";
                                },
                                children: "📞 Шууд залгах"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddCart,
                                style: {
                                    width: "100%",
                                    padding: "9px",
                                    borderRadius: 12,
                                    border: "none",
                                    fontSize: 12,
                                    fontWeight: 800,
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    color: "#fff",
                                    background: added ? "linear-gradient(135deg, #047857, #0d9488)" : "linear-gradient(135deg, #059669, #0d9488)",
                                    boxShadow: "0 4px 16px rgba(5,150,105,.35)",
                                    transform: added ? "scale(.98)" : "scale(1)",
                                    transition: "all .2s var(--ease-spring)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 6
                                },
                                children: added ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                animation: "scaleCheck .28s var(--ease-spring)"
                                            },
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/products/ProductCard.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        "Нэмэгдлээ!"
                                    ]
                                }, void 0, true) : "🛒 Сагсанд нэмэх"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    padding: "14px 15px 15px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 800,
                                    letterSpacing: "0.1em",
                                    color: "#10b981",
                                    textTransform: "uppercase",
                                    fontFamily: "var(--font-display)"
                                },
                                children: p.cat
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: stockCfg.dot,
                                            display: "inline-block",
                                            boxShadow: `0 0 0 2px ${stockCfg.dot}22`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductCard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            fontWeight: 700,
                                            color: stockCfg.color
                                        },
                                        children: stockCfg.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductCard.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: 14,
                            fontWeight: 800,
                            lineHeight: 1.35,
                            flex: 1,
                            marginBottom: 7,
                            color: C.text,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            fontFamily: "var(--font-display)",
                            transition: "color .18s ease",
                            ...hov ? {
                                color: dark ? "#f8fafc" : "#020617"
                            } : {}
                        },
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            marginBottom: 7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13
                                },
                                children: "👨‍🌾"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: C.g500
                                },
                                children: [
                                    p.seller,
                                    p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: 6,
                                            fontSize: 9,
                                            fontWeight: 800,
                                            color: "#fff",
                                            background: "#10b981",
                                            borderRadius: 99,
                                            padding: "1px 5px"
                                        },
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductCard.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                        rating: p.rating,
                        reviews: p.reviews
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            gap: 5,
                            marginTop: 11,
                            marginBottom: 13
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 21,
                                    fontWeight: 900,
                                    letterSpacing: "-0.02em",
                                    color: "#059669",
                                    fontFamily: "var(--font-display)",
                                    transition: "color .18s ease",
                                    ...hov ? {
                                        color: dark ? "#34d399" : "#047857"
                                    } : {}
                                },
                                children: [
                                    "₮",
                                    p.price.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: C.g400
                                },
                                children: [
                                    "/ ",
                                    p.unit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: 11,
                            borderTop: `1px solid ${dark ? "rgba(255,255,255,.06)" : "#f1f5f9"}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: C.g400
                                },
                                children: [
                                    "📅 ",
                                    p.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "5px 13px",
                                    borderRadius: 999,
                                    fontSize: 11,
                                    fontWeight: 800,
                                    cursor: "pointer",
                                    background: hov ? "linear-gradient(135deg, #059669, #0d9488)" : dark ? "rgba(16,185,129,.08)" : "#ecfdf5",
                                    color: hov ? "#fff" : "#059669",
                                    boxShadow: hov ? "0 4px 14px rgba(5,150,105,.28)" : "none",
                                    border: hov ? "none" : `1px solid ${dark ? "rgba(52,211,153,.12)" : "#a7f3d0"}`,
                                    transition: "all .22s var(--ease-spring)",
                                    transform: hov ? "scale(1.04)" : "scale(1)"
                                },
                                children: "Үзэх →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductCard.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ProductCard.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ProductCard.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products/ProductCard.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/products/ProductModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductModal",
    ()=>ProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ChatContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StarRating.tsx [app-ssr] (ecmascript)");
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
// ── Delivery estimate based on aimag distance from UB ──────────────────────
const DELIVERY_DAYS = {
    "Улаанбаатар": 1,
    "Дархан-Уул": 2,
    "Орхон": 2,
    "Сэлэнгэ": 3,
    "Төв": 3,
    "Булган": 3,
    "Өвөрхангай": 4,
    "Архангай": 4,
    "Хангай": 4,
    "Хөвсгөл": 5,
    "Завхан": 5,
    "Говь-Алтай": 6,
    "Увс": 6,
    "Баян-Өлгий": 7,
    "Хэнтий": 4,
    "Дорнод": 5,
    "Сүхбаатар": 5,
    "Дорноговь": 4,
    "Дундговь": 4,
    "Өмнөговь": 5,
    "Говьсүмбэр": 3
};
function getDelivery(aimag) {
    const days = DELIVERY_DAYS[aimag] ?? 5;
    const min = days;
    const max = days + 2;
    return `${min}–${max} хоногт хүргэнэ`;
}
// ── Stock level helpers ─────────────────────────────────────────────────────
function getStock(p) {
    if (p.id % 5 === 0) return {
        level: "out",
        qty: 0,
        label: "Дууссан",
        color: "#ef4444"
    };
    if (p.id % 3 === 0) return {
        level: "low",
        qty: 3,
        label: "3 ширхэг үлдсэн",
        color: "#f59e0b"
    };
    return {
        level: "good",
        qty: 12,
        label: "Нөөц байна",
        color: "#10b981"
    };
}
// ── Image "gallery" using emoji as placeholder ──────────────────────────────
const IMG_LABELS = [
    "Гол зураг",
    "Дэлгэрэнгүй",
    "Баглаа",
    "Баталгаа"
];
// ── Report menu ─────────────────────────────────────────────────────────────
function ReportMenu({ onClose, dark }) {
    const menuBg = dark ? "#1e293b" : "#fff";
    const menuBorder = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)";
    const textCol = dark ? "#f1f5f9" : "#0f172a";
    const mutedCol = dark ? "#64748b" : "#94a3b8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            top: 52,
            right: 0,
            zIndex: 30,
            background: menuBg,
            border: `1px solid ${menuBorder}`,
            borderRadius: 14,
            padding: "6px 0",
            minWidth: 180,
            boxShadow: "0 16px 48px rgba(0,0,0,.22), 0 4px 12px rgba(0,0,0,.10)",
            animation: "scaleInSm .2s cubic-bezier(.16,1,.3,1) both"
        },
        onClick: (e)=>e.stopPropagation(),
        children: [
            [
                {
                    icon: "🚨",
                    label: "Бараа мэдэгдэх"
                },
                {
                    icon: "⚠️",
                    label: "Худалдагч мэдэгдэх"
                },
                {
                    icon: "📋",
                    label: "Хуулах холбоос"
                }
            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        alert(`${item.label} илгээгдлээ`);
                        onClose();
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        width: "100%",
                        padding: "10px 16px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: 13,
                        fontWeight: 600,
                        color: textCol,
                        fontFamily: "inherit",
                        transition: "background .15s"
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.background = dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.04)",
                    onMouseLeave: (e)=>e.currentTarget.style.background = "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 15
                            },
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/products/ProductModal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        item.label
                    ]
                }, item.label, true, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "4px 12px",
                    height: 1,
                    background: dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductModal.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    padding: "10px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: 13,
                    fontWeight: 600,
                    color: mutedCol,
                    fontFamily: "inherit"
                },
                children: "✕ Хаах"
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductModal.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products/ProductModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
// ── Buyer protection modal ──────────────────────────────────────────────────
function BuyerProtectionModal({ onClose, dark, C }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[700] flex items-center justify-center p-4",
        style: {
            background: "rgba(0,0,0,.55)",
            backdropFilter: "blur(8px)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: (e)=>e.stopPropagation(),
            style: {
                background: C.white,
                borderRadius: 22,
                padding: "32px 28px",
                maxWidth: 380,
                width: "100%",
                boxShadow: "0 24px 80px rgba(0,0,0,.30)",
                animation: "scaleIn .25s cubic-bezier(.16,1,.3,1) both"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 40,
                        marginBottom: 16,
                        textAlign: "center"
                    },
                    children: "🛡️"
                }, void 0, false, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontSize: 18,
                        fontWeight: 800,
                        color: C.text,
                        textAlign: "center",
                        marginBottom: 8,
                        fontFamily: "var(--font-display)"
                    },
                    children: "Худалдан авагчийн хамгаалалт"
                }, void 0, false, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: C.g500,
                        textAlign: "center",
                        marginBottom: 24,
                        lineHeight: 1.6
                    },
                    children: "LocalMart Connected нь бүх гүйлгээг хамгаалдаг."
                }, void 0, false, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                [
                    {
                        icon: "💸",
                        title: "7 хоногийн буцаалт",
                        body: "Бараа тань хүрсэнээс 7 хоногийн дотор буцаах боломжтой."
                    },
                    {
                        icon: "🔒",
                        title: "Аюулгүй төлбөр",
                        body: "QPay болон банкны картаар аюулгүй төлнө."
                    },
                    {
                        icon: "📦",
                        title: "Хүргэлтийн баталгаа",
                        body: "Хүргэлт хийгдэхгүй бол бүрэн эргэн төлөлт хийгдэнэ."
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 14,
                            marginBottom: 14,
                            padding: "14px 16px",
                            borderRadius: 14,
                            background: C.g50,
                            border: `1px solid ${C.g100}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 22,
                                    flexShrink: 0
                                },
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: C.text,
                                            marginBottom: 3
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: C.g500,
                                            lineHeight: 1.5
                                        },
                                        children: item.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.title, true, {
                        fileName: "[project]/src/components/products/ProductModal.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        width: "100%",
                        marginTop: 8,
                        padding: "13px 0",
                        borderRadius: 14,
                        background: "linear-gradient(135deg,#059669,#14b8a6)",
                        border: "none",
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "inherit"
                    },
                    children: "Ойлголоо ✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/products/ProductModal.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/products/ProductModal.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
function ProductModal({ product: p, onClose, onAuthRequired }) {
    const { C, dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { add: addCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { openThread } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ChatContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { success } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [thumb, setThumb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [added, setAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("info");
    const [wished, setWished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReport, setShowReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProtection, setShowProtection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stock = getStock(p);
    const delivery = getDelivery(p.aimag);
    const DOTS = Array.from({
        length: p.imageCount
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(window.innerWidth < 768);
        const h = (e)=>{
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", h);
        document.body.style.overflow = "hidden";
        return ()=>{
            document.removeEventListener("keydown", h);
            document.body.style.overflow = "";
        };
    }, [
        onClose
    ]);
    const handleCart = ()=>{
        if (stock.level === "out") return;
        if (!isLoggedIn) {
            onClose();
            onAuthRequired?.();
            return;
        }
        addCart(p, qty);
        setAdded(true);
        success(`${qty}× "${p.name}" сагсанд нэмэгдлээ! 🛒`);
        setTimeout(()=>setAdded(false), 1800);
    };
    const handleChat = ()=>{
        if (!isLoggedIn) {
            onClose();
            onAuthRequired?.();
            return;
        }
        openThread(p.seller);
        onClose();
    };
    // Mobile: slide-up sheet; Desktop: centered modal
    const modalStyle = isMobile ? {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "24px 24px 0 0",
        maxHeight: "92vh",
        height: "92vh",
        background: C.white,
        boxShadow: "0 -24px 80px rgba(0,0,0,.28)",
        animation: "slideUp .38s cubic-bezier(.16,1,.3,1) both",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    } : {
        position: "relative",
        borderRadius: 26,
        maxWidth: 840,
        width: "100%",
        maxHeight: "92vh",
        background: C.white,
        boxShadow: "0 32px 100px rgba(0,0,0,.32), 0 8px 32px rgba(0,0,0,.14)",
        animation: "scaleIn .28s cubic-bezier(.16,1,.3,1) both",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    };
    const tabLabels = {
        info: "📝 Мэдээлэл",
        reviews: `⭐ Сэтгэгдэл (${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEWS"].length})`,
        seller: "🏪 Худалдагч"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[600]",
                style: {
                    background: isMobile ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.65)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: isMobile ? "flex-end" : "center",
                    justifyContent: "center",
                    padding: isMobile ? 0 : "1rem 1rem"
                },
                onClick: onClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: modalStyle,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                padding: "12px 0 4px",
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 4,
                                    borderRadius: 9999,
                                    background: dark ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.12)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/products/ProductModal.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                padding: isMobile ? "0 16px 4px" : "14px 16px 0",
                                gap: 8,
                                flexShrink: 0,
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setWished((w)=>!w),
                                    style: {
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: wished ? "rgba(239,68,68,.12)" : dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: 18,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all .2s",
                                        animation: wished ? "wishPop .38s cubic-bezier(.16,1,.3,1)" : "none"
                                    },
                                    children: wished ? "❤️" : "🤍"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowReport((s)=>!s),
                                            style: {
                                                width: 44,
                                                height: 44,
                                                borderRadius: "50%",
                                                background: dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: 18,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: dark ? "#94a3b8" : "#64748b"
                                            },
                                            children: "⋯"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        showReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportMenu, {
                                            onClose: ()=>setShowReport(false),
                                            dark: dark
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 280,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    style: {
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: 16,
                                        fontWeight: 900,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: dark ? "#e2e8f0" : "#334155",
                                        transition: "all .18s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "rgba(239,68,68,.12)";
                                        e.currentTarget.style.color = "#ef4444";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = dark ? "rgba(255,255,255,.10)" : "rgba(0,0,0,.06)";
                                        e.currentTarget.style.color = dark ? "#e2e8f0" : "#334155";
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/products/ProductModal.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflowY: "auto",
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: `linear-gradient(145deg,${C.greenBg},${C.greenSoft})`,
                                                minHeight: isMobile ? 220 : 300,
                                                position: "relative",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: isMobile ? 100 : 120,
                                                        animation: "float 4s ease-in-out infinite",
                                                        filter: "drop-shadow(0 24px 40px rgba(0,0,0,.14))"
                                                    },
                                                    children: p.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: 14,
                                                        left: 14,
                                                        display: "flex",
                                                        gap: 6,
                                                        flexWrap: "wrap"
                                                    },
                                                    children: [
                                                        p.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewBadge"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 35
                                                        }, this),
                                                        p.isOrganic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganicBadge"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 35
                                                        }, this),
                                                        p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerifiedBadge"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: isMobile ? 14 : 48,
                                                        left: 14,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 6,
                                                        padding: "6px 12px",
                                                        borderRadius: 999,
                                                        background: "rgba(14,71,34,.82)",
                                                        backdropFilter: "blur(8px)",
                                                        border: "1px solid rgba(74,222,128,.2)",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: "#fff"
                                                    },
                                                    children: [
                                                        "📍 ",
                                                        p.aimag
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: 14,
                                                        left: 0,
                                                        right: 0,
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        gap: 6
                                                    },
                                                    children: DOTS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setThumb(i),
                                                            title: IMG_LABELS[i],
                                                            style: {
                                                                borderRadius: 999,
                                                                border: "none",
                                                                cursor: "pointer",
                                                                padding: 0,
                                                                width: thumb === i ? 24 : 8,
                                                                height: 8,
                                                                background: thumb === i ? C.green : "rgba(255,255,255,.55)",
                                                                transition: "all .25s var(--ease-spring)",
                                                                boxShadow: thumb === i ? "0 2px 8px rgba(5,150,105,.4)" : "none"
                                                            }
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: isMobile ? "20px 20px" : "28px 28px",
                                                background: C.white,
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 800,
                                                        letterSpacing: ".12em",
                                                        textTransform: "uppercase",
                                                        color: C.g400,
                                                        marginBottom: 6
                                                    },
                                                    children: p.cat
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: isMobile ? 20 : 24,
                                                        fontWeight: 800,
                                                        color: C.text,
                                                        margin: "0 0 10px",
                                                        lineHeight: 1.2,
                                                        fontFamily: "var(--font-display)",
                                                        letterSpacing: "-0.02em"
                                                    },
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 10,
                                                        marginBottom: 14
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                                                            rating: p.rating,
                                                            reviews: p.reviews,
                                                            size: "md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, this),
                                                        p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 10,
                                                                fontWeight: 700,
                                                                padding: "3px 9px",
                                                                borderRadius: 999,
                                                                background: "#f0fdf4",
                                                                color: "#059669",
                                                                border: "1px solid #bbf7d0"
                                                            },
                                                            children: "✅ Баталгаажсан"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "baseline",
                                                        gap: 8,
                                                        marginBottom: 14
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: isMobile ? 28 : 34,
                                                                fontWeight: 900,
                                                                color: C.orange,
                                                                fontFamily: "var(--font-display)",
                                                                letterSpacing: "-0.03em"
                                                            },
                                                            children: [
                                                                "₮",
                                                                p.price.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13,
                                                                color: C.g400,
                                                                fontWeight: 500
                                                            },
                                                            children: [
                                                                "/ ",
                                                                p.unit
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 8,
                                                        marginBottom: 14,
                                                        padding: "8px 14px",
                                                        borderRadius: 12,
                                                        background: stock.level === "out" ? "rgba(239,68,68,.06)" : stock.level === "low" ? "rgba(245,158,11,.06)" : "rgba(16,185,129,.06)",
                                                        border: `1px solid ${stock.color}22`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: 8,
                                                                height: 8,
                                                                borderRadius: "50%",
                                                                flexShrink: 0,
                                                                background: stock.color,
                                                                boxShadow: `0 0 0 3px ${stock.color}30`,
                                                                animation: stock.level === "good" ? "pulseDot 2s ease-in-out infinite" : "none"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                color: stock.color
                                                            },
                                                            children: stock.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 19
                                                        }, this),
                                                        stock.level === "low" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: C.g400,
                                                                marginLeft: "auto"
                                                            },
                                                            children: "⚡ Хурдан захиал!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 8,
                                                        marginBottom: 16,
                                                        padding: "8px 14px",
                                                        borderRadius: 12,
                                                        background: C.g50,
                                                        border: `1px solid ${C.g100}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 16
                                                            },
                                                            children: "🚚"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        fontWeight: 700,
                                                                        color: C.text
                                                                    },
                                                                    children: delivery
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 11,
                                                                        color: C.g400,
                                                                        display: "block"
                                                                    },
                                                                    children: [
                                                                        p.aimag,
                                                                        "аас хүргэнэ"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 12,
                                                        marginBottom: 18,
                                                        padding: "12px 14px",
                                                        borderRadius: 14,
                                                        background: C.g50,
                                                        border: `1px solid ${C.g100}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: 40,
                                                                height: 40,
                                                                borderRadius: 12,
                                                                fontSize: 22,
                                                                background: C.greenBg,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                flexShrink: 0
                                                            },
                                                            children: "👨‍🌾"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 455,
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
                                                                        fontSize: 13,
                                                                        fontWeight: 700,
                                                                        color: C.text,
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 6
                                                                    },
                                                                    children: [
                                                                        p.seller,
                                                                        p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: 10,
                                                                                color: "#059669"
                                                                            },
                                                                            children: "✅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 11,
                                                                        color: C.g400
                                                                    },
                                                                    children: [
                                                                        "📍 ",
                                                                        p.aimag,
                                                                        " · ",
                                                                        p.date
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleChat,
                                                            style: {
                                                                padding: "7px 14px",
                                                                borderRadius: 10,
                                                                border: "none",
                                                                background: C.blue,
                                                                color: "#fff",
                                                                fontSize: 12,
                                                                fontWeight: 700,
                                                                cursor: "pointer",
                                                                fontFamily: "inherit",
                                                                flexShrink: 0,
                                                                boxShadow: "0 3px 10px rgba(3,105,161,.28)"
                                                            },
                                                            children: "💬 Чат"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this),
                                                stock.level !== "out" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 12,
                                                        marginBottom: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                fontWeight: 700,
                                                                color: C.g400,
                                                                letterSpacing: ".08em",
                                                                textTransform: "uppercase"
                                                            },
                                                            children: "Тоо:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                border: `2px solid ${C.g200}`,
                                                                borderRadius: 14,
                                                                overflow: "hidden"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setQty((q)=>Math.max(1, q - 1)),
                                                                    style: {
                                                                        width: 44,
                                                                        height: 44,
                                                                        background: "none",
                                                                        border: "none",
                                                                        cursor: "pointer",
                                                                        fontSize: 20,
                                                                        fontWeight: 700,
                                                                        color: C.g500,
                                                                        transition: "all .15s",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.currentTarget.style.background = "rgba(239,68,68,.08)";
                                                                        e.currentTarget.style.color = "#ef4444";
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.currentTarget.style.background = "none";
                                                                        e.currentTarget.style.color = C.g500;
                                                                    },
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        width: 36,
                                                                        textAlign: "center",
                                                                        fontSize: 16,
                                                                        fontWeight: 800,
                                                                        color: C.text
                                                                    },
                                                                    children: qty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setQty((q)=>Math.min(stock.qty, q + 1)),
                                                                    style: {
                                                                        width: 44,
                                                                        height: 44,
                                                                        background: "none",
                                                                        border: "none",
                                                                        cursor: "pointer",
                                                                        fontSize: 20,
                                                                        fontWeight: 700,
                                                                        color: C.green,
                                                                        transition: "all .15s",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.currentTarget.style.background = "rgba(16,185,129,.08)";
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.currentTarget.style.background = "none";
                                                                    },
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 14,
                                                                fontWeight: 800,
                                                                color: C.orange
                                                            },
                                                            children: [
                                                                "= ₮",
                                                                (p.price * qty).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 10,
                                                        marginBottom: 12
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>alert(`📞 ${p.phone}`),
                                                            style: {
                                                                flex: 1,
                                                                padding: "14px 0",
                                                                borderRadius: 14,
                                                                border: "none",
                                                                background: C.green,
                                                                color: "#fff",
                                                                fontSize: 14,
                                                                fontWeight: 700,
                                                                cursor: "pointer",
                                                                fontFamily: "inherit",
                                                                boxShadow: "0 5px 16px rgba(22,101,52,.28)",
                                                                transition: "all .2s",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: 6
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.transform = "translateY(-2px)",
                                                            onMouseLeave: (e)=>e.currentTarget.style.transform = "none",
                                                            children: "📞 Залгах"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleChat,
                                                            style: {
                                                                padding: "14px 18px",
                                                                borderRadius: 14,
                                                                border: "none",
                                                                background: C.blue,
                                                                color: "#fff",
                                                                fontSize: 18,
                                                                cursor: "pointer",
                                                                fontFamily: "inherit",
                                                                boxShadow: "0 5px 16px rgba(3,105,161,.24)",
                                                                transition: "all .2s",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.transform = "translateY(-2px)",
                                                            onMouseLeave: (e)=>e.currentTarget.style.transform = "none",
                                                            children: "💬"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCart,
                                                    disabled: stock.level === "out",
                                                    style: {
                                                        width: "100%",
                                                        padding: "15px 0",
                                                        borderRadius: 14,
                                                        border: "none",
                                                        fontSize: 14,
                                                        fontWeight: 700,
                                                        fontFamily: "inherit",
                                                        cursor: stock.level === "out" ? "not-allowed" : "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: 8,
                                                        transition: "all .25s var(--ease-spring)",
                                                        background: stock.level === "out" ? dark ? "#1e293b" : "#f1f5f9" : added ? "linear-gradient(135deg,#059669,#059669)" : "linear-gradient(135deg,#059669,#14b8a6)",
                                                        color: stock.level === "out" ? C.g400 : "#fff",
                                                        boxShadow: stock.level === "out" ? "none" : added ? "0 6px 20px rgba(22,101,52,.35)" : "0 6px 20px rgba(20,184,166,.38)",
                                                        transform: added ? "scale(.99)" : "none"
                                                    },
                                                    children: stock.level === "out" ? "⛔ Нөөц дууссан" : added ? `✓ ${qty} ш нэмэгдлээ!` : `🛒 Сагсанд нэмэх (×${qty})`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: 16,
                                                        marginTop: 14,
                                                        flexWrap: "wrap"
                                                    },
                                                    children: [
                                                        {
                                                            icon: "🔒",
                                                            label: "Аюулгүй",
                                                            key: "lock"
                                                        },
                                                        {
                                                            icon: "✅",
                                                            label: "7 хоног буцаалт",
                                                            key: "return"
                                                        },
                                                        {
                                                            icon: "🚚",
                                                            label: "Хүргэлт баталгаат",
                                                            key: "delivery"
                                                        }
                                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowProtection(true),
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 4,
                                                                background: "none",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                fontSize: 11,
                                                                fontWeight: 600,
                                                                color: C.g400,
                                                                padding: "4px 6px",
                                                                borderRadius: 8,
                                                                transition: "color .15s",
                                                                fontFamily: "inherit"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.color = C.green,
                                                            onMouseLeave: (e)=>e.currentTarget.style.color = C.g400,
                                                            children: [
                                                                t.icon,
                                                                " ",
                                                                t.label
                                                            ]
                                                        }, t.key, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: `1.5px solid ${C.g100}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                borderBottom: `1px solid ${C.g100}`
                                            },
                                            children: [
                                                "info",
                                                "reviews",
                                                "seller"
                                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab(tab),
                                                    style: {
                                                        flex: 1,
                                                        padding: "14px 8px",
                                                        fontSize: isMobile ? 11 : 13,
                                                        fontWeight: 700,
                                                        fontFamily: "inherit",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        color: activeTab === tab ? C.green : C.g400,
                                                        borderBottom: `2.5px solid ${activeTab === tab ? C.green : "transparent"}`,
                                                        background: activeTab === tab ? C.greenBg : "transparent",
                                                        transition: "all .18s"
                                                    },
                                                    children: tabLabels[tab]
                                                }, tab, false, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: isMobile ? "20px 20px" : "24px 28px"
                                            },
                                            children: [
                                                activeTab === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 14
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "16px 18px",
                                                                borderRadius: 14,
                                                                background: C.greenBg,
                                                                border: `1px solid ${C.green}25`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        fontWeight: 800,
                                                                        letterSpacing: ".12em",
                                                                        textTransform: "uppercase",
                                                                        color: C.green,
                                                                        marginBottom: 8
                                                                    },
                                                                    children: "🌿 Гарал үүсэл"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: 13,
                                                                        lineHeight: 1.7,
                                                                        color: C.text,
                                                                        margin: 0
                                                                    },
                                                                    children: p.story
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "14px 16px",
                                                                borderRadius: 14,
                                                                background: dark ? "rgba(16,185,129,.06)" : "#f0fdf4",
                                                                border: "1px solid rgba(16,185,129,.15)",
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                gap: 12
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 20,
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "🛡️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 12,
                                                                                fontWeight: 700,
                                                                                color: C.green,
                                                                                marginBottom: 4
                                                                            },
                                                                            children: "Буцаалтын бодлого"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 668,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: 12,
                                                                                color: C.g500,
                                                                                margin: 0,
                                                                                lineHeight: 1.6
                                                                            },
                                                                            children: "Хүргэлт хийгдсэнээс хойш 7 хоногийн дотор буцааж болно. Бараа гэмтэлгүй, анхны байдлаараа байх ёстой."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "1fr 1fr",
                                                                gap: 8
                                                            },
                                                            children: [
                                                                {
                                                                    icon: "📍",
                                                                    label: "Аймаг",
                                                                    value: p.aimag
                                                                },
                                                                {
                                                                    icon: "📦",
                                                                    label: "Ангилал",
                                                                    value: p.cat
                                                                },
                                                                {
                                                                    icon: "🗓",
                                                                    label: "Огноо",
                                                                    value: p.date
                                                                },
                                                                {
                                                                    icon: "📏",
                                                                    label: "Нэгж",
                                                                    value: p.unit
                                                                },
                                                                {
                                                                    icon: "👨‍🌾",
                                                                    label: "Худалдагч",
                                                                    value: p.seller
                                                                },
                                                                {
                                                                    icon: "📞",
                                                                    label: "Холбоо",
                                                                    value: p.phone
                                                                }
                                                            ].map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: "12px 14px",
                                                                        borderRadius: 12,
                                                                        background: C.g50,
                                                                        border: `1px solid ${C.g100}`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 10,
                                                                                fontWeight: 700,
                                                                                color: C.g400,
                                                                                marginBottom: 4
                                                                            },
                                                                            children: [
                                                                                spec.icon,
                                                                                " ",
                                                                                spec.label
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 691,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 13,
                                                                                fontWeight: 700,
                                                                                color: C.text
                                                                            },
                                                                            children: spec.value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 694,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, spec.label, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 19
                                                }, this),
                                                activeTab === "reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 12
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 20,
                                                                padding: "16px 18px",
                                                                borderRadius: 14,
                                                                background: C.g50,
                                                                border: `1px solid ${C.g100}`,
                                                                marginBottom: 4
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        textAlign: "center",
                                                                        flexShrink: 0
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 40,
                                                                                fontWeight: 900,
                                                                                color: "#f59e0b",
                                                                                fontFamily: "var(--font-display)",
                                                                                lineHeight: 1
                                                                            },
                                                                            children: p.rating
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 711,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                gap: 2,
                                                                                justifyContent: "center",
                                                                                margin: "6px 0"
                                                                            },
                                                                            children: "★★★★★".split("").map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: i < Math.floor(p.rating) ? "#f59e0b" : C.g200,
                                                                                        fontSize: 13
                                                                                    },
                                                                                    children: s
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 717,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 715,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 10,
                                                                                color: C.g400
                                                                            },
                                                                            children: [
                                                                                p.reviews,
                                                                                " сэтгэгдэл"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 720,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        flex: 1,
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        gap: 5
                                                                    },
                                                                    children: [
                                                                        5,
                                                                        4,
                                                                        3,
                                                                        2,
                                                                        1
                                                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: 8
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 10,
                                                                                        fontWeight: 700,
                                                                                        color: C.g400,
                                                                                        width: 8
                                                                                    },
                                                                                    children: star
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 725,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        flex: 1,
                                                                                        height: 5,
                                                                                        borderRadius: 999,
                                                                                        background: C.g100,
                                                                                        overflow: "hidden"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            height: "100%",
                                                                                            borderRadius: 999,
                                                                                            background: "#f59e0b",
                                                                                            width: `${star === 5 ? 70 : star === 4 ? 18 : star === 3 ? 7 : 3}%`
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                        lineNumber: 727,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 726,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, star, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 724,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 21
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REVIEWS"].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: "16px 18px",
                                                                    borderRadius: 14,
                                                                    background: C.g50,
                                                                    border: `1px solid ${C.g100}`
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            marginBottom: 10
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    gap: 10
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: 26
                                                                                        },
                                                                                        children: r.avatar
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                        lineNumber: 744,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    fontSize: 13,
                                                                                                    fontWeight: 700,
                                                                                                    color: C.text
                                                                                                },
                                                                                                children: r.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                                lineNumber: 746,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    display: "flex",
                                                                                                    gap: 2,
                                                                                                    marginTop: 2
                                                                                                },
                                                                                                children: "★★★★★".split("").map((s, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        style: {
                                                                                                            color: j < r.rating ? "#f59e0b" : C.g200,
                                                                                                            fontSize: 11
                                                                                                        },
                                                                                                        children: s
                                                                                                    }, j, false, {
                                                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                                        lineNumber: 749,
                                                                                                        columnNumber: 35
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                                lineNumber: 747,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                        lineNumber: 745,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: 11,
                                                                                    color: C.g400
                                                                                },
                                                                                children: r.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                lineNumber: 754,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                        lineNumber: 742,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: 13,
                                                                            lineHeight: 1.6,
                                                                            color: C.g600,
                                                                            margin: 0
                                                                        },
                                                                        children: r.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                        lineNumber: 756,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this),
                                                activeTab === "seller" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 14
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 16,
                                                                padding: "18px 20px",
                                                                borderRadius: 16,
                                                                background: C.greenBg,
                                                                border: `1px solid ${C.green}25`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: 64,
                                                                        height: 64,
                                                                        borderRadius: 18,
                                                                        fontSize: 36,
                                                                        background: C.white,
                                                                        border: `1.5px solid ${C.green}30`,
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "👨‍🌾"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        flex: 1
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 16,
                                                                                fontWeight: 800,
                                                                                color: C.text,
                                                                                fontFamily: "var(--font-display)",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: 8,
                                                                                marginBottom: 3
                                                                            },
                                                                            children: [
                                                                                p.seller,
                                                                                p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 10,
                                                                                        fontWeight: 700,
                                                                                        padding: "2px 8px",
                                                                                        borderRadius: 999,
                                                                                        background: "#f0fdf4",
                                                                                        color: "#059669",
                                                                                        border: "1px solid #bbf7d0"
                                                                                    },
                                                                                    children: "✅ Баталгаажсан"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 786,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 779,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 12,
                                                                                color: C.g500
                                                                            },
                                                                            children: [
                                                                                "📍 ",
                                                                                p.aimag
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 794,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: 4,
                                                                                marginTop: 5
                                                                            },
                                                                            children: [
                                                                                "★★★★★".split("").map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: "#f59e0b",
                                                                                            fontSize: 12
                                                                                        },
                                                                                        children: s
                                                                                    }, i, false, {
                                                                                        fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                        lineNumber: 797,
                                                                                        columnNumber: 29
                                                                                    }, this)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 11,
                                                                                        color: C.g400,
                                                                                        marginLeft: 4
                                                                                    },
                                                                                    children: "4.9 дундаж"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 799,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        marginLeft: 8,
                                                                                        fontSize: 10,
                                                                                        fontWeight: 700,
                                                                                        padding: "2px 7px",
                                                                                        borderRadius: 999,
                                                                                        background: "rgba(16,185,129,.1)",
                                                                                        color: "#059669"
                                                                                    },
                                                                                    children: "● Онлайн"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                                    lineNumber: 800,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 795,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 778,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(3,1fr)",
                                                                gap: 10
                                                            },
                                                            children: [
                                                                {
                                                                    icon: "📦",
                                                                    label: "Бараа",
                                                                    value: "24+"
                                                                },
                                                                {
                                                                    icon: "⭐",
                                                                    label: "Үнэлгээ",
                                                                    value: "4.9"
                                                                },
                                                                {
                                                                    icon: "✅",
                                                                    label: "Захиалга",
                                                                    value: "340+"
                                                                }
                                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: "16px 12px",
                                                                        borderRadius: 14,
                                                                        textAlign: "center",
                                                                        background: C.g50,
                                                                        border: `1px solid ${C.g100}`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 22,
                                                                                marginBottom: 4
                                                                            },
                                                                            children: s.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 822,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 18,
                                                                                fontWeight: 800,
                                                                                color: C.green,
                                                                                fontFamily: "var(--font-display)",
                                                                                marginBottom: 2
                                                                            },
                                                                            children: s.value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 823,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 10,
                                                                                color: C.g400
                                                                            },
                                                                            children: s.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                            lineNumber: 827,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, s.label, true, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 812,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "12px 16px",
                                                                borderRadius: 12,
                                                                background: C.g50,
                                                                border: `1px solid ${C.g100}`,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "space-between"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        color: C.g500
                                                                    },
                                                                    children: "⚡ Хариу өгөх хугацаа"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 838,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 13,
                                                                        fontWeight: 700,
                                                                        color: C.green
                                                                    },
                                                                    children: "1 цагийн дотор"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 833,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: 10
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleChat,
                                                                    style: {
                                                                        flex: 1,
                                                                        padding: "14px 0",
                                                                        borderRadius: 14,
                                                                        border: "none",
                                                                        background: C.blue,
                                                                        color: "#fff",
                                                                        fontSize: 14,
                                                                        fontWeight: 700,
                                                                        cursor: "pointer",
                                                                        fontFamily: "inherit",
                                                                        boxShadow: "0 5px 16px rgba(3,105,161,.28)",
                                                                        transition: "all .2s"
                                                                    },
                                                                    children: "💬 Чат эхлэх"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 844,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>alert(`📞 ${p.phone}`),
                                                                    style: {
                                                                        flex: 1,
                                                                        padding: "14px 0",
                                                                        borderRadius: 14,
                                                                        border: "none",
                                                                        background: C.green,
                                                                        color: "#fff",
                                                                        fontSize: 14,
                                                                        fontWeight: 700,
                                                                        cursor: "pointer",
                                                                        fontFamily: "inherit",
                                                                        boxShadow: "0 5px 16px rgba(22,101,52,.28)",
                                                                        transition: "all .2s"
                                                                    },
                                                                    children: "📞 Залгах"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/products/ProductModal.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/products/ProductModal.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/products/ProductModal.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/products/ProductModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductModal.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            showProtection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BuyerProtectionModal, {
                onClose: ()=>setShowProtection(false),
                dark: dark,
                C: C
            }, void 0, false, {
                fileName: "[project]/src/components/products/ProductModal.tsx",
                lineNumber: 873,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/products/ExploreFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FILTERS",
    ()=>DEFAULT_FILTERS,
    "ExploreFilters",
    ()=>ExploreFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const DEFAULT_FILTERS = {
    search: "",
    aimag: "Бүх аймаг",
    category: "Бүх төрөл",
    maxPrice: 300000,
    minRating: 0,
    onlyVerified: false,
    sort: "newest"
};
function isFiltered(f) {
    return f.search !== "" || f.aimag !== "Бүх аймаг" || f.category !== "Бүх төрөл" || f.maxPrice < 300000 || f.minRating > 0 || f.onlyVerified || f.sort !== "newest";
}
const SORT_OPTIONS = [
    {
        key: "newest",
        label: "Шинэ эхэлж",
        icon: "🆕"
    },
    {
        key: "price-asc",
        label: "Үнэ ↑",
        icon: "💸"
    },
    {
        key: "price-desc",
        label: "Үнэ ↓",
        icon: "💰"
    },
    {
        key: "rating",
        label: "Үнэлгээ",
        icon: "⭐"
    }
];
function ExploreFilters({ filters, onChange, onReset, resultCount }) {
    const { dark, C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("main");
    const active = isFiltered(filters);
    const inputStyle = {
        border: `1.5px solid ${C.g200}`,
        background: C.g50,
        color: C.text,
        borderRadius: 12,
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: 600,
        outline: "none",
        padding: "10px 14px",
        width: "100%",
        transition: "border-color .2s"
    };
    const toggle = (section)=>setOpenSection((p)=>p === section ? null : section);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "rounded-3xl overflow-hidden sticky top-20 self-start",
        style: {
            background: C.white,
            border: `1.5px solid ${C.g100}`,
            boxShadow: "0 8px 32px rgba(0,0,0,.07)",
            minWidth: 240
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 flex items-center justify-between",
                style: {
                    borderBottom: `1.5px solid ${C.g100}`,
                    background: dark ? C.g50 : "#fafafa"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-xl flex items-center justify-center text-sm",
                                style: {
                                    background: C.greenBg,
                                    border: `1px solid ${C.green}30`
                                },
                                children: "🔧"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-black display-font",
                                        style: {
                                            color: C.text
                                        },
                                        children: "Шүүлтүүр"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-semibold",
                                        style: {
                                            color: C.g400
                                        },
                                        children: [
                                            resultCount,
                                            " бараа"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "text-[11px] font-black px-3 py-1.5 rounded-xl transition-all hover:scale-105 font-sans",
                        style: {
                            color: "#dc2626",
                            background: "#fef2f2",
                            border: "1px solid #fecaca"
                        },
                        children: "✕ Цэвэрлэх"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-black tracking-widest uppercase mb-2 block",
                                style: {
                                    color: C.g400
                                },
                                children: "🔍 Хайх"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: inputStyle,
                                        placeholder: "Бараа хайх...",
                                        value: filters.search,
                                        onChange: (e)=>onChange({
                                                search: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    filters.search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChange({
                                                search: ""
                                            }),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-black tracking-widest uppercase mb-2 block",
                                style: {
                                    color: C.g400
                                },
                                children: "📦 Ангилал"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChange({
                                                category: "Бүх төрөл"
                                            }),
                                        className: "px-3 py-1.5 rounded-xl text-[11px] font-black transition-all font-sans",
                                        style: {
                                            background: filters.category === "Бүх төрөл" ? C.green : C.g50,
                                            color: filters.category === "Бүх төрөл" ? "#fff" : C.g500,
                                            border: `1.5px solid ${filters.category === "Бүх төрөл" ? C.green : C.g200}`
                                        },
                                        children: "Бүгд"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onChange({
                                                    category: cat.label
                                                }),
                                            className: "px-3 py-1.5 rounded-xl text-[11px] font-black transition-all font-sans flex items-center gap-1",
                                            style: {
                                                background: filters.category === cat.label ? cat.color : C.g50,
                                                color: filters.category === cat.label ? "#fff" : C.g600,
                                                border: `1.5px solid ${filters.category === cat.label ? cat.color : C.g200}`,
                                                transform: filters.category === cat.label ? "scale(1.04)" : "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: cat.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                cat.label
                                            ]
                                        }, cat.label, true, {
                                            fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-black tracking-widest uppercase mb-2 block",
                                style: {
                                    color: C.g400
                                },
                                children: "📍 Аймаг"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                style: {
                                    ...inputStyle,
                                    cursor: "pointer"
                                },
                                value: filters.aimag,
                                onChange: (e)=>onChange({
                                        aimag: e.target.value
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Бүх аймаг"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIMAG_NODES"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: a.name
                                        }, a.id, false, {
                                            fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                            lineNumber: 170,
                                            columnNumber: 35
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] font-black tracking-widest uppercase",
                                        style: {
                                            color: C.g400
                                        },
                                        children: "💰 Дээд үнэ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black",
                                        style: {
                                            color: C.orange
                                        },
                                        children: [
                                            "₮",
                                            filters.maxPrice.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 5000,
                                        max: 300000,
                                        step: 5000,
                                        value: filters.maxPrice,
                                        onChange: (e)=>onChange({
                                                maxPrice: Number(e.target.value)
                                            }),
                                        className: "w-full h-2 rounded-full appearance-none cursor-pointer",
                                        style: {
                                            background: `linear-gradient(to right, ${C.green} 0%, ${C.green} ${(filters.maxPrice - 5000) / (300000 - 5000) * 100}%, ${C.g200} ${(filters.maxPrice - 5000) / (300000 - 5000) * 100}%, ${C.g200} 100%)`,
                                            outline: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mt-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                style: {
                                                    color: C.g400
                                                },
                                                children: "₮5K"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                style: {
                                                    color: C.g400
                                                },
                                                children: "₮300K"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-black tracking-widest uppercase mb-2 block",
                                style: {
                                    color: C.g400
                                },
                                children: "⭐ Үнэлгээ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    0,
                                    3,
                                    4,
                                    4.5
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChange({
                                                minRating: r
                                            }),
                                        className: "flex-1 py-2 rounded-xl text-[11px] font-black transition-all font-sans",
                                        style: {
                                            background: filters.minRating === r ? C.orange : C.g50,
                                            color: filters.minRating === r ? "#fff" : C.g500,
                                            border: `1.5px solid ${filters.minRating === r ? C.orange : C.g200}`
                                        },
                                        children: r === 0 ? "Бүгд" : `${r}+`
                                    }, r, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange({
                                onlyVerified: !filters.onlyVerified
                            }),
                        className: "flex items-center gap-3 p-3.5 rounded-2xl transition-all group",
                        style: {
                            background: filters.onlyVerified ? C.greenBg : C.g50,
                            border: `1.5px solid ${filters.onlyVerified ? C.green : C.g200}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 rounded-md flex items-center justify-center transition-all flex-shrink-0",
                                style: {
                                    background: filters.onlyVerified ? C.green : "transparent",
                                    border: `2px solid ${filters.onlyVerified ? C.green : C.g300}`
                                },
                                children: filters.onlyVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs font-black",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                    lineNumber: 239,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] font-black",
                                        style: {
                                            color: C.text
                                        },
                                        children: "✅ Баталгаажсан"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px]",
                                        style: {
                                            color: C.g400
                                        },
                                        children: "Зөвхөн бат. худалдагч"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-black tracking-widest uppercase mb-2 block",
                                style: {
                                    color: C.g400
                                },
                                children: "↕️ Эрэмбэлэх"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5",
                                children: SORT_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChange({
                                                sort: opt.key
                                            }),
                                        className: "py-2.5 rounded-xl text-[11px] font-black transition-all font-sans flex items-center justify-center gap-1",
                                        style: {
                                            background: filters.sort === opt.key ? C.green : C.g50,
                                            color: filters.sort === opt.key ? "#fff" : C.g500,
                                            border: `1.5px solid ${filters.sort === opt.key ? C.green : C.g200}`
                                        },
                                        children: [
                                            opt.icon,
                                            " ",
                                            opt.label
                                        ]
                                    }, opt.key, true, {
                                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full py-3.5 rounded-2xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5",
                        style: {
                            background: "linear-gradient(135deg,#059669,#059669)",
                            boxShadow: "0 6px 20px rgba(22,101,52,.3)"
                        },
                        children: [
                            "🔍 Хайх (",
                            resultCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ExploreFilters.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ExploreFilters.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products/ExploreFilters.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/products/ChatWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatWidget",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ChatWidget({ seller, onClose }) {
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "0",
            from: "seller",
            text: `Сайн байна уу! Би ${seller}. Юу асуух вэ?`,
            time: "14:32",
            read: true
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    const send = ()=>{
        if (!input.trim()) return;
        const now = new Date();
        const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
        setMessages((m)=>[
                ...m,
                {
                    id: Date.now().toString(),
                    from: "user",
                    text: input,
                    time,
                    read: false
                }
            ]);
        setInput("");
        // Auto-reply
        setTimeout(()=>{
            setMessages((m)=>[
                    ...m,
                    {
                        id: (Date.now() + 1).toString(),
                        from: "seller",
                        text: "Баярлалаа! Бараа бэлэн байна, захиалга хийх боломжтой.",
                        time,
                        read: false
                    }
                ]);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-[600] w-80 rounded-2xl overflow-hidden animate-scale-in",
        style: {
            background: C.white,
            border: `1px solid ${C.g200}`,
            boxShadow: "0 24px 60px rgba(0,0,0,.25)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3.5 flex items-center justify-between",
                style: {
                    background: "linear-gradient(135deg,#059669,#059669)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-lg",
                                style: {
                                    background: "rgba(255,255,255,.2)"
                                },
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/ChatWidget.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-extrabold text-white",
                                        children: seller
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-[11px] text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-green-400",
                                                style: {
                                                    boxShadow: "0 0 6px #4ade80"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/ChatWidget.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            "Онлайн"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ChatWidget.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "w-7 h-7 rounded-full flex items-center justify-center text-white/80 text-sm font-bold transition-colors hover:bg-white/20",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ChatWidget.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-56 overflow-y-auto px-3.5 py-3 flex flex-col gap-2",
                children: [
                    messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${m.from === "user" ? "justify-end" : "justify-start"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[78%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed",
                                style: {
                                    background: m.from === "user" ? C.green : C.g100,
                                    color: m.from === "user" ? "#fff" : C.text,
                                    borderBottomRightRadius: m.from === "user" ? 4 : 16,
                                    borderBottomLeftRadius: m.from === "seller" ? 4 : 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: m.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] mt-0.5 text-right",
                                        style: {
                                            color: m.from === "user" ? "rgba(255,255,255,.55)" : C.g400
                                        },
                                        children: m.time
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/ChatWidget.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/products/ChatWidget.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ChatWidget.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 py-2.5 flex gap-2",
                style: {
                    borderTop: `1px solid ${C.g100}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") send();
                        },
                        placeholder: "Мессеж бичих...",
                        className: "flex-1 text-sm rounded-xl px-3 py-2 outline-none font-sans font-semibold",
                        style: {
                            border: `1.5px solid ${C.g200}`,
                            background: C.g50,
                            color: C.text
                        },
                        onFocus: (e)=>e.target.style.borderColor = C.green,
                        onBlur: (e)=>e.target.style.borderColor = C.g200
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: send,
                        className: "w-9 h-9 rounded-xl flex items-center justify-center text-white text-base font-bold transition-opacity hover:opacity-80",
                        style: {
                            background: C.green
                        },
                        children: "↑"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products/ChatWidget.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/ChatWidget.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products/ChatWidget.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/products/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ExploreFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ExploreFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ChatWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ChatWidget.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
];

//# sourceMappingURL=src_components_products_0q4hpf0._.js.map