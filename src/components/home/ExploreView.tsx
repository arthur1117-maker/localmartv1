"use client";
import { useState, useEffect, useCallback } from "react";
import { useTheme }   from "@/context/ThemeContext";
import { PageHeader } from "@/components/layout";
import { ExploreFilters, ProductCard, ProductModal } from "@/components/products";
import { DEFAULT_FILTERS } from "@/components/products/ExploreFilters";
import type { FilterState } from "@/components/products/ExploreFilters";
import { SkeletonCard, Breadcrumbs, EmptyState, FilterTags, useToast } from "@/components/ui";
import type { FilterTag } from "@/components/ui";
import { productApi, type ProductDto } from "@/lib/api";
import type { Product } from "@/lib/types";

function toProduct(d: ProductDto): Product {
  return {
    id:d.id, name:d.name, price:d.price, unit:d.unit,
    cat:d.category, aimag:d.aimag, emoji:d.emoji, story:d.story,
    rating:d.rating, reviews:d.reviewCount, seller:d.seller,
    phone:d.sellerPhone, verified:d.verified, isNew:d.isNew,
    isOrganic:d.isOrganic, imageCount:d.imageCount,
    date:new Date(d.createdAt).toLocaleDateString("mn-MN"),
  };
}

interface ExploreViewProps {
  initAimag?:string; initQuery?:string; onGoHome?:()=>void; onAuthRequired?:()=>void;
}

export function ExploreView({ initAimag, initQuery, onGoHome, onAuthRequired }: ExploreViewProps) {
  const { C } = useTheme();
  const { error } = useToast();
  const [filters,  setFilters]  = useState<FilterState>({...DEFAULT_FILTERS, aimag: initAimag||"Бүх аймаг", search: initQuery||""});
  const [products, setProducts] = useState<Product[]>([]);
  const [total,    setTotal]    = useState(0);
  const [loading,  setLoading]  = useState(false);
  const [modal,    setModal]    = useState<Product|null>(null);

  const merge = (p: Partial<FilterState>) => setFilters(f => ({...f,...p}));
  const reset = () => setFilters({...DEFAULT_FILTERS, aimag:"Бүх аймаг"});

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const sortMap: Record<string,string> = {newest:"newest","price-asc":"price_asc","price-desc":"price_desc",rating:"rating"};
      const res = await productApi.search({
        q:           filters.search  ||undefined,
        category:    filters.category!=="Бүх төрөл"?filters.category:undefined,
        aimag:       filters.aimag   !=="Бүх аймаг" ?filters.aimag   :undefined,
        maxPrice:    filters.maxPrice<300000        ?filters.maxPrice:undefined,
        minRating:   filters.minRating>0            ?filters.minRating:undefined,
        verifiedOnly:filters.onlyVerified           ||undefined,
        sort:        sortMap[filters.sort]||"newest",
        size:24,
      });
      setProducts(res.content.map(toProduct));
      setTotal(res.totalElements);
    } catch { error("Бараа татахад алдаа гарлаа"); }
    finally { setLoading(false); }
  }, [filters]);

  useEffect(()=>{ fetchProducts(); },[fetchProducts]);
  useEffect(()=>{ if(initAimag) setFilters(f=>({...f,aimag:initAimag})); },[initAimag]);
  useEffect(()=>{ if(initQuery) setFilters(f=>({...f,search:initQuery})); },[initQuery]);

  const filterTags: FilterTag[] = [
    ...(filters.search             ?[{label:`"${filters.search}"`,    onRemove:()=>merge({search:""})}]:[]),
    ...(filters.category!=="Бүх төрөл"?[{label:filters.category,      onRemove:()=>merge({category:"Бүх төрөл"})}]:[]),
    ...(filters.aimag   !=="Бүх аймаг" ?[{label:`📍 ${filters.aimag}`,onRemove:()=>merge({aimag:"Бүх аймаг"})}]:[]),
    ...(filters.maxPrice <300000   ?[{label:`≤ ₮${filters.maxPrice.toLocaleString()}`,onRemove:()=>merge({maxPrice:300000})}]:[]),
    ...(filters.minRating>0        ?[{label:`⭐ ${filters.minRating}+`,onRemove:()=>merge({minRating:0})}]:[]),
    ...(filters.onlyVerified       ?[{label:"✓ Баталгаажсан",          onRemove:()=>merge({onlyVerified:false})}]:[]),
  ];
  const crumbs=[
    {label:"Нүүр",onClick:onGoHome},{label:"Зах зээл"},
    ...(filters.category!=="Бүх төрөл"?[{label:filters.category}]:[]),
    ...(filters.aimag   !=="Бүх аймаг" ?[{label:filters.aimag}]:[]),
  ];

  return (
    <>
      {/* ── Explore Header ── */}
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg,#052e16,#14532d,#059669)", paddingTop: 72 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
          <div className="mb-3">
            <Breadcrumbs crumbs={crumbs} dark />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white display-font mb-1">
            🛒 Зах зээл
          </h1>
          <p className="text-sm text-white/55 mb-5">
            {total > 0 ? `${total} бараа олдлоо` : "Бараа хайж байна..."}
          </p>
          {/* Filter tags */}
          {filterTags.length > 0 && (
            <FilterTags tags={filterTags} count={total} onClear={reset} dark />
          )}
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-6">
          {/* Sidebar – hidden on mobile */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ExploreFilters filters={filters} onChange={merge} onReset={reset} resultCount={total} />
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5 px-4 py-3 rounded-2xl"
              style={{ background: C.white, border: `1.5px solid ${C.g100}`, boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
              <div className="flex items-center gap-2">
                <span className="text-base font-black display-font" style={{ color: C.text }}>{total}</span>
                <span className="text-sm font-semibold" style={{ color: C.g500 }}>бараа</span>
                {filterTags.length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.green}30` }}>
                    {filterTags.length} шүүлтүүр
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile filter button */}
                <button className="lg:hidden px-3 py-2 rounded-xl text-xs font-black font-sans flex items-center gap-1.5"
                  style={{ background: C.greenBg, color: C.green, border: `1px solid ${C.green}30` }}>
                  🔧 Шүүлт
                </button>
                {/* View toggle placeholder */}
                <div className="flex rounded-xl overflow-hidden" style={{ border: `1.5px solid ${C.g200}` }}>
                  {["⊞", "☰"].map((icon, i) => (
                    <button key={i}
                      className="w-9 h-9 flex items-center justify-center text-sm transition-all"
                      style={{ background: i === 0 ? C.greenBg : "transparent", color: i === 0 ? C.green : C.g400 }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : products.length === 0 ? (
              <div className="rounded-3xl overflow-hidden" style={{ background: C.white, border: `1.5px solid ${C.g100}` }}>
                <EmptyState type="search" onReset={reset} />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
                {products.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} onOpen={setModal} onAuthRequired={onAuthRequired} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {modal && <ProductModal product={modal} onClose={() => setModal(null)} onAuthRequired={onAuthRequired} />}
    </>
  );
}
