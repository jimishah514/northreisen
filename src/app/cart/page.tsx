"use client";

import { useCart } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    // In a real app, this would connect to a payment gateway
    setCheckoutSuccess(true);
    clearCart();
  };

  if (checkoutSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Booking Successful!
            </h1>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
              Thank you for booking with North Pakistan Tourism. You will
              receive a confirmation email shortly.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-10">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
              Your cart is empty
            </h2>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Start exploring our tours and add some to your cart!
            </p>
            <div className="mt-6">
              <Link
                href="/tours"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              >
                View Tours
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {items.map((item) => (
                <li key={item.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-shrink-0 relative w-full sm:w-32 h-32 rounded-lg overflow-hidden mb-4 sm:mb-0">
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">
                          Tour Image
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 sm:ml-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          ${item.price}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="mr-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            Quantity:
                          </label>
                          <select
                            id={`quantity-${item.id}`}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 py-1 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                Taxes and shipping calculated at checkout.
              </p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
