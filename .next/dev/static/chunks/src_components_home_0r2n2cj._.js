(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SHOWCASE = [
    {
        emoji: "🧶",
        name: "Ямааны цэвэр ноолуур",
        price: "₮85,000",
        aimag: "Увс",
        verified: true,
        tag: "Шилдэг",
        rating: 4.9,
        reviews: 142
    },
    {
        emoji: "🥩",
        name: "Хонины органик мах",
        price: "₮42,000",
        aimag: "Архангай",
        verified: true,
        tag: null,
        rating: 4.8,
        reviews: 89
    },
    {
        emoji: "🍯",
        name: "Зэрлэг зөгийн бал",
        price: "₮45,000",
        aimag: "Баян-Өлгий",
        verified: false,
        tag: "Organic",
        rating: 5.0,
        reviews: 63
    },
    {
        emoji: "🥛",
        name: "Үнээний цэвэр сүү",
        price: "₮8,000",
        aimag: "Хөвсгөл",
        verified: true,
        tag: null,
        rating: 4.7,
        reviews: 211
    }
];
const STATS = [
    {
        value: "2,840+",
        label: "Нийт бараа",
        icon: "📦"
    },
    {
        value: "340+",
        label: "Баталгаат худалдагч",
        icon: "✓"
    },
    {
        value: "21",
        label: "Аймаг",
        icon: "📍"
    },
    {
        value: "98%",
        label: "Сэтгэл ханамж",
        icon: "⭐"
    }
];
const TRUST = [
    {
        icon: "🔒",
        label: "Аюулгүй"
    },
    {
        icon: "🚚",
        label: "Хурдан хүргэлт"
    },
    {
        icon: "✅",
        label: "Баталгаат чанар"
    }
];
function HeroSection({ onExplore, onSell, onSearch }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.01);
    const [card, setCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aimag, setAimag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchFocused, setSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cardAnim, setCardAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSearch = ()=>{
        if (onSearch && (query || aimag || cat)) {
            onSearch(query, aimag || undefined, cat || undefined);
        } else {
            onExplore();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const id = setInterval({
                "HeroSection.useEffect.id": ()=>{
                    setCardAnim(true);
                    setTimeout({
                        "HeroSection.useEffect.id": ()=>{
                            setCard({
                                "HeroSection.useEffect.id": (n)=>(n + 1) % SHOWCASE.length
                            }["HeroSection.useEffect.id"]);
                            setCardAnim(false);
                        }
                    }["HeroSection.useEffect.id"], 200);
                }
            }["HeroSection.useEffect.id"], 3800);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(id)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const show = (delay = 0)=>visible ? {
            animation: `fadeUp .65s cubic-bezier(.16,1,.3,1) ${delay}s both`,
            opacity: 1
        } : {
            opacity: 0
        };
    const heroBg = dark ? "linear-gradient(160deg, #020617 0%, #0d1829 45%, #071220 100%)" : "linear-gradient(160deg, #ffffff 0%, #f9fafb 50%, #f0fdf8 85%, #ecfdf5 100%)";
    const textPrimary = dark ? "#f1f5f9" : "#0f172a";
    const textSecondary = dark ? "#64748b" : "#64748b";
    const cardBg = dark ? "rgba(13,20,36,.92)" : "rgba(255,255,255,.97)";
    const cardBorder = dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.055)";
    const cardShadow = dark ? "0 24px 64px rgba(0,0,0,.60), 0 4px 20px rgba(0,0,0,.40), inset 0 1px 0 rgba(255,255,255,.05)" : "0 24px 64px rgba(0,0,0,.07), 0 4px 16px rgba(0,0,0,.04), inset 0 1px 0 rgba(255,255,255,.9)";
    const priceColor = dark ? "#34d399" : "#059669";
    const separatorColor = dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.055)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative min-h-screen overflow-hidden flex flex-col",
        style: {
            background: heroBg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spotlight spotlight-primary",
                        style: {
                            top: "-20%",
                            left: "-14%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spotlight spotlight-secondary",
                        style: {
                            bottom: "-18%",
                            right: "-12%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spotlight",
                        style: {
                            width: 500,
                            height: 500,
                            top: "30%",
                            left: "40%",
                            background: dark ? "radial-gradient(circle, rgba(20,184,166,.04) 0%, transparent 60%)" : "radial-gradient(circle, rgba(20,184,166,.035) 0%, transparent 60%)",
                            animation: "orbSlow 28s ease-in-out 8s infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                            opacity: dark ? 0.025 : 0.018,
                            mixBlendMode: "multiply"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 dot-grid pointer-events-none",
                style: {
                    opacity: dark ? .55 : .35
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 left-0 right-0 h-px pointer-events-none separator"
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 max-w-7xl mx-auto w-full px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-32 pb-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...show(0.04),
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    borderRadius: 999,
                                    padding: "6px 14px",
                                    marginBottom: 30,
                                    background: dark ? "rgba(16,185,129,.09)" : "rgba(5,150,105,.06)",
                                    border: `1px solid ${dark ? "rgba(52,211,153,.2)" : "rgba(5,150,105,.15)"}`,
                                    boxShadow: dark ? "0 0 20px rgba(16,185,129,.06)" : "0 2px 12px rgba(5,150,105,.06)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-1.5 w-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full rounded-full opacity-70 animate-pulse-dot",
                                                style: {
                                                    background: "#10b981"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-1.5 w-1.5",
                                                style: {
                                                    background: "#10b981"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: ".1em",
                                            color: dark ? "#34d399" : "#047857",
                                            fontFamily: "var(--font-display)"
                                        },
                                        children: "21 АЙМГИЙН БАРАА · НЭГ ДОРООС"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    ...show(0.12),
                                    fontSize: "clamp(2.3rem,5.4vw,4rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.07,
                                    letterSpacing: "-0.033em",
                                    color: textPrimary,
                                    marginBottom: 22,
                                    fontFamily: "var(--font-display)"
                                },
                                children: [
                                    "Нутаг бүрийн",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-hero",
                                        children: "шинэлэг бараа"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 152,
                                        columnNumber: 70
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 800,
                                            color: textPrimary
                                        },
                                        children: "нэг дороос"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    ...show(0.24),
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    color: textSecondary,
                                    maxWidth: 440,
                                    marginBottom: 38,
                                    fontWeight: 400
                                },
                                children: [
                                    "Монголын малчид, фермерүүдийн шинэхэн бүтээгдэхүүнийг шууд захиалж, гэртээ хүргүүлээрэй.",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: dark ? "#34d399" : "#047857",
                                            fontWeight: 600
                                        },
                                        children: "Баталгаат чанар."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...show(0.34),
                                    display: "flex",
                                    gap: 10,
                                    flexWrap: "wrap",
                                    marginBottom: 46
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onExplore,
                                        className: "btn btn-primary btn-xl group",
                                        style: {
                                            gap: 8,
                                            fontFamily: "var(--font-display)",
                                            letterSpacing: "-0.015em"
                                        },
                                        children: [
                                            "Зах зээл үзэх",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                style: {
                                                    width: 16,
                                                    height: 16,
                                                    transition: "transform .22s var(--ease-spring)"
                                                },
                                                className: "group-hover:translate-x-0.5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onSell,
                                        className: "btn btn-outline btn-xl",
                                        style: {
                                            fontFamily: "var(--font-display)",
                                            letterSpacing: "-0.015em"
                                        },
                                        children: "Худалдагч болох"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...show(0.44),
                                    display: "flex",
                                    gap: 0,
                                    flexWrap: "wrap",
                                    marginBottom: 30,
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    border: `1px solid ${dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"}`,
                                    background: dark ? "rgba(15,23,42,.5)" : "rgba(248,250,252,.7)"
                                },
                                children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: "1 1 0",
                                            padding: "16px 18px",
                                            textAlign: "center",
                                            borderRight: i < STATS.length - 1 ? `1px solid ${dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"}` : "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 19,
                                                    fontWeight: 900,
                                                    letterSpacing: "-0.025em",
                                                    color: textPrimary,
                                                    fontFamily: "var(--font-display)",
                                                    lineHeight: 1
                                                },
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    color: textSecondary,
                                                    marginTop: 5,
                                                    fontWeight: 600,
                                                    letterSpacing: ".04em"
                                                },
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...show(0.52),
                                    display: "flex",
                                    gap: 8,
                                    flexWrap: "wrap"
                                },
                                children: TRUST.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 5,
                                            padding: "5px 12px",
                                            borderRadius: 999,
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: dark ? "#64748b" : "#64748b",
                                            background: dark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.025)",
                                            border: `1px solid ${dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: t.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            t.label
                                        ]
                                    }, t.label, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex flex-col gap-3 z-10",
                        style: show(0.18),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: cardBg,
                                    border: `1px solid ${cardBorder}`,
                                    boxShadow: cardShadow,
                                    borderRadius: 22,
                                    padding: "22px 22px 18px",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all .3s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            background: "linear-gradient(90deg, #059669, #14b8a6, #06b6d4)",
                                            borderRadius: "22px 22px 0 0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: -60,
                                            right: -60,
                                            width: 160,
                                            height: 160,
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle, rgba(16,185,129,.07), transparent 70%)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 14,
                                            alignItems: "flex-start",
                                            marginBottom: 18,
                                            opacity: cardAnim ? 0 : 1,
                                            transform: cardAnim ? "translateY(6px)" : "none",
                                            transition: "all .22s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-float",
                                                style: {
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 16,
                                                    flexShrink: 0,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: 28,
                                                    background: dark ? "rgba(16,185,129,.09)" : "#ecfdf5",
                                                    border: `1.5px solid ${dark ? "rgba(52,211,153,.14)" : "#d1fae5"}`,
                                                    boxShadow: "0 4px 16px rgba(16,185,129,.12)"
                                                },
                                                children: SHOWCASE[card].emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0
                                                },
                                                children: [
                                                    SHOWCASE[card].tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "inline-flex",
                                                            fontSize: 9,
                                                            fontWeight: 800,
                                                            letterSpacing: ".1em",
                                                            color: "#047857",
                                                            background: "#ecfdf5",
                                                            border: "1px solid #a7f3d0",
                                                            borderRadius: 999,
                                                            padding: "2px 8px",
                                                            marginBottom: 7,
                                                            textTransform: "uppercase",
                                                            animation: "badgePop .3s var(--ease-spring)"
                                                        },
                                                        children: SHOWCASE[card].tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 14,
                                                            fontWeight: 800,
                                                            color: textPrimary,
                                                            lineHeight: 1.25,
                                                            fontFamily: "var(--font-display)",
                                                            marginBottom: 6
                                                        },
                                                        children: SHOWCASE[card].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: textSecondary,
                                                                    fontWeight: 500
                                                                },
                                                                children: [
                                                                    "📍 ",
                                                                    SHOWCASE[card].aimag
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 19
                                                            }, this),
                                                            SHOWCASE[card].verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    fontWeight: 700,
                                                                    color: "#059669",
                                                                    background: "#ecfdf5",
                                                                    border: "1px solid #a7f3d0",
                                                                    borderRadius: 999,
                                                                    padding: "1px 7px"
                                                                },
                                                                children: "✓ Баталгаажсан"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: "right",
                                                    flexShrink: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 20,
                                                            fontWeight: 900,
                                                            color: priceColor,
                                                            letterSpacing: "-0.025em",
                                                            fontFamily: "var(--font-display)"
                                                        },
                                                        children: SHOWCASE[card].price
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: textSecondary,
                                                            marginTop: 2
                                                        },
                                                        children: "/ кг"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            marginBottom: 14,
                                            opacity: cardAnim ? 0 : 1,
                                            transition: "opacity .22s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 1
                                                },
                                                children: "★★★★★".split("").map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#f59e0b",
                                                            fontSize: 11
                                                        },
                                                        children: s
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: priceColor
                                                },
                                                children: SHOWCASE[card].rating
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: textSecondary
                                                },
                                                children: [
                                                    "(",
                                                    SHOWCASE[card].reviews,
                                                    " үнэлгээ)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 5,
                                            justifyContent: "center"
                                        },
                                        children: SHOWCASE.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCard(i),
                                                style: {
                                                    borderRadius: 999,
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: 0,
                                                    width: i === card ? 20 : 6,
                                                    height: 6,
                                                    background: i === card ? "linear-gradient(90deg, #10b981, #14b8a6)" : dark ? "rgba(255,255,255,.14)" : "#cbd5e1",
                                                    transition: "all .28s var(--ease-spring)",
                                                    boxShadow: i === card ? "0 2px 8px rgba(16,185,129,.3)" : "none"
                                                }
                                            }, i, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3,1fr)",
                                    gap: 10
                                },
                                children: [
                                    {
                                        emoji: "🧀",
                                        name: "Ааруул",
                                        sub: "Цагаан идээ",
                                        count: "240+"
                                    },
                                    {
                                        emoji: "🌾",
                                        name: "Улаанбуудай",
                                        sub: "Тариалан",
                                        count: "180+"
                                    },
                                    {
                                        emoji: "🌿",
                                        name: "Эмийн ургамал",
                                        sub: "Байгаль",
                                        count: "120+"
                                    }
                                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: cardBg,
                                            border: `1px solid ${cardBorder}`,
                                            boxShadow: dark ? "0 4px 18px rgba(0,0,0,.38)" : "0 2px 12px rgba(0,0,0,.045)",
                                            borderRadius: 16,
                                            padding: "16px 10px",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            transition: "transform .24s var(--ease-spring), box-shadow .24s ease, border-color .2s ease",
                                            position: "relative",
                                            overflow: "hidden"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.transform = "translateY(-4px) scale(1.02)";
                                            el.style.boxShadow = dark ? "0 16px 36px rgba(0,0,0,.50)" : "0 12px 32px rgba(0,0,0,.09)";
                                            el.style.borderColor = dark ? "rgba(52,211,153,.20)" : "rgba(16,185,129,.20)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.transform = "none";
                                            el.style.boxShadow = dark ? "0 4px 18px rgba(0,0,0,.38)" : "0 2px 12px rgba(0,0,0,.045)";
                                            el.style.borderColor = cardBorder;
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    marginBottom: 8,
                                                    animation: `float ${3.6 + i * 0.9}s ease-in-out ${i * 0.4}s infinite`
                                                },
                                                children: c.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 800,
                                                    color: textPrimary,
                                                    lineHeight: 1.3,
                                                    fontFamily: "var(--font-display)",
                                                    marginBottom: 4
                                                },
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "badge badge-em",
                                                style: {
                                                    fontSize: 9
                                                },
                                                children: c.sub
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 9,
                                                    color: textSecondary,
                                                    marginTop: 5,
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    c.count,
                                                    " бараа"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: cardBg,
                                    border: `1px solid ${cardBorder}`,
                                    boxShadow: dark ? "0 4px 16px rgba(0,0,0,.32)" : "0 2px 10px rgba(0,0,0,.04)",
                                    borderRadius: 16,
                                    padding: "13px 18px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: 3,
                                            background: "linear-gradient(180deg, #10b981, #14b8a6)",
                                            borderRadius: "16px 0 0 16px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexShrink: 0,
                                            paddingLeft: 6
                                        },
                                        children: [
                                            "👩‍🌾",
                                            "👨‍🌾",
                                            "🧑‍🌾",
                                            "👩",
                                            "👨"
                                        ].map((av, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: "50%",
                                                    border: `2.5px solid ${dark ? "#0d1829" : "#fff"}`,
                                                    background: `hsl(${i * 55 + 150},35%,${dark ? 24 : 78}%)`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: 13,
                                                    marginLeft: i > 0 ? -9 : 0,
                                                    zIndex: 5 - i,
                                                    boxShadow: "0 2px 6px rgba(0,0,0,.12)"
                                                },
                                                children: av
                                            }, i, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                    color: textPrimary,
                                                    fontFamily: "var(--font-display)"
                                                },
                                                children: "340+ худалдагч нэгдсэн"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 3,
                                                    marginTop: 2
                                                },
                                                children: [
                                                    "★★★★★".split("").map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#f59e0b",
                                                                fontSize: 10
                                                            },
                                                            children: s
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: textSecondary,
                                                            marginLeft: 4,
                                                            fontWeight: 600
                                                        },
                                                        children: "4.9 дундаж"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginLeft: "auto"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "badge badge-live",
                                            style: {
                                                fontSize: 10,
                                                gap: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#10b981",
                                                        display: "inline-block",
                                                        animation: "pulseDot 2s ease-in-out infinite"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this),
                                                "Онлайн"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 px-4 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 820,
                        margin: "0 auto",
                        borderRadius: "18px 18px 0 0",
                        boxShadow: dark ? "0 -12px 50px rgba(0,0,0,.50), 0 -2px 10px rgba(0,0,0,.35)" : "0 -12px 50px rgba(0,0,0,.07), 0 -2px 10px rgba(0,0,0,.04)",
                        background: dark ? "rgba(10,17,30,.98)" : "rgba(255,255,255,1)",
                        border: `1px solid ${dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)"}`,
                        borderBottom: "none",
                        backdropFilter: "blur(28px) saturate(1.5)",
                        WebkitBackdropFilter: "blur(28px) saturate(1.5)",
                        opacity: visible ? 1 : 0,
                        animation: visible ? "fadeUp .7s cubic-bezier(.16,1,.3,1) .95s both" : "none",
                        position: "relative",
                        overflow: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 1.5,
                                background: searchFocused ? "linear-gradient(90deg, #059669, #14b8a6, #06b6d4)" : "transparent",
                                transition: "background .35s ease"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                borderBottom: `1px solid ${separatorColor}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 16px",
                                        borderRight: `1px solid ${separatorColor}`,
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginRight: 7,
                                                fontSize: 14,
                                                opacity: .7
                                            },
                                            children: "📍"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: aimag,
                                            onChange: (e)=>setAimag(e.target.value),
                                            style: {
                                                background: "transparent",
                                                outline: "none",
                                                cursor: "pointer",
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: dark ? "#94a3b8" : "#475569",
                                                padding: "16px 0",
                                                minWidth: 110,
                                                fontFamily: "inherit",
                                                border: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Бүх аймаг"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIMAG_NODES"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: a.name
                                                    }, a.id, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 39
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 16px",
                                        borderRight: `1px solid ${separatorColor}`,
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginRight: 7,
                                                fontSize: 14,
                                                opacity: .7
                                            },
                                            children: "📦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 506,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: cat,
                                            onChange: (e)=>setCat(e.target.value),
                                            style: {
                                                background: "transparent",
                                                outline: "none",
                                                cursor: "pointer",
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: dark ? "#94a3b8" : "#475569",
                                                padding: "16px 0",
                                                minWidth: 110,
                                                fontFamily: "inherit",
                                                border: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Бүх төрөл"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: c.label
                                                    }, c.label, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 38
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: searchRef,
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            onKeyDown: (e)=>e.key === "Enter" && handleSearch(),
                                            onFocus: ()=>setSearchFocused(true),
                                            onBlur: ()=>setSearchFocused(false),
                                            placeholder: "Хайх — ноолуур, мах, бал...",
                                            style: {
                                                flex: 1,
                                                background: "transparent",
                                                border: "none",
                                                outline: "none",
                                                padding: "16px 18px",
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: dark ? "#f1f5f9" : "#0f172a",
                                                fontFamily: "inherit",
                                                minWidth: 0,
                                                transition: "all .2s ease"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSearch,
                                            className: "btn btn-primary",
                                            style: {
                                                borderRadius: 0,
                                                padding: "0 24px",
                                                fontFamily: "inherit",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                flexShrink: 0,
                                                letterSpacing: "-0.01em"
                                            },
                                            children: "Хайх"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-scrollbar",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "10px 16px",
                                overflowX: "auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: 700,
                                        color: dark ? "#475569" : "#94a3b8",
                                        flexShrink: 0,
                                        letterSpacing: ".06em",
                                        textTransform: "uppercase"
                                    },
                                    children: "Хурдан:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                [
                                    "🥩 Мах",
                                    "🧶 Ноолуур",
                                    "🍯 Бал",
                                    "🥛 Сүү",
                                    "🌾 Тариалан",
                                    "🧀 Цагаан идээ"
                                ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onExplore,
                                        style: {
                                            flexShrink: 0,
                                            padding: "5px 12px",
                                            borderRadius: 999,
                                            fontSize: 11,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            border: "none",
                                            background: dark ? "rgba(16,185,129,.07)" : "#f0fdf4",
                                            color: dark ? "#34d399" : "#059669",
                                            fontFamily: "inherit",
                                            transition: "all .18s var(--ease-spring)"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = dark ? "rgba(16,185,129,.14)" : "#dcfce7";
                                            el.style.transform = "translateY(-1px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = dark ? "rgba(16,185,129,.07)" : "#f0fdf4";
                                            el.style.transform = "none";
                                        },
                                        children: q
                                    }, q, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/HeroSection.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HeroSection.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "FWUX1LpFQD9ODKNKSOPJO4U/er8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/StatBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatBand",
    ()=>StatBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STATS = [
    {
        icon: "📦",
        value: 2840,
        suffix: "+",
        label: "Нийт бараа",
        accent: "#10b981"
    },
    {
        icon: "👨‍🌾",
        value: 340,
        suffix: "+",
        label: "Баталгаат худалдагч",
        accent: "#0d9488"
    },
    {
        icon: "📍",
        value: 21,
        suffix: "",
        label: "Аймаг",
        accent: "#059669"
    },
    {
        icon: "🛒",
        value: 12400,
        suffix: "+",
        label: "Захиалга биелэв",
        accent: "#14b8a6"
    },
    {
        icon: "⭐",
        value: 4.9,
        suffix: "",
        label: "Хэрэглэгчийн үнэлгээ",
        accent: "#f59e0b"
    },
    {
        icon: "🚚",
        value: 98,
        suffix: "%",
        label: "Цаг хугацаанд хүргэлт",
        accent: "#10b981"
    }
];
function useCountUp(target, active) {
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!active) return;
            const isFloat = target % 1 !== 0;
            const steps = 55, duration = 1300;
            const inc = target / steps;
            let cur = 0;
            const id = setInterval({
                "useCountUp.useEffect.id": ()=>{
                    cur += inc;
                    if (cur >= target) {
                        setVal(target);
                        clearInterval(id);
                    } else setVal(isFloat ? Math.round(cur * 10) / 10 : Math.floor(cur));
                }
            }["useCountUp.useEffect.id"], duration / steps);
            return ({
                "useCountUp.useEffect": ()=>clearInterval(id)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        active,
        target
    ]);
    return val;
}
_s(useCountUp, "J9W7PNt/cWQtiNkcKYTpkMkMUx4=");
function StatItem({ stat, active, idx }) {
    _s1();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const count = useCountUp(stat.value, active);
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 16px",
            borderRadius: 18,
            cursor: "default",
            position: "relative",
            overflow: "hidden",
            background: dark ? hov ? "rgba(16,185,129,.055)" : "rgba(15,23,42,.55)" : hov ? "#f8fafc" : "#fff",
            border: `1px solid ${hov ? dark ? "rgba(52,211,153,.20)" : "rgba(16,185,129,.18)" : dark ? "rgba(255,255,255,.06)" : "rgba(148,163,184,.12)"}`,
            boxShadow: hov ? dark ? "0 14px 44px rgba(0,0,0,.42)" : "0 10px 32px rgba(0,0,0,.07)" : dark ? "0 2px 8px rgba(0,0,0,.25)" : "0 1px 4px rgba(0,0,0,.04)",
            transform: hov ? "translateY(-5px)" : "none",
            transition: "all .26s var(--ease-spring)",
            opacity: active ? 1 : 0,
            animation: active ? `fadeUp .58s cubic-bezier(.16,1,.3,1) ${idx * .08}s both` : "none"
        },
        children: [
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${stat.accent}60, transparent)`,
                    borderRadius: "18px 18px 0 0"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 28,
                    marginBottom: 14,
                    transition: "transform .3s var(--ease-spring)",
                    transform: hov ? "scale(1.18) rotate(6deg)" : "none",
                    filter: hov ? `drop-shadow(0 4px 12px ${stat.accent}40)` : "none"
                },
                children: stat.icon
            }, void 0, false, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: "-0.022em",
                    color: hov ? stat.accent : dark ? "#f1f5f9" : "#0f172a",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    marginBottom: 8,
                    transition: "color .22s ease"
                },
                children: [
                    stat.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString(),
                    stat.suffix
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    fontWeight: 500,
                    color: dark ? "#64748b" : "#94a3b8",
                    lineHeight: 1.45,
                    letterSpacing: ".01em"
                },
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/StatBand.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s1(StatItem, "fx6/HOkkBKckiLtfVBcSKlE/axI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        useCountUp
    ];
});
_c = StatItem;
function StatBand() {
    _s2();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.1);
    const bg = dark ? "linear-gradient(170deg, #0f172a 0%, #020617 100%)" : "linear-gradient(170deg, #f8fafc 0%, #ffffff 60%, #f0fdf4 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            background: bg,
            padding: "80px 24px",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: dark ? "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(16,185,129,.05), transparent)" : "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(16,185,129,.04), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1152,
                    margin: "0 auto",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: 48,
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .56s ease both" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                style: {
                                    marginBottom: 12
                                },
                                children: "📊 Платформын тоо баримт"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/StatBand.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.14,
                                    margin: 0,
                                    color: dark ? "#f1f5f9" : "#0f172a",
                                    fontFamily: "var(--font-display)"
                                },
                                children: [
                                    "Монголын хамгийн том",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/home/StatBand.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "онлайн зах"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/StatBand.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/StatBand.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: dark ? "#64748b" : "#94a3b8",
                                    marginTop: 12,
                                    fontWeight: 400
                                },
                                children: "Бодит хэрэглэгчид, бодит захиалга, баталгаат чанар"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/StatBand.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/StatBand.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
                            gap: 10
                        },
                        children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                stat: s,
                                active: visible,
                                idx: i
                            }, s.label, false, {
                                fileName: "[project]/src/components/home/StatBand.tsx",
                                lineNumber: 152,
                                columnNumber: 32
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/StatBand.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/StatBand.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/StatBand.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s2(StatBand, "xJhzP0atanQvcOa4c61NBJcnh8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = StatBand;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatItem");
__turbopack_context__.k.register(_c1, "StatBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/CategoryGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryGrid",
    ()=>CategoryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CategoryGrid({ onExplore }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.08);
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionBg = dark ? "linear-gradient(180deg, #020617 0%, #0f172a 100%)" : "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            background: sectionBg,
            padding: "80px 24px",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: dark ? "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,.04), transparent)" : "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,.03), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1152,
                    margin: "0 auto",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: 48,
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .56s ease both" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: "📦 Ангиллаар хайх"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.14,
                                    margin: "0 0 12px",
                                    color: dark ? "#f1f5f9" : "#0f172a",
                                    fontFamily: "var(--font-display)"
                                },
                                children: "Ямар бараа хэрэгтэй вэ?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 15,
                                    color: dark ? "#64748b" : "#94a3b8",
                                    fontWeight: 400,
                                    maxWidth: 380,
                                    margin: "0 auto"
                                },
                                children: "Монголын бүх нутгаас, бүх ангиллын бараа нэг дороос"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 10
                        },
                        className: "sm:grid-cols-4 md:grid-cols-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat, i)=>{
                            const isHov = hov === cat.label;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onExplore(cat.label),
                                onMouseEnter: ()=>setHov(cat.label),
                                onMouseLeave: ()=>setHov(null),
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "18px 8px 16px",
                                    borderRadius: 16,
                                    cursor: "pointer",
                                    border: "none",
                                    background: isHov ? dark ? `rgba(16,185,129,.07)` : cat.bg : dark ? "rgba(15,23,42,.55)" : "#f8fafc",
                                    outline: `1.5px solid ${isHov ? dark ? "rgba(52,211,153,.25)" : cat.color + "30" : dark ? "rgba(255,255,255,.055)" : "rgba(148,163,184,.10)"}`,
                                    boxShadow: isHov ? dark ? `0 12px 32px rgba(0,0,0,.42), 0 0 0 1px rgba(52,211,153,.06)` : `0 10px 28px rgba(0,0,0,.07), 0 0 0 1px ${cat.color}10` : "none",
                                    transform: isHov ? "translateY(-5px) scale(1.02)" : "none",
                                    transition: "all .24s var(--ease-spring)",
                                    fontFamily: "inherit",
                                    opacity: visible ? 1 : 0,
                                    animation: visible ? `fadeUp .52s cubic-bezier(.16,1,.3,1) ${i * .038}s both` : "none",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 46,
                                            height: 46,
                                            borderRadius: 13,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 22,
                                            marginBottom: 9,
                                            background: isHov ? dark ? `rgba(16,185,129,.14)` : cat.bg : dark ? "rgba(255,255,255,.05)" : "#f1f5f9",
                                            border: `1px solid ${isHov ? dark ? "rgba(52,211,153,.22)" : cat.color + "25" : dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"}`,
                                            transform: isHov ? "scale(1.12) rotate(5deg)" : "none",
                                            transition: "transform .28s var(--ease-spring)",
                                            boxShadow: isHov ? `0 4px 16px ${cat.color}20` : "none"
                                        },
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            lineHeight: 1.3,
                                            textAlign: "center",
                                            color: isHov ? dark ? "#34d399" : cat.color : dark ? "#94a3b8" : "#475569",
                                            fontFamily: "var(--font-display)",
                                            marginBottom: 3,
                                            transition: "color .2s ease"
                                        },
                                        children: cat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 600,
                                            color: dark ? "#475569" : "#94a3b8",
                                            letterSpacing: ".04em"
                                        },
                                        children: [
                                            cat.count,
                                            "+ бараа"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    isHov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 16,
                                            background: "linear-gradient(135deg, rgba(255,255,255,.05) 0%, transparent 60%)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, cat.label, true, {
                                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginTop: 40,
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .56s ease .42s both" : "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onExplore(),
                            className: "btn btn-outline btn-lg",
                            style: {
                                fontFamily: "var(--font-display)",
                                gap: 8,
                                letterSpacing: "-0.01em"
                            },
                            children: [
                                "Бүх ангилал харах",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        transition: "transform .2s"
                                    },
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/CategoryGrid.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/CategoryGrid.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CategoryGrid.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/CategoryGrid.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/CategoryGrid.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(CategoryGrid, "vrHczQubKuaZGI4I7EzHGsJXGDY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CategoryGrid;
var _c;
__turbopack_context__.k.register(_c, "CategoryGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/TrustBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustBand",
    ()=>TrustBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const FEATURES = [
    {
        icon: "🔒",
        title: "Аюулгүй төлбөр",
        desc: "SSL шифрлэлт, баталгаат гүйлгээ",
        accent: "#10b981"
    },
    {
        icon: "✅",
        title: "Баталгаажсан худалдагч",
        desc: "Бүх худалдагч бидэнд бүртгэгдсэн",
        accent: "#0d9488"
    },
    {
        icon: "🚚",
        title: "Хурдан хүргэлт",
        desc: "УБ-д 24ц, аймагт 3-5 хоногт",
        accent: "#059669"
    },
    {
        icon: "↩️",
        title: "Буцаалтын баталгаа",
        desc: "7 хоногийн дотор буцааж болно",
        accent: "#14b8a6"
    },
    {
        icon: "🌿",
        title: "Органик бүтээгдэхүүн",
        desc: "Байгалийн аргаар үйлдвэрлэсэн",
        accent: "#10b981"
    },
    {
        icon: "💬",
        title: "24/7 Дэмжлэг",
        desc: "Хэдийд ч биднэй холбогдоорой",
        accent: "#0d9488"
    }
];
function FeatureCard({ f, i, visible }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            padding: "26px 20px",
            borderRadius: 18,
            textAlign: "center",
            cursor: "default",
            background: hov ? "rgba(16,185,129,.06)" : "rgba(255,255,255,.04)",
            border: `1px solid ${hov ? "rgba(52,211,153,.22)" : "rgba(255,255,255,.07)"}`,
            boxShadow: hov ? "0 14px 40px rgba(0,0,0,.36)" : "none",
            transform: hov ? "translateY(-5px)" : "none",
            transition: "all .26s var(--ease-spring)",
            position: "relative",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            animation: visible ? `fadeUp .58s cubic-bezier(.16,1,.3,1) ${i * .07}s both` : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${f.accent}80, transparent)`,
                    opacity: hov ? 1 : 0,
                    transition: "opacity .28s ease",
                    borderRadius: "18px 18px 0 0"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${f.accent}10, transparent 70%)`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 30,
                    marginBottom: 16,
                    transform: hov ? "scale(1.18) rotate(4deg)" : "none",
                    transition: "transform .3s var(--ease-spring)",
                    filter: hov ? `drop-shadow(0 4px 14px ${f.accent}40)` : "none",
                    display: "inline-block"
                },
                children: f.icon
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    marginBottom: 8,
                    fontFamily: "var(--font-display)",
                    lineHeight: 1.3,
                    transition: "color .2s ease",
                    ...hov ? {
                        color: "#f1f5f9"
                    } : {}
                },
                children: f.title
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    color: "rgba(148,163,184,.62)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    transition: "color .2s ease",
                    ...hov ? {
                        color: "rgba(148,163,184,.8)"
                    } : {}
                },
                children: f.desc
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/TrustBand.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(FeatureCard, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c = FeatureCard;
function TrustBand() {
    _s1();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.06);
    const bg = dark ? "linear-gradient(170deg, #020617 0%, #0a1629 50%, #0f172a 100%)" : "linear-gradient(170deg, #0a1629 0%, #0f172a 50%, #020617 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            background: bg,
            padding: "88px 24px",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-30%",
                    left: "-8%",
                    width: 700,
                    height: 700,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(16,185,129,.06), transparent 60%)",
                    pointerEvents: "none",
                    animation: "orbSlow 22s ease-in-out infinite",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "-20%",
                    right: "-5%",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(20,184,166,.04), transparent 60%)",
                    pointerEvents: "none",
                    animation: "orbSlow 28s ease-in-out 6s infinite reverse",
                    filter: "blur(80px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 dot-grid pointer-events-none",
                style: {
                    opacity: .22
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1152,
                    margin: "0 auto",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: 56,
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .56s ease both" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 7,
                                    padding: "6px 15px",
                                    borderRadius: 999,
                                    marginBottom: 16,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: ".08em",
                                    color: "#34d399",
                                    background: "rgba(16,185,129,.09)",
                                    border: "1px solid rgba(52,211,153,.2)",
                                    animation: "badgePop .4s var(--ease-spring) .1s both"
                                },
                                children: "🛡️ ЯАГААД LOCALMART?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.026em",
                                    lineHeight: 1.15,
                                    margin: "0 0 14px",
                                    color: "#f1f5f9",
                                    fontFamily: "var(--font-display)"
                                },
                                children: "Хэрэглэгчдийн итгэл найдвар"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 15,
                                    color: "rgba(148,163,184,.65)",
                                    fontWeight: 400,
                                    maxWidth: 420,
                                    margin: "0 auto",
                                    lineHeight: 1.7
                                },
                                children: "Монгол орны хамгийн найдвартай онлайн захиалгын платформ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/TrustBand.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
                            gap: 12,
                            marginBottom: 60
                        },
                        children: FEATURES.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                f: f,
                                i: i,
                                visible: visible
                            }, f.title, false, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TrustBand.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "34px 40px",
                            borderRadius: 22,
                            textAlign: "left",
                            background: "rgba(255,255,255,.04)",
                            border: "1px solid rgba(255,255,255,.08)",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 24,
                            flexWrap: "wrap",
                            position: "relative",
                            overflow: "hidden",
                            opacity: visible ? 1 : 0,
                            animation: visible ? "fadeUp .58s ease .52s both" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 3,
                                    background: "linear-gradient(180deg, #10b981, #14b8a6)",
                                    borderRadius: "22px 0 0 22px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingLeft: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 800,
                                            color: "#f1f5f9",
                                            marginBottom: 6,
                                            fontFamily: "var(--font-display)",
                                            letterSpacing: "-0.02em"
                                        },
                                        children: "Асуулт байна уу?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrustBand.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            color: "rgba(148,163,184,.6)",
                                            fontWeight: 400,
                                            lineHeight: 1.6
                                        },
                                        children: "Манай дэмжлэгийн баг таны туслалцаанд 24/7 бэлэн"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrustBand.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary btn-lg",
                                        style: {
                                            fontFamily: "var(--font-display)",
                                            gap: 7,
                                            letterSpacing: "-0.01em"
                                        },
                                        children: "💬 Чат эхлэх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrustBand.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-glass btn-lg",
                                        style: {
                                            fontFamily: "var(--font-display)",
                                            gap: 7,
                                            letterSpacing: "-0.01em"
                                        },
                                        children: "📞 Залгах"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrustBand.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/TrustBand.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/TrustBand.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/TrustBand.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/TrustBand.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s1(TrustBand, "xJhzP0atanQvcOa4c61NBJcnh8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = TrustBand;
var _c, _c1;
__turbopack_context__.k.register(_c, "FeatureCard");
__turbopack_context__.k.register(_c1, "TrustBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/HomeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeView",
    ()=>HomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/home/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$CategoryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/CategoryGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$StatBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/StatBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$TrustBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/TrustBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/map/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MongoliaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MongoliaMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
/* ── Shared section header ─────────────────────────────────────────────────── */ function SectionHeader({ label, title, sub, action, onAction, visible }) {
    _s();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp .52s ease both" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "clamp(1.5rem,3vw,2rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.022em",
                            lineHeight: 1.18,
                            margin: "0 0 6px",
                            color: dark ? "#f1f5f9" : "#0f172a",
                            fontFamily: "var(--font-display)"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 13,
                            color: dark ? "#64748b" : "#94a3b8",
                            fontWeight: 400
                        },
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            action && onAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onAction,
                className: "btn btn-ghost btn-md",
                style: {
                    fontFamily: "var(--font-display)",
                    gap: 6
                },
                children: [
                    action,
                    " →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HomeView.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(SectionHeader, "ctd7bk181ggBewbYxR6SkNLPMrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SectionHeader;
/* ── Flash sale strip ──────────────────────────────────────────────────────── */ function FlashSale({ onExplore }) {
    _s1();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.06);
    const [hovIdx, setHovIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ITEMS = [
        {
            emoji: "🐑",
            name: "Хонины ноос 1кг",
            orig: 25000,
            sale: 17500,
            aimag: "Говь-Алтай",
            tag: "Bestseller"
        },
        {
            emoji: "🧀",
            name: "Ааруул 500гр",
            orig: 18000,
            sale: 12600,
            aimag: "Архангай",
            tag: null
        },
        {
            emoji: "🍖",
            name: "Адууны мах 2кг",
            orig: 68000,
            sale: 47600,
            aimag: "Увс",
            tag: "Limited"
        },
        {
            emoji: "🌸",
            name: "Хандгай жимс 200гр",
            orig: 22000,
            sale: 15400,
            aimag: "Хэнтий",
            tag: null
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            padding: "72px 24px",
            background: dark ? "#020617" : "#f8fafc"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1152,
                margin: "0 auto"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderRadius: 18,
                    overflow: "hidden",
                    background: dark ? "linear-gradient(135deg, #1a0a0a 0%, #3b0f0f 50%, #1a0a0a 100%)" : "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)",
                    padding: "28px 32px",
                    opacity: visible ? 1 : 0,
                    animation: visible ? "fadeUp .52s ease both" : "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 16,
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 32,
                                            animation: "float 2.5s ease-in-out infinite"
                                        },
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    letterSpacing: ".12em",
                                                    color: "rgba(254,202,202,.65)",
                                                    marginBottom: 4,
                                                    textTransform: "uppercase"
                                                },
                                                children: "Хязгаарлагдмал хугацаа"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 20,
                                                    fontWeight: 800,
                                                    color: "#fff",
                                                    fontFamily: "var(--font-display)",
                                                    letterSpacing: "-0.02em"
                                                },
                                                children: "Flash Sale — 30% хүртэл хямдрал"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    "08",
                                    "45",
                                    "22"
                                ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "rgba(0,0,0,.3)",
                                                    borderRadius: 8,
                                                    padding: "8px 12px",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 22,
                                                            fontWeight: 900,
                                                            color: "#fff",
                                                            fontFamily: "var(--font-display)",
                                                            lineHeight: 1
                                                        },
                                                        children: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 9,
                                                            color: "rgba(254,202,202,.6)",
                                                            fontWeight: 600,
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            "Цаг",
                                                            "Мин",
                                                            "Сек"
                                                        ][i]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            i < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "rgba(255,255,255,.4)",
                                                    fontSize: 18,
                                                    fontWeight: 700
                                                },
                                                children: ":"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 115,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: 10
                        },
                        children: ITEMS.map((item, i)=>{
                            const isHov = hovIdx === i;
                            const disc = Math.round((1 - item.sale / item.orig) * 100);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExplore,
                                onMouseEnter: ()=>setHovIdx(i),
                                onMouseLeave: ()=>setHovIdx(null),
                                style: {
                                    padding: "18px 14px",
                                    borderRadius: 16,
                                    textAlign: "center",
                                    background: isHov ? "rgba(255,255,255,.13)" : "rgba(255,255,255,.07)",
                                    border: `1px solid ${isHov ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.09)"}`,
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    transform: isHov ? "translateY(-5px) scale(1.02)" : "none",
                                    boxShadow: isHov ? "0 16px 36px rgba(0,0,0,.30)" : "none",
                                    transition: "all .26s var(--ease-spring)",
                                    position: "relative",
                                    overflow: "hidden",
                                    opacity: visible ? 1 : 0,
                                    animation: visible ? `fadeUp .5s cubic-bezier(.16,1,.3,1) ${i * .08}s both` : "none"
                                },
                                children: [
                                    isHov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                                            borderRadius: "16px 16px 0 0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this),
                                    item.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 10,
                                            right: 10,
                                            fontSize: 8,
                                            fontWeight: 800,
                                            padding: "2px 7px",
                                            borderRadius: 999,
                                            background: "rgba(251,191,36,.2)",
                                            color: "#fbbf24",
                                            border: "1px solid rgba(251,191,36,.25)",
                                            letterSpacing: ".06em"
                                        },
                                        children: item.tag.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 150,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 34,
                                            marginBottom: 12,
                                            transform: isHov ? "scale(1.14) translateY(-2px)" : "none",
                                            transition: "transform .3s var(--ease-spring)",
                                            display: "inline-block"
                                        },
                                        children: item.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: "#fff",
                                            marginBottom: 5,
                                            fontFamily: "var(--font-display)",
                                            lineHeight: 1.3
                                        },
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: "rgba(254,202,202,.55)",
                                            marginBottom: 10
                                        },
                                        children: [
                                            "📍 ",
                                            item.aimag
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 6,
                                            marginBottom: 7
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 16,
                                                    fontWeight: 900,
                                                    color: "#fde68a",
                                                    fontFamily: "var(--font-display)"
                                                },
                                                children: [
                                                    "₮",
                                                    item.sale.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: "rgba(255,255,255,.3)",
                                                    textDecoration: "line-through"
                                                },
                                                children: [
                                                    "₮",
                                                    item.orig.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HomeView.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 3,
                                            fontSize: 9,
                                            fontWeight: 800,
                                            padding: "2px 9px",
                                            borderRadius: 999,
                                            background: "rgba(239,68,68,.28)",
                                            color: "#fca5a5",
                                            border: "1px solid rgba(239,68,68,.22)"
                                        },
                                        children: [
                                            "↓ -",
                                            disc,
                                            "% хямдрал"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/HomeView.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/HomeView.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s1(FlashSale, "n16bMPSKTxFygp3V/HMCAd8Nmf8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = FlashSale;
/* ── Product section ───────────────────────────────────────────────────────── */ function ProductSection({ label, title, sub, products, onOpen, onMore, onAuthRequired }) {
    _s2();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.06);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            padding: "80px 24px",
            background: dark ? "#0f172a" : "#ffffff",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: dark ? "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,.03), transparent)" : "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,.025), transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1152,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        label: label,
                        title: title,
                        sub: sub,
                        action: "Бүгдийг үзэх",
                        onAction: onMore,
                        visible: visible
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                            gap: 14
                        },
                        className: "stagger",
                        children: products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: p,
                                index: i,
                                onOpen: onOpen,
                                onAuthRequired: onAuthRequired
                            }, p.id, false, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HomeView.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s2(ProductSection, "xJhzP0atanQvcOa4c61NBJcnh8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = ProductSection;
function HomeView({ onExplore, onSell, onMapAimag, onHeroSearch, onAuthRequired }) {
    _s3();
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: dark ? "#020617" : "#ffffff"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                onExplore: onExplore,
                onSell: onSell,
                onSearch: onHeroSearch
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$StatBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatBand"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$CategoryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryGrid"], {
                onExplore: onExplore
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlashSale, {
                onExplore: onExplore
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductSection, {
                label: "🔥 Эрэлттэй бараа",
                title: "Онцлох бараанууд",
                sub: "Хамгийн олон захиалагдаж буй бүтээгдэхүүнүүд",
                products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 4),
                onOpen: setModal,
                onMore: onExplore,
                onAuthRequired: onAuthRequired
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 24px",
                    background: dark ? "#020617" : "#f8fafc",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            background: dark ? "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,.04), transparent)" : "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,.03), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1152,
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-label",
                                        children: "🗺️ Аймгаар хайх"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(1.5rem,3vw,2rem)",
                                            fontWeight: 800,
                                            letterSpacing: "-0.022em",
                                            color: dark ? "#f1f5f9" : "#0f172a",
                                            fontFamily: "var(--font-display)",
                                            margin: 0
                                        },
                                        children: "Монгол орны зах зээл"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 13,
                                            color: dark ? "#64748b" : "#94a3b8",
                                            marginTop: 8,
                                            fontWeight: 400
                                        },
                                        children: "Дурын аймгийг дарж, тэр нутгийн бараануудыг харна уу"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HomeView.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MongoliaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MongoliaMap"], {
                                onExplore: onMapAimag
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HomeView.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HomeView.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductSection, {
                label: "✨ Санал болгох",
                title: "Танд тохирох бараанууд",
                sub: "Таны хайлтын дагуу сонголт",
                products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(4, 8),
                onOpen: setModal,
                onMore: onExplore,
                onAuthRequired: onAuthRequired
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$TrustBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBand"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                product: modal,
                onClose: ()=>setModal(null),
                onAuthRequired: onAuthRequired
            }, void 0, false, {
                fileName: "[project]/src/components/home/HomeView.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HomeView.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s3(HomeView, "vTossb8TDNF6FnasYRXTEb3LIkw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = HomeView;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SectionHeader");
__turbopack_context__.k.register(_c1, "FlashSale");
__turbopack_context__.k.register(_c2, "ProductSection");
__turbopack_context__.k.register(_c3, "HomeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ExploreView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExploreView",
    ()=>ExploreView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/products/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ExploreFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ExploreFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/ProductModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SkeletonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SkeletonCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumbs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterTags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FilterTags.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function toProduct(d) {
    return {
        id: d.id,
        name: d.name,
        price: d.price,
        unit: d.unit,
        cat: d.category,
        aimag: d.aimag,
        emoji: d.emoji,
        story: d.story,
        rating: d.rating,
        reviews: d.reviewCount,
        seller: d.seller,
        phone: d.sellerPhone,
        verified: d.verified,
        isNew: d.isNew,
        isOrganic: d.isOrganic,
        imageCount: d.imageCount,
        date: new Date(d.createdAt).toLocaleDateString("mn-MN")
    };
}
function ExploreView({ initAimag, initQuery, onGoHome, onAuthRequired }) {
    _s();
    const { C } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ExploreFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FILTERS"],
        aimag: initAimag || "Бүх аймаг",
        search: initQuery || ""
    });
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const merge = (p)=>setFilters((f)=>({
                ...f,
                ...p
            }));
    const reset = ()=>setFilters({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ExploreFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FILTERS"],
            aimag: "Бүх аймаг"
        });
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExploreView.useCallback[fetchProducts]": async ()=>{
            setLoading(true);
            try {
                const sortMap = {
                    newest: "newest",
                    "price-asc": "price_asc",
                    "price-desc": "price_desc",
                    rating: "rating"
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productApi"].search({
                    q: filters.search || undefined,
                    category: filters.category !== "Бүх төрөл" ? filters.category : undefined,
                    aimag: filters.aimag !== "Бүх аймаг" ? filters.aimag : undefined,
                    maxPrice: filters.maxPrice < 300000 ? filters.maxPrice : undefined,
                    minRating: filters.minRating > 0 ? filters.minRating : undefined,
                    verifiedOnly: filters.onlyVerified || undefined,
                    sort: sortMap[filters.sort] || "newest",
                    size: 24
                });
                setProducts(res.content.map(toProduct));
                setTotal(res.totalElements);
            } catch  {
                error("Бараа татахад алдаа гарлаа");
            } finally{
                setLoading(false);
            }
        }
    }["ExploreView.useCallback[fetchProducts]"], [
        filters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreView.useEffect": ()=>{
            fetchProducts();
        }
    }["ExploreView.useEffect"], [
        fetchProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreView.useEffect": ()=>{
            if (initAimag) setFilters({
                "ExploreView.useEffect": (f)=>({
                        ...f,
                        aimag: initAimag
                    })
            }["ExploreView.useEffect"]);
        }
    }["ExploreView.useEffect"], [
        initAimag
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreView.useEffect": ()=>{
            if (initQuery) setFilters({
                "ExploreView.useEffect": (f)=>({
                        ...f,
                        search: initQuery
                    })
            }["ExploreView.useEffect"]);
        }
    }["ExploreView.useEffect"], [
        initQuery
    ]);
    const filterTags = [
        ...filters.search ? [
            {
                label: `"${filters.search}"`,
                onRemove: ()=>merge({
                        search: ""
                    })
            }
        ] : [],
        ...filters.category !== "Бүх төрөл" ? [
            {
                label: filters.category,
                onRemove: ()=>merge({
                        category: "Бүх төрөл"
                    })
            }
        ] : [],
        ...filters.aimag !== "Бүх аймаг" ? [
            {
                label: `📍 ${filters.aimag}`,
                onRemove: ()=>merge({
                        aimag: "Бүх аймаг"
                    })
            }
        ] : [],
        ...filters.maxPrice < 300000 ? [
            {
                label: `≤ ₮${filters.maxPrice.toLocaleString()}`,
                onRemove: ()=>merge({
                        maxPrice: 300000
                    })
            }
        ] : [],
        ...filters.minRating > 0 ? [
            {
                label: `⭐ ${filters.minRating}+`,
                onRemove: ()=>merge({
                        minRating: 0
                    })
            }
        ] : [],
        ...filters.onlyVerified ? [
            {
                label: "✓ Баталгаажсан",
                onRemove: ()=>merge({
                        onlyVerified: false
                    })
            }
        ] : []
    ];
    const crumbs = [
        {
            label: "Нүүр",
            onClick: onGoHome
        },
        {
            label: "Зах зээл"
        },
        ...filters.category !== "Бүх төрөл" ? [
            {
                label: filters.category
            }
        ] : [],
        ...filters.aimag !== "Бүх аймаг" ? [
            {
                label: filters.aimag
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    background: "linear-gradient(145deg,#052e16,#14532d,#059669)",
                    paddingTop: 72
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
                            backgroundSize: "48px 48px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ExploreView.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-5 md:px-8 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                    crumbs: crumbs,
                                    dark: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ExploreView.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-black text-white display-font mb-1",
                                children: "🛒 Зах зээл"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ExploreView.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/55 mb-5",
                                children: total > 0 ? `${total} бараа олдлоо` : "Бараа хайж байна..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ExploreView.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            filterTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterTags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterTags"], {
                                tags: filterTags,
                                count: total,
                                onClear: reset,
                                dark: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ExploreView.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ExploreView.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ExploreView.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block w-64 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ExploreFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExploreFilters"], {
                                filters: filters,
                                onChange: merge,
                                onReset: reset,
                                resultCount: total
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ExploreView.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ExploreView.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between flex-wrap gap-3 mb-5 px-4 py-3 rounded-2xl",
                                    style: {
                                        background: C.white,
                                        border: `1.5px solid ${C.g100}`,
                                        boxShadow: "0 2px 8px rgba(0,0,0,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-black display-font",
                                                    style: {
                                                        color: C.text
                                                    },
                                                    children: total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold",
                                                    style: {
                                                        color: C.g500
                                                    },
                                                    children: "бараа"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                filterTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black px-2 py-0.5 rounded-full",
                                                    style: {
                                                        background: C.greenBg,
                                                        color: C.green,
                                                        border: `1px solid ${C.green}30`
                                                    },
                                                    children: [
                                                        filterTags.length,
                                                        " шүүлтүүр"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/ExploreView.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "lg:hidden px-3 py-2 rounded-xl text-xs font-black font-sans flex items-center gap-1.5",
                                                    style: {
                                                        background: C.greenBg,
                                                        color: C.green,
                                                        border: `1px solid ${C.green}30`
                                                    },
                                                    children: "🔧 Шүүлт"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex rounded-xl overflow-hidden",
                                                    style: {
                                                        border: `1.5px solid ${C.g200}`
                                                    },
                                                    children: [
                                                        "⊞",
                                                        "☰"
                                                    ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-9 h-9 flex items-center justify-center text-sm transition-all",
                                                            style: {
                                                                background: i === 0 ? C.greenBg : "transparent",
                                                                color: i === 0 ? C.green : C.g400
                                                            },
                                                            children: icon
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/home/ExploreView.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/ExploreView.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                    children: Array.from({
                                        length: 9
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SkeletonCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonCard"], {}, i, false, {
                                            fileName: "[project]/src/components/home/ExploreView.tsx",
                                            lineNumber: 149,
                                            columnNumber: 58
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this) : products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl overflow-hidden",
                                    style: {
                                        background: C.white,
                                        border: `1.5px solid ${C.g100}`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                        type: "search",
                                        onReset: reset
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ExploreView.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 stagger",
                                    children: products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                            product: p,
                                            index: i,
                                            onOpen: setModal,
                                            onAuthRequired: onAuthRequired
                                        }, p.id, false, {
                                            fileName: "[project]/src/components/home/ExploreView.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ExploreView.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/ExploreView.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/ExploreView.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/ExploreView.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                product: modal,
                onClose: ()=>setModal(null),
                onAuthRequired: onAuthRequired
            }, void 0, false, {
                fileName: "[project]/src/components/home/ExploreView.tsx",
                lineNumber: 166,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(ExploreView, "Pm8iRs/La6A4QV4GsZ/10uj+C0s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ExploreView;
var _c;
__turbopack_context__.k.register(_c, "ExploreView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/SellerView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SellerView",
    ()=>SellerView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seller$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/seller/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seller$2f$SellerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/seller/SellerDashboard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function SellerView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "🏪 Худалдагчийн самбар",
                subtitle: "Бараагаа удирдаж, захиалгаа хянаарай"
            }, void 0, false, {
                fileName: "[project]/src/components/home/SellerView.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-5 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seller$2f$SellerDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SellerDashboard"], {}, void 0, false, {
                    fileName: "[project]/src/components/home/SellerView.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/SellerView.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = SellerView;
var _c;
__turbopack_context__.k.register(_c, "SellerView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$StatBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/StatBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$CategoryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/CategoryGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$TrustBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/TrustBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HomeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ExploreView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ExploreView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$SellerView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/SellerView.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_home_0r2n2cj._.js.map