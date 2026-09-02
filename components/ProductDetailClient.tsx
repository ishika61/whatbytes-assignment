"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>
        <p className="mt-4 text-2xl font-bold text-blue-800">
          ${product.price}
        </p>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-4 text-sm text-gray-500">
          Category:{" "}
          <span className="font-medium text-gray-800">{product.category}</span>
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Quantity</span>
          <div className="flex items-center rounded-md border border-gray-300">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-lg"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-lg"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 w-full rounded-md bg-blue-700 py-3 font-medium text-white transition hover:bg-blue-800 sm:w-auto sm:px-8"
        >
          Add to Cart
        </button>

        <div className="mt-10 border-t pt-6">
          <h2 className="mb-2 font-semibold text-gray-900">Reviews</h2>
          <p className="text-sm text-gray-500">No reviews yet.</p>
        </div>
      </div>
    </div>
  );
}