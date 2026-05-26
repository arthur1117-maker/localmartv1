(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCounter",
    ()=>useCounter,
    "useDebounce",
    ()=>useDebounce,
    "useHover",
    ()=>useHover,
    "useInView",
    ()=>useInView,
    "useLocalStorage",
    ()=>useLocalStorage,
    "useMediaQuery",
    ()=>useMediaQuery,
    "useScrollY",
    ()=>useScrollY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setVisible(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        visible
    };
}
_s(useInView, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
function useScrollY() {
    _s1();
    const [y, setY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollY.useEffect": ()=>{
            const handler = {
                "useScrollY.useEffect.handler": ()=>setY(window.scrollY)
            }["useScrollY.useEffect.handler"];
            window.addEventListener("scroll", handler, {
                passive: true
            });
            return ({
                "useScrollY.useEffect": ()=>window.removeEventListener("scroll", handler)
            })["useScrollY.useEffect"];
        }
    }["useScrollY.useEffect"], []);
    return y;
}
_s1(useScrollY, "/slePoHeZAYn9Z8z3nv1hA+Qbbw=");
function useCounter(target, active) {
    _s2();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCounter.useEffect": ()=>{
            if (!active) return;
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 55));
            const timer = setInterval({
                "useCounter.useEffect.timer": ()=>{
                    current = Math.min(current + step, target);
                    setValue(current);
                    if (current >= target) clearInterval(timer);
                }
            }["useCounter.useEffect.timer"], 18);
            return ({
                "useCounter.useEffect": ()=>clearInterval(timer)
            })["useCounter.useEffect"];
        }
    }["useCounter.useEffect"], [
        active,
        target
    ]);
    return value;
}
_s2(useCounter, "QEMGEmq5Rfwf2KLuWFF3dZYTA2c=");
function useLocalStorage(key, defaultValue) {
    _s3();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const stored = localStorage.getItem(key);
                return stored ? JSON.parse(stored) : defaultValue;
            } catch  {
                return defaultValue;
            }
        }
    }["useLocalStorage.useState"]);
    const set = (val)=>{
        setValue(val);
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem(key, JSON.stringify(val));
            } catch  {}
        }
    };
    return [
        value,
        set
    ];
}
_s3(useLocalStorage, "wMu8pM0lU+KaC+8Ycb3ISxnWAds=");
function useDebounce(value, delay = 400) {
    _s4();
    const [debounced, setDebounced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const timer = setTimeout({
                "useDebounce.useEffect.timer": ()=>setDebounced(value)
            }["useDebounce.useEffect.timer"], delay);
            return ({
                "useDebounce.useEffect": ()=>clearTimeout(timer)
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debounced;
}
_s4(useDebounce, "33bQBlXg6j7MFSTRBeGy5/ui5G8=");
function useHover() {
    _s5();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHover.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const on = {
                "useHover.useEffect.on": ()=>setHovered(true)
            }["useHover.useEffect.on"];
            const off = {
                "useHover.useEffect.off": ()=>setHovered(false)
            }["useHover.useEffect.off"];
            el.addEventListener("mouseenter", on);
            el.addEventListener("mouseleave", off);
            return ({
                "useHover.useEffect": ()=>{
                    el.removeEventListener("mouseenter", on);
                    el.removeEventListener("mouseleave", off);
                }
            })["useHover.useEffect"];
        }
    }["useHover.useEffect"], []);
    return {
        ref,
        hovered
    };
}
_s5(useHover, "ReHcFtoH3ikruJThqJ/+0+J0Koc=");
function useMediaQuery(query) {
    _s6();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const mq = window.matchMedia(query);
            setMatches(mq.matches);
            const handler = {
                "useMediaQuery.useEffect.handler": (e)=>setMatches(e.matches)
            }["useMediaQuery.useEffect.handler"];
            mq.addEventListener("change", handler);
            return ({
                "useMediaQuery.useEffect": ()=>mq.removeEventListener("change", handler)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s6(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIMAG_NODES",
    ()=>AIMAG_NODES,
    "CATEGORIES",
    ()=>CATEGORIES,
    "MY_PRODUCTS",
    ()=>MY_PRODUCTS,
    "PRODUCTS",
    ()=>PRODUCTS,
    "REVIEWS",
    ()=>REVIEWS,
    "SELLER_ORDERS",
    ()=>SELLER_ORDERS,
    "WEEK_SALES",
    ()=>WEEK_SALES
]);
const AIMAG_NODES = [
    {
        id: "uvs",
        name: "Увс",
        x: 14,
        y: 24,
        count: 27
    },
    {
        id: "khovd",
        name: "Ховд",
        x: 18,
        y: 38,
        count: 21
    },
    {
        id: "bayan",
        name: "Баян-Өлгий",
        x: 7,
        y: 30,
        count: 15
    },
    {
        id: "govialtai",
        name: "Говь-Алтай",
        x: 24,
        y: 54,
        count: 11
    },
    {
        id: "zavkhan",
        name: "Завхан",
        x: 27,
        y: 34,
        count: 19
    },
    {
        id: "khovsgol",
        name: "Хөвсгөл",
        x: 34,
        y: 18,
        count: 23
    },
    {
        id: "arkhangai",
        name: "Архангай",
        x: 38,
        y: 34,
        count: 31
    },
    {
        id: "uvurkhangai",
        name: "Өвөрхангай",
        x: 44,
        y: 48,
        count: 22
    },
    {
        id: "bayankhongor",
        name: "Баянхонгор",
        x: 37,
        y: 56,
        count: 16
    },
    {
        id: "bulgan",
        name: "Булган",
        x: 44,
        y: 26,
        count: 14
    },
    {
        id: "orkhon",
        name: "Орхон",
        x: 47,
        y: 22,
        count: 9
    },
    {
        id: "darkhan",
        name: "Дархан-Уул",
        x: 52,
        y: 20,
        count: 12
    },
    {
        id: "selenge",
        name: "Сэлэнгэ",
        x: 54,
        y: 16,
        count: 18
    },
    {
        id: "tuv",
        name: "Төв",
        x: 57,
        y: 42,
        count: 20
    },
    {
        id: "ulaanbaatar",
        name: "Улаанбаатар",
        x: 59,
        y: 36,
        count: 24
    },
    {
        id: "dundgovi",
        name: "Дундговь",
        x: 57,
        y: 52,
        count: 8
    },
    {
        id: "umnugovi",
        name: "Өмнөговь",
        x: 52,
        y: 66,
        count: 5
    },
    {
        id: "dornogovi",
        name: "Дорноговь",
        x: 70,
        y: 58,
        count: 6
    },
    {
        id: "sukhbaatar",
        name: "Сүхбаатар",
        x: 78,
        y: 44,
        count: 9
    },
    {
        id: "dornod",
        name: "Дорнод",
        x: 84,
        y: 26,
        count: 13
    },
    {
        id: "khentii",
        name: "Хэнтий",
        x: 70,
        y: 28,
        count: 17
    }
];
const CATEGORIES = [
    {
        icon: "🥩",
        label: "Мах",
        color: "#dc2626",
        bg: "#fef2f2",
        count: 142
    },
    {
        icon: "🥛",
        label: "Цагаан идээ",
        color: "#06b6d4",
        bg: "#eff6ff",
        count: 89
    },
    {
        icon: "🧶",
        label: "Ноос ноолуур",
        color: "#7c3aed",
        bg: "#f5f3ff",
        count: 67
    },
    {
        icon: "🎨",
        label: "Гар урлал",
        color: "#b45309",
        bg: "#fffbeb",
        count: 54
    },
    {
        icon: "🌾",
        label: "Тариалан",
        color: "#10b981",
        bg: "#f0fdf4",
        count: 38
    },
    {
        icon: "🍯",
        label: "Байгалийн бүт.",
        color: "#ca8a04",
        bg: "#fefce8",
        count: 71
    },
    {
        icon: "🐟",
        label: "Загас",
        color: "#0891b2",
        bg: "#ecfeff",
        count: 22
    },
    {
        icon: "🌿",
        label: "Эмийн ургамал",
        color: "#059669",
        bg: "#ecfdf5",
        count: 34
    }
];
const PRODUCTS = [
    {
        id: 1,
        name: "Ямааны цэвэр ноолуур",
        price: 85000,
        aimag: "Увс",
        seller: "Б. Мөнхбаяр",
        verified: true,
        cat: "Ноос ноолуур",
        emoji: "🧶",
        rating: 4.8,
        reviews: 24,
        date: "2024.11.20",
        phone: "99112233",
        isNew: true,
        isOrganic: false,
        unit: "кг",
        imageCount: 4,
        story: "Увс аймгийн Наранбулаг сумын малчин Б. Мөнхбаярын 500 ямаанаас авсан цэвэр цагаан ноолуур. Жил бүр хаврын хяргалтаар цуглуулдаг."
    },
    {
        id: 2,
        name: "Хонины чандмань гуяз",
        price: 42000,
        aimag: "Архангай",
        seller: "Д. Эрдэнэ",
        verified: true,
        cat: "Мах",
        emoji: "🥩",
        rating: 4.9,
        reviews: 51,
        date: "2024.11.19",
        phone: "88223344",
        isNew: false,
        isOrganic: true,
        unit: "кг",
        imageCount: 3,
        story: "Архангай аймгийн Тариат сумын малчин Д. Эрдэнийн өвс бэлчээрт өссөн 200 хоньноос. Химийн бодис хэрэглэхгүй."
    },
    {
        id: 3,
        name: "Гэрийн аргал айраг 2л",
        price: 8000,
        aimag: "Өвөрхангай",
        seller: "Г. Нарантуяа",
        verified: false,
        cat: "Цагаан идээ",
        emoji: "🥛",
        rating: 4.6,
        reviews: 18,
        date: "2024.11.18",
        phone: "77334455",
        isNew: false,
        isOrganic: true,
        unit: "литр",
        imageCount: 2,
        story: "Өвөрхангай аймгийн уламжлалт аргаар исгэсэн цэвэр гүүний айраг. Зуны ногоон бэлчээрийн тэжээлтэй."
    },
    {
        id: 4,
        name: "Эсгий гутал (гардан)",
        price: 120000,
        aimag: "Хөвсгөл",
        seller: "Т. Болормаа",
        verified: true,
        cat: "Гар урлал",
        emoji: "🎨",
        rating: 5.0,
        reviews: 9,
        date: "2024.11.17",
        phone: "99445566",
        isNew: true,
        isOrganic: false,
        unit: "ш",
        imageCount: 5,
        story: "Хөвсгөл аймгийн уран гар урчин Т. Болормаагийн 20 жилийн туршлагатай гар аргаар хийсэн эсгий гутал."
    },
    {
        id: 5,
        name: "Органик буудай гурил 5кг",
        price: 15000,
        aimag: "Сэлэнгэ",
        seller: "Х. Амгалан",
        verified: true,
        cat: "Тариалан",
        emoji: "🌾",
        rating: 4.7,
        reviews: 33,
        date: "2024.11.16",
        phone: "88556677",
        isNew: false,
        isOrganic: true,
        unit: "уут",
        imageCount: 3,
        story: "Сэлэнгэ аймгийн органик аргаар тарьсан, пестицид хэрэглэхгүй буудайн гурил."
    },
    {
        id: 6,
        name: "Зэрлэг зөгийн бал",
        price: 45000,
        aimag: "Баян-Өлгий",
        seller: "А. Темир",
        verified: false,
        cat: "Байгалийн бүт.",
        emoji: "🍯",
        rating: 4.5,
        reviews: 12,
        date: "2024.11.15",
        phone: "77667788",
        isNew: false,
        isOrganic: true,
        unit: "500гр",
        imageCount: 2,
        story: "Баян-Өлгий аймгийн Алтайн уулын зэрлэг зөгийн байгалийн жимсний бал."
    },
    {
        id: 7,
        name: "Хорго тосон ааруул",
        price: 12000,
        aimag: "Архангай",
        seller: "Н. Цэцэгмаа",
        verified: true,
        cat: "Цагаан идээ",
        emoji: "🧀",
        rating: 4.8,
        reviews: 28,
        date: "2024.11.14",
        phone: "99778899",
        isNew: false,
        isOrganic: false,
        unit: "кг",
        imageCount: 3,
        story: "Архангай аймгийн 100% байгалийн үнээний тосон сүүгээр хийсэн уламжлалт ааруул."
    },
    {
        id: 8,
        name: "Монгол ноосон хивс",
        price: 280000,
        aimag: "Завхан",
        seller: "О. Батцэцэг",
        verified: true,
        cat: "Ноос ноолуур",
        emoji: "🛋️",
        rating: 4.9,
        reviews: 7,
        date: "2024.11.13",
        phone: "88889900",
        isNew: true,
        isOrganic: false,
        unit: "м²",
        imageCount: 4,
        story: "Завхан аймгийн уран эмэгтэйчүүдийн 3 сарын хөдөлмөрийн бүтээл. 100% цэвэр ноос."
    }
];
const SELLER_ORDERS = [
    {
        product: "Ямааны ноолуур 1кг",
        buyer: "Б. Тэмүүжин",
        status: "ШИНЭ",
        statusColor: "#14b8a6",
        amount: "₮85,000",
        date: "Өнөөдөр"
    },
    {
        product: "Хонины гуяз 2кг",
        buyer: "Д. Оюунтуяа",
        status: "БИЕЛСЭН",
        statusColor: "#10b981",
        amount: "₮84,000",
        date: "Өчигдөр"
    },
    {
        product: "Эсгий гутал №38",
        buyer: "С. Мөнхжаргал",
        status: "ХҮРГЭЛТЭНД",
        statusColor: "#06b6d4",
        amount: "₮120,000",
        date: "2024.11.18"
    },
    {
        product: "Зөгийн бал 500гр",
        buyer: "Г. Анхбаяр",
        status: "ЦУЦЛАСАН",
        statusColor: "#dc2626",
        amount: "₮22,500",
        date: "2024.11.17"
    }
];
const REVIEWS = [
    {
        name: "Б. Сарантуяа",
        rating: 5,
        text: "Маш чанартай бараа, хурдан хүргэлттэй. Дараа дахин захиална!",
        avatar: "👩",
        date: "2024.11.10"
    },
    {
        name: "Д. Батболд",
        rating: 4,
        text: "Гайхалтай! Малчинтай шууд холбогдож авлаа. Итгэлтэй газар.",
        avatar: "👨",
        date: "2024.11.08"
    },
    {
        name: "Г. Мөнхзул",
        rating: 5,
        text: "Ноолуурын чанар маш өндөр. Үнэ боломжийн. Санал болгоно!",
        avatar: "👩‍🦱",
        date: "2024.11.05"
    }
];
const MY_PRODUCTS = [
    {
        name: "Ямааны ноолуур 1кг",
        price: 85000,
        qty: 12,
        active: true
    },
    {
        name: "Хонины гуяз",
        price: 42000,
        qty: 5,
        active: true
    },
    {
        name: "Эсгий гутал №38",
        price: 120000,
        qty: 2,
        active: false
    },
    {
        name: "Зөгийн бал",
        price: 45000,
        qty: 8,
        active: true
    }
];
const WEEK_SALES = [
    {
        day: "Даваа",
        value: 340000,
        pct: 38
    },
    {
        day: "Мягмар",
        value: 520000,
        pct: 58
    },
    {
        day: "Лхагва",
        value: 410000,
        pct: 46
    },
    {
        day: "Пүрэв",
        value: 890000,
        pct: 100
    },
    {
        day: "Баасан",
        value: 620000,
        pct: 70
    },
    {
        day: "Бямба",
        value: 750000,
        pct: 84
    },
    {
        day: "Ням",
        value: 480000,
        pct: 54
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/home/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HomeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ExploreView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ExploreView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$SellerView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/SellerView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrdersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/orders/OrdersView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/AdminView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/RegisterPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$CheckoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/CheckoutModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrderTrackingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/orders/OrderTrackingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
/* ── Page transition wrapper ──────────────────────────────────────────────── */ function PageTransition({ children, tabKey }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(tabKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransition.useEffect": ()=>{
            if (prevKey.current !== tabKey) {
                setVisible(false);
                const id = setTimeout({
                    "PageTransition.useEffect.id": ()=>{
                        setVisible(true);
                        prevKey.current = tabKey;
                    }
                }["PageTransition.useEffect.id"], 80);
                return ({
                    "PageTransition.useEffect": ()=>clearTimeout(id)
                })["PageTransition.useEffect"];
            } else {
                setVisible(true);
            }
        }
    }["PageTransition.useEffect"], [
        tabKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(8px)",
            transition: "opacity .35s var(--ease-smooth), transform .35s var(--ease-smooth)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(PageTransition, "Rih5michUErHaf8tLWTRRtXPwy8=");
_c = PageTransition;
function Page() {
    _s1();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("app");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [mapAimag, setMapAimag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [heroQuery, setHeroQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [showAuth, setShowAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCart, setShowCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChat, setShowChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trackOrder, setTrackOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleMapAimag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleMapAimag]": (name)=>{
            setMapAimag(name);
            setHeroQuery(undefined);
            setTab("explore");
        }
    }["Page.useCallback[handleMapAimag]"], []);
    // Called from HeroSection when user submits a search query
    const handleHeroSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[handleHeroSearch]": (query, aimag, cat)=>{
            setHeroQuery(query);
            if (aimag) setMapAimag(aimag);
            setTab("explore");
        }
    }["Page.useCallback[handleHeroSearch]"], []);
    const handleTabChange = (t)=>{
        if (t !== "explore") {
            setMapAimag(undefined);
            setHeroQuery(undefined);
        }
        setTab(t);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleOrderPlaced = (order)=>{
        setOrders((prev)=>[
                order,
                ...prev
            ]);
        setShowCheckout(false);
        setShowCart(false);
        setTrackOrder(order);
    };
    const goHome = ()=>{
        setView("app");
        setTab("home");
    };
    if (view === "register") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterPage"], {
            onSuccess: goHome,
            onLogin: ()=>{
                setView("app");
                setShowAuth(true);
            },
            onClose: goHome
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                activeTab: tab,
                onTabChange: handleTabChange,
                onCart: ()=>setShowCart(true),
                onChat: ()=>setShowChat((s)=>!s),
                onAuth: ()=>setShowAuth(true),
                onRegister: ()=>setView("register"),
                orders: orders
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-16 pb-20 md:pb-0",
                style: {
                    minHeight: "100vh"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTransition, {
                    tabKey: tab,
                    children: [
                        tab === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeView"], {
                            onExplore: ()=>handleTabChange("explore"),
                            onSell: ()=>handleTabChange("seller"),
                            onMapAimag: handleMapAimag,
                            onHeroSearch: handleHeroSearch,
                            onAuthRequired: ()=>setShowAuth(true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        tab === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ExploreView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExploreView"], {
                            initAimag: mapAimag,
                            initQuery: heroQuery,
                            onGoHome: ()=>handleTabChange("home"),
                            onAuthRequired: ()=>setShowAuth(true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        tab === "seller" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$SellerView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SellerView"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 128,
                            columnNumber: 33
                        }, this),
                        tab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrdersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrdersView"], {
                            orders: orders
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 129,
                            columnNumber: 33
                        }, this),
                        tab === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminView"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileBottomNav"], {
                activeTab: tab,
                onTabChange: handleTabChange,
                onCart: ()=>setShowCart(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            showAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthModal"], {
                onClose: ()=>setShowAuth(false),
                onRegister: ()=>{
                    setShowAuth(false);
                    setView("register");
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            showCart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                onClose: ()=>setShowCart(false),
                onCheckout: ()=>{
                    setShowCart(false);
                    setShowCheckout(true);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$CheckoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckoutModal"], {
                onClose: ()=>setShowCheckout(false),
                onOrderPlaced: handleOrderPlaced
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPanel"], {
                onClose: ()=>setShowChat(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 160,
                columnNumber: 20
            }, this),
            trackOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$orders$2f$OrderTrackingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTrackingModal"], {
                order: trackOrder,
                onClose: ()=>setTrackOrder(null)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(Page, "e0WU8dUkhGRkiY2PL/81B5hi/5s=");
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageTransition");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0uwfoxy._.js.map