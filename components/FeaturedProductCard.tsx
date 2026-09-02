"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function FeaturedProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:col-span-2 sm:flex-row">
      <Link href={`/product/${product.id}`} className="shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full rounded-md object-cover sm:w-40"
        />
      </Link>
      <div className="flex flex-col">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-700">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 text-lg font-bold text-gray-900">
          ${product.price}
        </p>
        <StarRating rating={product.rating} />
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <p className="mt-3 text-sm text-gray-500">
          Category <span className="block font-medium text-gray-800">{product.category}</span>
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-fit rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}