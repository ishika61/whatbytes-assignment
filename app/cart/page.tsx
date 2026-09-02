"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-6 py-20 text-center">
        <p className="text-lg text-gray-600">Your cart is empty.</p>
        <Link
          href="/"
          className="rounded-md bg-blue-700 px-6 py-2 font-medium text-white hover:bg-blue-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-blue-900">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-20 w-20 rounded-md object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-500">${product.price}</p>
              <div className="mt-2 flex items-center rounded-md border border-gray-300 w-fit">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-semibold text-gray-900">
                ${(product.price * quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end border-t pt-4">
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full rounded-md bg-blue-700 py-3 font-medium text-white hover:bg-blue-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}