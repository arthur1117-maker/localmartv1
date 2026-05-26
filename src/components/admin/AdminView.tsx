"use client";
import { useState, useMemo } from "react";
import { useToast } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";
import { useAuth }  from "@/context/AuthContext";
import { PRODUCTS, AIMAG_NODES } from "@/lib/data";
import { useInView } from "@/lib/hooks";

/* ── Mock data ── */
const MOCK_USERS = [
  { id:"1", name:"Б. Мөнхбаяр", email:"seller@test.mn",  role:"seller", avatar:"👨‍🌾", aimag:"Увс",          verified:true,  active:true,  joined:"2024.10.01", revenue: 2400000 },
  { id:"2", name:"Б. Тэмүүжин", email:"buyer@test.mn",   role:"buyer",  avatar:"👤",   aimag:"Улаанбаатар",  verified:false, active:true,  joined:"2024.10.15", revenue: 0 },
  { id:"3", name:"Д. Эрдэнэ",   email:"seller2@test.mn", role:"seller", avatar:"🧑‍🌾", aimag:"Архангай",     verified:true,  active:true,  joined:"2024.11.01", revenue: 1850000 },
  { id:"4", name:"Г. Нарантуяа",email:"buyer2@test.mn",  role:"buyer",  avatar:"👩",   aimag:"Өвөрхангай",  verified:false, active:false, joined:"2024.11.10", revenue: 0 },
  { id:"5", name:"Т. Болормаа", email:"seller3@test.mn", role:"seller", avatar:"👩‍🌾", aimag:"Хөвсгөл",     verified:true,  active:true,  joined:"2024.11.15", revenue: 980000 },
  { id:"6", name:"А. Темир",    email:"buyer3@test.mn",  role:"buyer",  avatar:"👨",   aimag:"Баян-Өлгий",  verified:false, active:true,  joined:"2024.11.20", revenue: 0 },
];

const MOCK_ORDERS = [
  { id:"ORD-A1B2C3", buyer:"Б. Тэмүүжин", seller:"Б. Мөнхбаяр", product:"Ямааны ноолуур 1кг",  total:85000,  status:"ХҮРГЭЛТЭНД",  date:"2025.01.15" },
  { id:"ORD-D4E5F6", buyer:"Г. Нарантуяа", seller:"Д. Эрдэнэ",   product:"Хонины гуяз 2кг",    total:84000,  status:"БАТАЛГААЖСАН", date:"2025.01.14" },
  { id:"ORD-G7H8I9", buyer:"А. Темир",     seller:"Т. Болормаа",  product:"Эсгий гутал №38",    total:120000, status:"БИЕЛСЭН",      date:"2025.01.10" },
  { id:"ORD-J1K2L3", buyer:"Б. Тэмүүжин", seller:"Б. Мөнхбаяр", product:"Зөгийн бал 500гр",   total:45000,  status:"ЦУЦЛАСАН",     date:"2025.01.08" },
];

type AdminTab = "overview" | "users" | "products" | "orders";

const STATUS_STYLE: Record<string,{bg:string;color:string;dot:string}> = {
  "БАТАЛГААЖСАН": { bg:"#ecfdf5", color:"#059669", dot:"#10b981" },
  "ХҮРГЭЛТЭНД":  { bg:"#ecfeff", color:"#0e7490", dot:"#06b6d4" },
  "БИЕЛСЭН":     { bg:"#f0fdf4", color:"#059669", dot:"#34d399" },
  "ЦУЦЛАСАН":    { bg:"#fee2e2", color:"#dc2626", dot:"#ef4444" },
};

