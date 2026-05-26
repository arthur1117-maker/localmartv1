"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/ui";
import { productApi, type ProductDto } from "@/lib/api";
import { PageLoader, EmptyState } from "@/components/ui";

export function MyProductsList() {
  const { C } = useTheme();
  const { success, error } = useToast();
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading,  setLoad]     = useState(true);
  const [editing,  setEditing]  = useState<ProductDto | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    productApi.myProducts()
      .then(setProducts)
      .catch(() => error("Бараа татахад алдаа гарлаа"))
      .finally(() => setLoad(false));
  }, []);

  const toggleActive = async (id: number, current: boolean) => {
    try {
      const updated = await productApi.update(id, { active: !current });
      setProducts(ps => ps.map(p => p.id === id ? updated : p));
      success(current ? "Бараа идэвхгүй болголоо" : "Бараа идэвхтэй болголоо ✅");
    } catch { error("Алдаа гарлаа"); }
  };

  const saveEdit = async () => {
    if (!editing) return;
    try {
      const updated = await productApi.update(editing.id, {
        name: editing.name, price: editing.price,
        stock: editing.stock, unit: editing.unit,
      });
      setProducts(ps => ps.map(p => p.id === editing.id ? updated : p));
      setEditing(null);
      success("Бараа амжилттай засагдлаа ✅");
    } catch { error("Засахад алдаа гарлаа"); }
  };

  const confirmDelete = async (id: number) => {
    try {
      await productApi.delete(id);
      setProducts(ps => ps.filter(p => p.id !== id));
      setDeleting(null);
      success("Бараа устгагдлаа");
    } catch { error("Устгахад алдаа гарлаа"); }
  };

  const inp = {
    border:`1.5px solid ${C.g200}`,background:C.g50,color:C.text,
    borderRadius:10,fontFamily:"inherit",fontSize:13,fontWeight:600,
    outline:"none",padding:"6px 10px",width:"100%",
  } as const;

  if (loading) return <PageLoader message="Бараа ачааллаж байна..." />;
  if (products.length === 0) return <EmptyState type="search" resetLabel="➕ Бараа нэмэх" onReset={() => {}} />;

  return (
    <div className="flex flex-col gap-2.5">
      {products.map(p => (
        <div key={p.id} className="flex justify-between items-center gap-3 px-4 py-3.5 rounded-2xl"
          style={{background:C.g50,border:`1px solid ${C.g100}`}}>
          <span className="text-2xl">{p.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold truncate" style={{color:C.text}}>{p.name}</div>
            <div className="text-xs mt-0.5" style={{color:C.g400}}>
              Нөөц: {p.stock} · {p.category} · {p.aimag}
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-base font-black" style={{color:C.orange}}>₮{p.price.toLocaleString()}</div>
            <div className="text-[10px] font-extrabold rounded-md px-2 py-0.5 mt-0.5 inline-block"
              style={{background:p.active?C.greenSoft:"#fee2e2",color:p.active?C.green:"#dc2626"}}>
              {p.active?"✓ Идэвхтэй":"✗ Идэвхгүй"}
            </div>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            <button onClick={()=>setEditing({...p})}
              className="px-3 py-1.5 rounded-xl text-xs font-bold font-sans hover:opacity-80"
              style={{background:C.greenBg,color:C.green}}>Засах</button>
            <button onClick={()=>toggleActive(p.id, p.active)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold font-sans hover:opacity-80"
              style={{background:p.active?"#fef2f2":"#f0fdf4",color:p.active?"#dc2626":C.green}}>
              {p.active?"Хаах":"Нээх"}
            </button>
            <button onClick={()=>setDeleting(p.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold font-sans hover:opacity-80"
              style={{background:"#fef2f2",color:"#dc2626"}}>🗑</button>
          </div>
        </div>
      ))}

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4"
          style={{background:"rgba(0,0,0,.5)"}} onClick={()=>setEditing(null)}>
          <div className="w-full max-w-md rounded-3xl p-8"
            style={{background:C.white}} onClick={e=>e.stopPropagation()}>
            <h3 className="text-lg font-extrabold mb-5" style={{color:C.text}}>Бараа засах</h3>
            <div className="flex flex-col gap-3">
              <input value={editing.name} onChange={e=>setEditing({...editing,name:e.target.value})} style={inp} placeholder="Барааны нэр"/>
              <div className="grid grid-cols-2 gap-3">
                <input value={editing.price} onChange={e=>setEditing({...editing,price:+e.target.value})} style={inp} type="number" placeholder="Үнэ"/>
                <input value={editing.stock} onChange={e=>setEditing({...editing,stock:+e.target.value})} style={inp} type="number" placeholder="Нөөц"/>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={()=>setEditing(null)}
                className="flex-1 py-3 rounded-2xl text-sm font-extrabold font-sans"
                style={{background:C.g100,color:C.g600}}>Болих</button>
              <button onClick={saveEdit}
                className="flex-1 py-3 rounded-2xl text-sm font-extrabold text-white font-sans"
                style={{background:C.green}}>Хадгалах</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleting !== null && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4"
          style={{background:"rgba(0,0,0,.5)"}} onClick={()=>setDeleting(null)}>
          <div className="w-full max-w-xs rounded-3xl p-8 text-center"
            style={{background:C.white}} onClick={e=>e.stopPropagation()}>
            <div className="text-4xl mb-4">⚠️</div>
            <p className="font-bold mb-6" style={{color:C.text}}>Барааг устгах уу?</p>
            <div className="flex gap-3">
              <button onClick={()=>setDeleting(null)}
                className="flex-1 py-3 rounded-2xl text-sm font-extrabold font-sans"
                style={{background:C.g100,color:C.g600}}>Болих</button>
              <button onClick={()=>confirmDelete(deleting)}
                className="flex-1 py-3 rounded-2xl text-sm font-extrabold text-white font-sans"
                style={{background:"#dc2626"}}>Устгах</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
