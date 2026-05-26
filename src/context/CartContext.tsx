"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { CartItem, Product } from "@/lib/types";

interface CartCtx {
  items:    CartItem[];
  add:      (p: Product, qty?: number) => void;
  remove:   (id: number) => void;
  update:   (id: number, qty: number) => void;
  clear:    () => void;
  total:    number;
  count:    number;
}

const CartContext = createContext<CartCtx>({
  items: [], add: () => {}, remove: () => {}, update: () => {},
  clear: () => {}, total: 0, count: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (p: Product, qty = 1) =>
    setItems(prev => {
      const ex = prev.find(i => i.product.id === p.id);
      return ex
        ? prev.map(i => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i)
        : [...prev, { product: p, qty }];
    });

  const remove = (id: number) =>
    setItems(prev => prev.filter(i => i.product.id !== id));

  const update = (id: number, qty: number) =>
    setItems(prev =>
      qty <= 0
        ? prev.filter(i => i.product.id !== id)
        : prev.map(i => i.product.id === id ? { ...i, qty } : i)
    );

  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, update, clear: () => setItems([]), total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
