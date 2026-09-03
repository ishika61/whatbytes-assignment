"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { totalItems } = useCart();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
 <header className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-[#0657A8] px-6 py-4">
      <Link href="/" className="text-2xl font-bold text-white shrink-0">
        Logo
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
          className="w-full rounded-full border-0 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>




            <div className="flex shrink-0 items-center gap-3">
        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-md bg-[#002A5A] px-4 py-2 text-sm font-medium text-white hover:bg-[#003c7a]"
        >
          <ShoppingCart size={16} />
          Cart
          {mounted && totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <User size={18} className="text-[#0657A8]" />
        </div>
      </div>
    </header>
  );
}