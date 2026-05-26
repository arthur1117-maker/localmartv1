"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/ui";
import { orderApi, type OrderDto } from "@/lib/api";
import { PageLoader, EmptyState } from "@/components/ui";

const STATUS_STEPS = ["CONFIRMED","PREPARING","SHIPPED","DELIVERED","CANCELLED"];
const STATUS_MN: Record<string,string> = {
  CONFIRMED:"БАТАЛГААЖСАН", PREPARING:"БЭЛТГЭЖ_БАЙНА",
  SHIPPED:"ХҮРГЭЛТЭНД", DELIVERED:"ХҮРГЭГДСЭН", CANCELLED:"ЦУЦЛАСАН",
};
const STATUS_COLOR: Record<string,{bg:string;color:string}> = {
  CONFIRMED:  {bg:"#dcfce7",color:"#059669"},
  PREPARING:  {bg:"#fef9c3",color:"#854d0e"},
  SHIPPED:    {bg:"#dbeafe",color:"#0e7490"},
  DELIVERED:  {bg:"#f0fdf4",color:"#059669"},
  CANCELLED:  {bg:"#fee2e2",color:"#dc2626"},
};

export function OrdersList() {
  const { C }  = useTheme();
  const { success, error } = useToast();
  const [orders,   setOrders]  = useState<OrderDto[]>([]);
  const [loading,  setLoad]    = useState(true);
  const [search,   setSearch]  = useState("");
  const [statusF,  setStatusF] = useState("Бүгд");

  useEffect(() => {
    orderApi.sellerOrders()
      .then(setOrders)
      .catch(() => error("Захиалга татахад алдаа гарлаа"))
      .finally(() => setLoad(false));
  }, []);

  const updateStatus = async (orderNo: string, nextStatus: string) => {
    try {
      const updated = await orderApi.updateStatus(orderNo, nextStatus);
      setOrders(os => os.map(o => o.orderNumber === orderNo ? {...o, status: updated.status} : o));
      success(`Статус → ${STATUS_MN[nextStatus] ?? nextStatus}`);
    } catch { error("Статус өөрчлөхөд алдаа гарлаа"); }
  };

  const inp = {
    border:`1.5px solid ${C.g200}`, background:C.g50, color:C.text,
    borderRadius:10, fontFamily:"inherit", fontSize:13, fontWeight:600,
    outline:"none", padding:"8px 12px", transition:"border-color .2s",
  } as const;

  const filtered = orders.filter(o => {
    const matchSearch = !search || o.orderNumber.includes(search) ||
      o.items.some(i => i.productName.toLowerCase().includes(search.toLowerCase()));
    const matchStatus = statusF === "Бүгд" || o.status === statusF;
    return matchSearch && matchStatus;
  });

  if (loading) return <PageLoader message="Захиалга ачааллаж байна..." />;

  return (
    <div>
      <div className="flex gap-3 mb-5 flex-wrap">
        <input value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="🔍 Захиалгын дугаар эсвэл бараа..."
          style={{...inp, flex:1, minWidth:200}}
          onFocus={e=>(e.target.style.borderColor=C.green)}
          onBlur={e=>(e.target.style.borderColor=C.g200)} />
        <div className="flex gap-2 flex-wrap">
          {["Бүгд","CONFIRMED","PREPARING","SHIPPED","DELIVERED","CANCELLED"].map(s => (
            <button key={s} onClick={()=>setStatusF(s)}
              className="px-3 py-2 rounded-xl text-xs font-extrabold font-sans transition-all"
              style={{ background:statusF===s?C.green:C.g100, color:statusF===s?"#fff":C.g600 }}>
              {STATUS_MN[s] ?? s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0
        ? <EmptyState type="orders" />
        : filtered.map(o => {
            const st = STATUS_COLOR[o.status] ?? {bg:C.g100,color:C.g500};
            const curIdx = STATUS_STEPS.indexOf(o.status);
            const nextStatus = curIdx >= 0 && curIdx < STATUS_STEPS.length - 2
              ? STATUS_STEPS[curIdx + 1] : null;
            return (
              <div key={o.orderNumber} className="rounded-2xl overflow-hidden mb-3"
                style={{border:`1px solid ${C.g200}`, background:C.white}}>
                <div className="flex items-center justify-between px-4 py-3"
                  style={{background:C.g50,borderBottom:`1px solid ${C.g100}`}}>
                  <div>
                    <div className="text-[11px] font-mono font-bold" style={{color:C.g500}}>#{o.orderNumber}</div>
                    <div className="text-sm font-bold" style={{color:C.text}}>👤 {o.buyer}</div>
                    <div className="text-xs" style={{color:C.g400}}>{new Date(o.createdAt).toLocaleDateString("mn-MN")}</div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1.5">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-xl"
                      style={{background:st.bg,color:st.color}}>
                      {STATUS_MN[o.status] ?? o.status}
                    </span>
                    <div className="text-sm font-black" style={{color:C.orange}}>
                      ₮{o.totalAmount.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3">
                  {o.items.map((item,i) => (
                    <div key={i} className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">{item.productEmoji}</span>
                      <span className="text-sm font-semibold" style={{color:C.text}}>{item.productName}</span>
                      <span className="text-xs ml-auto" style={{color:C.g500}}>×{item.quantity} · ₮{item.subtotal.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="text-xs mt-2" style={{color:C.g500}}>
                    📍 {o.deliveryAddress} · 📞 {o.buyerPhone} · 💳 {o.paymentMethod}
                  </div>
                </div>

                {nextStatus && o.status !== "CANCELLED" && (
                  <div className="px-4 pb-3 flex gap-2">
                    <button
                      onClick={() => updateStatus(o.orderNumber, nextStatus)}
                      className="flex-1 py-2 rounded-xl text-xs font-extrabold font-sans transition-all hover:opacity-90"
                      style={{background:C.green,color:"#fff"}}>
                      → {STATUS_MN[nextStatus]} болгох
                    </button>
                    {o.status === "CONFIRMED" && (
                      <button
                        onClick={() => updateStatus(o.orderNumber, "CANCELLED")}
                        className="px-4 py-2 rounded-xl text-xs font-extrabold font-sans transition-all hover:opacity-90"
                        style={{background:"#fef2f2",color:"#dc2626"}}>
                        Цуцлах
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })
      }
    </div>
  );
}
