"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <Link href={`/product/${product.id}`} className="mb-3 block">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full rounded-md object-cover"
        />
      </Link>
      <Link href={`/product/${product.id}`}>
        <h3 className="font-semibold text-gray-900 hover:text-blue-700">
          {product.title}
        </h3>
      </Link>
      <StarRating rating={product.rating} />
      <p className="mb-3 mt-1 font-bold text-gray-900">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto rounded-md bg-blue-700 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
}