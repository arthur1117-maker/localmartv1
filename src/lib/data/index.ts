import type { AimagNode, Category, Product, Order, Review } from "@/lib/types";

// ─── Aimag map nodes ─────────────────────────────────────────────────────────
export const AIMAG_NODES: AimagNode[] = [
  { id: "uvs",          name: "Увс",          x: 14, y: 24, count: 27 },
  { id: "khovd",        name: "Ховд",          x: 18, y: 38, count: 21 },
  { id: "bayan",        name: "Баян-Өлгий",    x:  7, y: 30, count: 15 },
  { id: "govialtai",    name: "Говь-Алтай",    x: 24, y: 54, count: 11 },
  { id: "zavkhan",      name: "Завхан",        x: 27, y: 34, count: 19 },
  { id: "khovsgol",     name: "Хөвсгөл",       x: 34, y: 18, count: 23 },
  { id: "arkhangai",    name: "Архангай",      x: 38, y: 34, count: 31 },
  { id: "uvurkhangai",  name: "Өвөрхангай",    x: 44, y: 48, count: 22 },
  { id: "bayankhongor", name: "Баянхонгор",    x: 37, y: 56, count: 16 },
  { id: "bulgan",       name: "Булган",        x: 44, y: 26, count: 14 },
  { id: "orkhon",       name: "Орхон",         x: 47, y: 22, count:  9 },
  { id: "darkhan",      name: "Дархан-Уул",    x: 52, y: 20, count: 12 },
  { id: "selenge",      name: "Сэлэнгэ",       x: 54, y: 16, count: 18 },
  { id: "tuv",          name: "Төв",           x: 57, y: 42, count: 20 },
  { id: "ulaanbaatar",  name: "Улаанбаатар",   x: 59, y: 36, count: 24 },
  { id: "dundgovi",     name: "Дундговь",      x: 57, y: 52, count:  8 },
  { id: "umnugovi",     name: "Өмнөговь",      x: 52, y: 66, count:  5 },
  { id: "dornogovi",    name: "Дорноговь",     x: 70, y: 58, count:  6 },
  { id: "sukhbaatar",   name: "Сүхбаатар",     x: 78, y: 44, count:  9 },
  { id: "dornod",       name: "Дорнод",        x: 84, y: 26, count: 13 },
  { id: "khentii",      name: "Хэнтий",        x: 70, y: 28, count: 17 },
];

// ─── Categories ──────────────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  { icon: "🥩", label: "Мах",             color: "#dc2626", bg: "#fef2f2", count: 142 },
  { icon: "🥛", label: "Цагаан идээ",     color: "#06b6d4", bg: "#eff6ff", count:  89 },
  { icon: "🧶", label: "Ноос ноолуур",    color: "#7c3aed", bg: "#f5f3ff", count:  67 },
  { icon: "🎨", label: "Гар урлал",       color: "#b45309", bg: "#fffbeb", count:  54 },
  { icon: "🌾", label: "Тариалан",        color: "#10b981", bg: "#f0fdf4", count:  38 },
  { icon: "🍯", label: "Байгалийн бүт.",  color: "#ca8a04", bg: "#fefce8", count:  71 },
  { icon: "🐟", label: "Загас",           color: "#0891b2", bg: "#ecfeff", count:  22 },
  { icon: "🌿", label: "Эмийн ургамал",   color: "#059669", bg: "#ecfdf5", count:  34 },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: 1, name: "Ямааны цэвэр ноолуур", price: 85000,
    aimag: "Увс", seller: "Б. Мөнхбаяр", verified: true,
    cat: "Ноос ноолуур", emoji: "🧶", rating: 4.8, reviews: 24,
    date: "2024.11.20", phone: "99112233",
    isNew: true, isOrganic: false, unit: "кг", imageCount: 4,
    story: "Увс аймгийн Наранбулаг сумын малчин Б. Мөнхбаярын 500 ямаанаас авсан цэвэр цагаан ноолуур. Жил бүр хаврын хяргалтаар цуглуулдаг.",
  },
  {
    id: 2, name: "Хонины чандмань гуяз", price: 42000,
    aimag: "Архангай", seller: "Д. Эрдэнэ", verified: true,
    cat: "Мах", emoji: "🥩", rating: 4.9, reviews: 51,
    date: "2024.11.19", phone: "88223344",
    isNew: false, isOrganic: true, unit: "кг", imageCount: 3,
    story: "Архангай аймгийн Тариат сумын малчин Д. Эрдэнийн өвс бэлчээрт өссөн 200 хоньноос. Химийн бодис хэрэглэхгүй.",
  },
  {
    id: 3, name: "Гэрийн аргал айраг 2л", price: 8000,
    aimag: "Өвөрхангай", seller: "Г. Нарантуяа", verified: false,
    cat: "Цагаан идээ", emoji: "🥛", rating: 4.6, reviews: 18,
    date: "2024.11.18", phone: "77334455",
    isNew: false, isOrganic: true, unit: "литр", imageCount: 2,
    story: "Өвөрхангай аймгийн уламжлалт аргаар исгэсэн цэвэр гүүний айраг. Зуны ногоон бэлчээрийн тэжээлтэй.",
  },
  {
    id: 4, name: "Эсгий гутал (гардан)", price: 120000,
    aimag: "Хөвсгөл", seller: "Т. Болормаа", verified: true,
    cat: "Гар урлал", emoji: "🎨", rating: 5.0, reviews: 9,
    date: "2024.11.17", phone: "99445566",
    isNew: true, isOrganic: false, unit: "ш", imageCount: 5,
    story: "Хөвсгөл аймгийн уран гар урчин Т. Болормаагийн 20 жилийн туршлагатай гар аргаар хийсэн эсгий гутал.",
  },
  {
    id: 5, name: "Органик буудай гурил 5кг", price: 15000,
    aimag: "Сэлэнгэ", seller: "Х. Амгалан", verified: true,
    cat: "Тариалан", emoji: "🌾", rating: 4.7, reviews: 33,
    date: "2024.11.16", phone: "88556677",
    isNew: false, isOrganic: true, unit: "уут", imageCount: 3,
    story: "Сэлэнгэ аймгийн органик аргаар тарьсан, пестицид хэрэглэхгүй буудайн гурил.",
  },
  {
    id: 6, name: "Зэрлэг зөгийн бал", price: 45000,
    aimag: "Баян-Өлгий", seller: "А. Темир", verified: false,
    cat: "Байгалийн бүт.", emoji: "🍯", rating: 4.5, reviews: 12,
    date: "2024.11.15", phone: "77667788",
    isNew: false, isOrganic: true, unit: "500гр", imageCount: 2,
    story: "Баян-Өлгий аймгийн Алтайн уулын зэрлэг зөгийн байгалийн жимсний бал.",
  },
  {
    id: 7, name: "Хорго тосон ааруул", price: 12000,
    aimag: "Архангай", seller: "Н. Цэцэгмаа", verified: true,
    cat: "Цагаан идээ", emoji: "🧀", rating: 4.8, reviews: 28,
    date: "2024.11.14", phone: "99778899",
    isNew: false, isOrganic: false, unit: "кг", imageCount: 3,
    story: "Архангай аймгийн 100% байгалийн үнээний тосон сүүгээр хийсэн уламжлалт ааруул.",
  },
  {
    id: 8, name: "Монгол ноосон хивс", price: 280000,
    aimag: "Завхан", seller: "О. Батцэцэг", verified: true,
    cat: "Ноос ноолуур", emoji: "🛋️", rating: 4.9, reviews: 7,
    date: "2024.11.13", phone: "88889900",
    isNew: true, isOrganic: false, unit: "м²", imageCount: 4,
    story: "Завхан аймгийн уран эмэгтэйчүүдийн 3 сарын хөдөлмөрийн бүтээл. 100% цэвэр ноос.",
  },
];

