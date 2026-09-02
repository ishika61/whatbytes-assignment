"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { totalItems } = useCart();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-3">
      <Link href="/" className="text-xl font-bold text-blue-900 shrink-0">
        ShopEase
      </Link>

      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-600 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Link href="/cart" className="relative">
          <ShoppingCart className="text-gray-700" size={24} />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          <User size={18} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}