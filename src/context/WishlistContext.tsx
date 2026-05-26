"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistCtx {
  wishlist: number[];
  toggle: (id: number) => void;
  has: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistCtx>({
  wishlist: [],
  toggle: () => {},
  has: () => false,
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([2, 5, 8]);

  const toggle = (id: number) =>
    setWishlist(w => (w.includes(id) ? w.filter(x => x !== id) : [...w, id]));

  return (
    <WishlistContext.Provider value={{ wishlist, toggle, has: id => wishlist.includes(id) }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