// ─── Seller orders ────────────────────────────────────────────────────────────
export const SELLER_ORDERS: Order[] = [
  { product: "Ямааны ноолуур 1кг", buyer: "Б. Тэмүүжин",   status: "ШИНЭ",        statusColor: "#14b8a6", amount: "₮85,000",  date: "Өнөөдөр"   },
  { product: "Хонины гуяз 2кг",    buyer: "Д. Оюунтуяа",   status: "БИЕЛСЭН",     statusColor: "#10b981", amount: "₮84,000",  date: "Өчигдөр"   },
  { product: "Эсгий гутал №38",    buyer: "С. Мөнхжаргал", status: "ХҮРГЭЛТЭНД",  statusColor: "#06b6d4", amount: "₮120,000", date: "2024.11.18" },
  { product: "Зөгийн бал 500гр",   buyer: "Г. Анхбаяр",    status: "ЦУЦЛАСАН",    statusColor: "#dc2626", amount: "₮22,500",  date: "2024.11.17" },
];

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS: Review[] = [
  { name: "Б. Сарантуяа", rating: 5, text: "Маш чанартай бараа, хурдан хүргэлттэй. Дараа дахин захиална!", avatar: "👩",   date: "2024.11.10" },
  { name: "Д. Батболд",   rating: 4, text: "Гайхалтай! Малчинтай шууд холбогдож авлаа. Итгэлтэй газар.",  avatar: "👨",   date: "2024.11.08" },
  { name: "Г. Мөнхзул",  rating: 5, text: "Ноолуурын чанар маш өндөр. Үнэ боломжийн. Санал болгоно!",    avatar: "👩‍🦱", date: "2024.11.05" },
];

// ─── Seller my-products (mock) ────────────────────────────────────────────────
export const MY_PRODUCTS = [
  { name: "Ямааны ноолуур 1кг", price: 85000,  qty: 12, active: true  },
  { name: "Хонины гуяз",         price: 42000,  qty:  5, active: true  },
  { name: "Эсгий гутал №38",     price: 120000, qty:  2, active: false },
  { name: "Зөгийн бал",          price: 45000,  qty:  8, active: true  },
];

// ─── Week chart data ──────────────────────────────────────────────────────────
export const WEEK_SALES = [
  { day: "Даваа",  value: 340000, pct: 38  },
  { day: "Мягмар", value: 520000, pct: 58  },
  { day: "Лхагва", value: 410000, pct: 46  },
  { day: "Пүрэв",  value: 890000, pct: 100 },
  { day: "Баасан", value: 620000, pct: 70  },
  { day: "Бямба",  value: 750000, pct: 84  },
  { day: "Ням",    value: 480000, pct: 54  },
];