export function AdminView() {
  const { C }       = useTheme();
  const { user }    = useAuth();
  const { success } = useToast();
  const { ref, visible } = useInView(0.04);

  const [tab, setTab]               = useState<AdminTab>("overview");
  const [userSearch, setUserSearch] = useState("");
  const [userRole, setUserRole]     = useState("Бүгд");
  const [prodSearch, setProdSearch] = useState("");
  const [users, setUsers]           = useState(MOCK_USERS);
  const [products, setProducts]     = useState(PRODUCTS.map(p => ({ ...p, active: true })));

  const totalRevenue    = MOCK_ORDERS.filter(o => o.status !== "ЦУЦЛАСАН").reduce((s,o) => s + o.total, 0);
  const sellers         = users.filter(u => u.role === "seller").length;
  const buyers          = users.filter(u => u.role === "buyer").length;
  const activeProducts  = products.filter(p => p.active).length;
  const pendingVerify   = users.filter(u => u.role === "seller" && !u.verified).length;

  const filteredUsers = useMemo(() =>
    users.filter(u =>
      (userRole === "Бүгд" || u.role === userRole.toLowerCase()) &&
      (!userSearch || u.name.includes(userSearch) || u.email.includes(userSearch))
    ), [users, userRole, userSearch]);

  const filteredProds = useMemo(() =>
    products.filter(p => !prodSearch || p.name.toLowerCase().includes(prodSearch.toLowerCase()))
  , [products, prodSearch]);

  const toggleUserActive = (id: string) => {
    const u = users.find(x => x.id === id);
    setUsers(us => us.map(x => x.id === id ? { ...x, active: !x.active } : x));
    if (u) success(u.active ? `${u.name} хаагдлаа 🔒` : `${u.name} нээгдлээ ✅`);
  };

  const verifyUser = (id: string) => {
    const u = users.find(x => x.id === id);
    setUsers(us => us.map(x => x.id === id ? { ...x, verified: true } : x));
    if (u) success(`${u.name} баталгаажлаа ✅`);
  };

  const toggleProdActive = (id: number) =>
    setProducts(ps => ps.map(p => p.id === id ? { ...p, active: !p.active } : p));

  const TABS: { id: AdminTab; label: string; icon: string; badge?: number }[] = [
    { id: "overview",  label: "Тойм",        icon: "📊" },
    { id: "users",     label: "Хэрэглэгч",   icon: "👥", badge: pendingVerify },
    { id: "products",  label: "Бараа",        icon: "🛍" },
    { id: "orders",    label: "Захиалга",     icon: "📦", badge: 2 },
  ];

  const inp = {
    border: `1.5px solid ${C.g200}`, background: C.g50, color: C.text,
    borderRadius: 12, fontFamily: "inherit", fontSize: 13, fontWeight: 600,
    outline: "none", padding: "10px 14px", transition: "border-color .2s, box-shadow .2s",
    width: "100%",
  } as const;

  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, animation: visible ? "fadeUp .6s ease both" : "none" }}>
      {/* ── Premium Admin Header ── */}
      <div className="relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg,#064e3b,#047857,#0d9488)",
        }}>
        {/* Pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,.20),transparent 70%)", transform: "translate(30%,-30%)" }} />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
          <div className="flex justify-between items-start flex-wrap gap-5 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest mb-3 uppercase"
                style={{ color: "#a5b4fc", background: "rgba(165,180,252,.12)", border: "1px solid rgba(165,180,252,.25)" }}>
                ⚙️ Admin Panel
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white display-font mb-1">
                Платформын удирдлага
              </h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,.5)" }}>
                LocalMart — Нийт хяналт ба удирдлагын самбар
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <button className="px-5 py-2.5 rounded-xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5 flex items-center gap-2"
                style={{ background: "rgba(99,102,241,.3)", border: "1px solid rgba(99,102,241,.4)" }}>
                📊 Тайлан татах
              </button>
              <button className="px-5 py-2.5 rounded-xl text-sm font-black text-white font-sans transition-all hover:-translate-y-0.5 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}>
                ⚙️ Тохиргоо
              </button>
            </div>
          </div>

          {/* KPI strip in header */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { icon:"💰", label:"Нийт орлого",     value:`₮${(totalRevenue/1000).toFixed(0)}K`, change:"+22%", up:true },
              { icon:"👥", label:"Хэрэглэгч",        value:String(users.length),                  change:"+5",   up:true },
              { icon:"🏪", label:"Худалдагч",         value:String(sellers),                       change:`${pendingVerify} хүлээлт`, up:false },
              { icon:"🛍", label:"Идэвхтэй бараа",  value:String(activeProducts),                change:"+14%", up:true },
              { icon:"📦", label:"Нийт захиалга",    value:String(MOCK_ORDERS.length),            change:"4 шинэ", up:true },
            ].map(s => (
              <div key={s.label} className="rounded-2xl px-4 py-4 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xl">{s.icon}</span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${s.up ? "bg-green-400/20 text-green-300" : "bg-amber-400/20 text-amber-300"}`}>
                    {s.change}
                  </span>
                </div>
                <div className="text-xl font-black text-white display-font">{s.value}</div>
                <div className="text-[10px] text-white/45 font-semibold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="relative flex items-center gap-2 px-5 py-3.5 text-sm font-bold transition-all duration-200 font-sans flex-shrink-0"
                style={{
                  color: tab === t.id ? "#fff" : "rgba(255,255,255,.55)",
                  borderBottom: `3px solid ${tab === t.id ? "#818cf8" : "transparent"}`,
                  background: tab === t.id ? "rgba(255,255,255,.10)" : "transparent",
                  borderRadius: "8px 8px 0 0",
                }}>
                {t.icon} <span className="hidden sm:block">{t.label}</span>
                {t.badge ? (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-black text-white flex items-center justify-center"
                    style={{ background: "#ef4444" }}>
                    {t.badge}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="flex flex-col gap-6">
            {/* Charts row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue chart */}
              <div className="rounded-3xl p-6"
                style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-black display-font" style={{ color: C.text }}>📈 Сарын орлого</h3>
                    <p className="text-xs mt-0.5" style={{ color: C.g400 }}>Сүүлийн 6 сар</p>
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-xl bg-green-100 text-green-700">↑ 22%</span>
                </div>
                <div className="flex items-end gap-3 h-32">
                  {[40,55,70,62,85,95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div className="relative w-full rounded-t-lg overflow-hidden cursor-pointer transition-all group-hover:opacity-80"
                        style={{ height: `${h}%` }}>
                        <div className="absolute inset-0 rounded-lg"
                          style={{ background: `linear-gradient(to top, #0d9488, #818cf8)`, animation: `barGrow .8s ease ${i * 0.1}s both` }} />
                      </div>
                      <div className="text-[9px] font-bold" style={{ color: C.g400 }}>
                        {["8 сар","9 сар","10 сар","11 сар","12 сар","1 сар"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* User growth */}
              <div className="rounded-3xl p-6"
                style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-black display-font" style={{ color: C.text }}>👥 Хэрэглэгчийн өсөлт</h3>
                  <span className="text-xs font-black px-3 py-1 rounded-xl bg-cyan-100 text-cyan-700">↑ 5 сүүлд</span>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Худалдагч", count: sellers, total: users.length, color: "#059669", bg: "#f0fdf4" },
                    { label: "Худалдан авагч", count: buyers, total: users.length, color: "#06b6d4", bg: "#eff6ff" },
                    { label: "Баталгаажсан", count: users.filter(u=>u.verified).length, total: sellers, color: "#f59e0b", bg: "#fffbeb" },
                    { label: "Идэвхтэй", count: users.filter(u=>u.active).length, total: users.length, color: "#8b5cf6", bg: "#f5f3ff" },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-semibold" style={{ color: C.g600 }}>{s.label}</span>
                        <span className="text-xs font-black" style={{ color: s.color }}>{s.count} / {s.total}</span>
                      </div>
                      <div className="rounded-full overflow-hidden h-2" style={{ background: C.g100 }}>
                        <div className="h-full rounded-full"
                          style={{ width: `${(s.count/s.total)*100}%`, background: s.color, animation: `barGrow .8s ease both` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pending verifications */}
            {pendingVerify > 0 && (
              <div className="rounded-3xl p-6"
                style={{ background: "#fffbeb", border: "1.5px solid #fbbf24", boxShadow: "0 4px 16px rgba(251,191,36,.15)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">⚠️</div>
                  <div>
                    <h3 className="text-sm font-black" style={{ color: "#92400e" }}>Баталгаажуулалт хүлээж байна</h3>
                    <p className="text-xs" style={{ color: "#b45309" }}>{pendingVerify} худалдагч баталгаажуулалт хүлээж байна</p>
                  </div>
                  <button onClick={() => setTab("users")}
                    className="ml-auto px-4 py-2 rounded-xl text-xs font-black text-white font-sans"
                    style={{ background: "#d97706" }}>
                    Шалгах →
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {users.filter(u => u.role === "seller" && !u.verified).map(u => (
                    <div key={u.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
                      <span className="text-xl">{u.avatar}</span>
                      <div className="flex-1">
                        <div className="text-sm font-bold" style={{ color: "#92400e" }}>{u.name}</div>
                        <div className="text-xs" style={{ color: "#b45309" }}>📍 {u.aimag} · {u.email}</div>
                      </div>
                      <button onClick={() => verifyUser(u.id)}
                        className="px-3 py-1.5 rounded-xl text-xs font-black text-white font-sans"
                        style={{ background: "#059669" }}>
                        ✅ Баталгаажуулах
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6"
                style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
                <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>🆕 Сүүлд бүртгүүлсэн</h3>
                {users.slice(0, 5).map(u => (
                  <div key={u.id} className="flex items-center gap-3 py-3"
                    style={{ borderBottom: `1px solid ${C.g50}` }}>
                    <span className="text-2xl">{u.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate" style={{ color: C.text }}>{u.name}</div>
                      <div className="text-[11px]" style={{ color: C.g400 }}>{u.email}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
                        style={{
                          background: u.role === "seller" ? "#f0fdf4" : "#eff6ff",
                          color: u.role === "seller" ? "#059669" : "#0e7490",
                        }}>
                        {u.role === "seller" ? "Худалдагч" : "Buyer"}
                      </span>
                      {u.role === "seller" && (
                        <span className="text-[9px] font-bold" style={{ color: u.verified ? "#10b981" : "#f59e0b" }}>
                          {u.verified ? "✓ Баталгаажсан" : "⏳ Хүлээж байна"}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl p-6"
                style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
                <h3 className="text-sm font-black mb-4 display-font" style={{ color: C.text }}>📦 Сүүлийн захиалгууд</h3>
                {MOCK_ORDERS.map(o => {
                  const st = STATUS_STYLE[o.status] || { bg: C.g100, color: C.g500, dot: C.g400 };
                  return (
                    <div key={o.id} className="flex items-center gap-3 py-3"
                      style={{ borderBottom: `1px solid ${C.g50}` }}>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold truncate" style={{ color: C.text }}>{o.product}</div>
                        <div className="text-[10px] flex gap-2 mt-0.5" style={{ color: C.g400 }}>
                          <span>👤 {o.buyer}</span>
                          <span>·</span>
                          <span>{o.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full"
                          style={{ background: st.bg, color: st.color }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.dot }} />
                          {o.status}
                        </span>
                        <div className="text-xs font-black" style={{ color: C.orange }}>₮{o.total.toLocaleString()}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* USERS */}
        {tab === "users" && (
          <div className="flex flex-col gap-5">
            {/* Search + filter bar */}
            <div className="flex flex-wrap gap-3 items-center p-4 rounded-2xl"
              style={{ background: C.white, border: `1.5px solid ${C.g100}` }}>
              <input
                style={{ ...inp, maxWidth: 280 }}
                placeholder="🔍 Нэр, имэйлээр хайх..."
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
              />
              <select style={{ ...inp, maxWidth: 160, cursor: "pointer" }} value={userRole} onChange={e => setUserRole(e.target.value)}>
                {["Бүгд","seller","buyer"].map(r => <option key={r}>{r}</option>)}
              </select>
              <span className="text-xs font-bold ml-auto" style={{ color: C.g500 }}>
                {filteredUsers.length} хэрэглэгч
              </span>
            </div>

            {/* Users table */}
            <div className="rounded-3xl overflow-hidden" style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
              <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] font-black uppercase tracking-widest"
                style={{ background: C.g50, color: C.g400, borderBottom: `1px solid ${C.g100}` }}>
                <div className="col-span-4">Хэрэглэгч</div>
                <div className="col-span-2">Байршил</div>
                <div className="col-span-2">Үүрэг</div>
                <div className="col-span-2">Статус</div>
                <div className="col-span-2 text-right">Үйлдэл</div>
              </div>
              {filteredUsers.map((u, i) => (
                <div key={u.id}
                  className="grid grid-cols-12 gap-2 items-center px-5 py-4 transition-all hover:bg-opacity-50"
                  style={{
                    borderBottom: i < filteredUsers.length - 1 ? `1px solid ${C.g50}` : "none",
                    background: !u.active ? "#fef2f2" : "transparent",
                  }}>
                  <div className="col-span-4 flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)" }}>
                      {u.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-black truncate" style={{ color: C.text }}>{u.name}</div>
                      <div className="text-[11px] truncate" style={{ color: C.g400 }}>{u.email}</div>
                    </div>
                  </div>
                  <div className="col-span-2 text-xs font-semibold" style={{ color: C.g500 }}>📍 {u.aimag}</div>
                  <div className="col-span-2">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
                      style={{ background: u.role==="seller" ? "#f0fdf4" : "#eff6ff", color: u.role==="seller" ? "#059669" : "#0e7490" }}>
                      {u.role === "seller" ? "🏪 Худалдагч" : "👤 Buyer"}
                    </span>
                  </div>
                  <div className="col-span-2 flex flex-col gap-1">
                    <span className={`text-[10px] font-bold ${u.active ? "text-green-600" : "text-red-500"}`}>
                      {u.active ? "● Идэвхтэй" : "● Хаалттай"}
                    </span>
                    {u.role === "seller" && (
                      <span className="text-[10px] font-bold" style={{ color: u.verified ? "#10b981" : "#f59e0b" }}>
                        {u.verified ? "✓ Баталгааж." : "⏳ Хүлээж"}
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 flex gap-1.5 justify-end flex-wrap">
                    {u.role === "seller" && !u.verified && (
                      <button onClick={() => verifyUser(u.id)}
                        className="px-2.5 py-1.5 rounded-lg text-[10px] font-black text-white font-sans"
                        style={{ background: "#059669" }}>
                        ✅ Баталгааж.
                      </button>
                    )}
                    <button onClick={() => toggleUserActive(u.id)}
                      className="px-2.5 py-1.5 rounded-lg text-[10px] font-black font-sans"
                      style={{
                        background: u.active ? "#fef2f2" : "#f0fdf4",
                        color: u.active ? "#dc2626" : "#059669",
                      }}>
                      {u.active ? "🔒 Хаах" : "🔓 Нээх"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {tab === "products" && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-3 items-center p-4 rounded-2xl"
              style={{ background: C.white, border: `1.5px solid ${C.g100}` }}>
              <input style={{ ...inp, maxWidth: 320 }} placeholder="🔍 Бараа хайх..."
                value={prodSearch} onChange={e => setProdSearch(e.target.value)} />
              <span className="text-xs font-bold ml-auto" style={{ color: C.g500 }}>
                {filteredProds.length} бараа
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden"
              style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
              <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] font-black uppercase tracking-widest"
                style={{ background: C.g50, color: C.g400, borderBottom: `1px solid ${C.g100}` }}>
                <div className="col-span-5">Бараа</div>
                <div className="col-span-2">Аймаг</div>
                <div className="col-span-2">Үнэ</div>
                <div className="col-span-1">Статус</div>
                <div className="col-span-2 text-right">Үйлдэл</div>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
                {filteredProds.map((p, i) => (
                  <div key={p.id}
                    className="grid grid-cols-12 gap-2 items-center px-5 py-3.5 transition-all hover:bg-opacity-50"
                    style={{ borderBottom: i < filteredProds.length - 1 ? `1px solid ${C.g50}` : "none" }}>
                    <div className="col-span-5 flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)" }}>
                        {p.emoji}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold truncate" style={{ color: C.text }}>{p.name}</div>
                        <div className="text-[10px]" style={{ color: C.g400 }}>{p.cat} · ⭐ {p.rating}</div>
                      </div>
                    </div>
                    <div className="col-span-2 text-xs font-semibold" style={{ color: C.g500 }}>📍 {p.aimag}</div>
                    <div className="col-span-2 text-sm font-black" style={{ color: C.orange }}>₮{p.price.toLocaleString()}</div>
                    <div className="col-span-1">
                      <span className={`text-[10px] font-bold ${p.active ? "text-green-600" : "text-red-500"}`}>
                        {p.active ? "● Байна" : "● Хаасан"}
                      </span>
                    </div>
                    <div className="col-span-2 flex gap-1.5 justify-end">
                      <button onClick={() => toggleProdActive(p.id)}
                        className="px-2.5 py-1.5 rounded-lg text-[10px] font-black font-sans"
                        style={{
                          background: p.active ? "#fef2f2" : "#f0fdf4",
                          color: p.active ? "#dc2626" : "#059669",
                        }}>
                        {p.active ? "Хаах" : "Нээх"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ORDERS */}
        {tab === "orders" && (
          <div className="rounded-3xl overflow-hidden"
            style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 4px 20px rgba(0,0,0,.05)" }}>
            <div className="px-6 py-5" style={{ borderBottom: `1px solid ${C.g100}` }}>
              <h3 className="text-base font-black display-font" style={{ color: C.text }}>📦 Нийт захиалгууд</h3>
            </div>
            <div className="flex flex-col">
              {MOCK_ORDERS.map((o, i) => {
                const st = STATUS_STYLE[o.status] || { bg: C.g100, color: C.g500, dot: C.g400 };
                return (
                  <div key={o.id}
                    className="flex items-center gap-4 px-6 py-4 transition-all hover:bg-opacity-50"
                    style={{ borderBottom: i < MOCK_ORDERS.length - 1 ? `1px solid ${C.g50}` : "none" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                      style={{ background: "#eff6ff", color: "#0e7490" }}>
                      #
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-black" style={{ color: C.text }}>{o.id}</span>
                        <span className="flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full"
                          style={{ background: st.bg, color: st.color }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.dot }} />
                          {o.status}
                        </span>
                      </div>
                      <div className="text-xs" style={{ color: C.g500 }}>{o.product}</div>
                      <div className="text-[11px] mt-0.5 flex gap-3" style={{ color: C.g400 }}>
                        <span>👤 {o.buyer}</span>
                        <span>🏪 {o.seller}</span>
                        <span>📅 {o.date}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-black display-font" style={{ color: C.orange }}>₮{o.total.toLocaleString()}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
