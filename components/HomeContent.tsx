"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";

export default function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "All";
  const maxPrice = Number(searchParams.get("maxPrice") ?? 1000);
  const query = (searchParams.get("q") ?? "").toLowerCase();

  const updateParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "All") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/?${params.toString()}`);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesPrice = product.price <= maxPrice;
      const matchesSearch = product.title.toLowerCase().includes(query);
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [category, maxPrice, query]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row">
      <Sidebar
        category={category}
        onCategoryChange={(cat) => updateParams({ category: cat })}
        maxPrice={maxPrice}
        onMaxPriceChange={(price) =>
          updateParams({ maxPrice: String(price) })
        }
      />
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-900">Product Listing</h1>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}