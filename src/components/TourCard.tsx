"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TourCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  rating: number;
  maxGroupSize: number;
  onAddToCart?: (tourId: string) => void;
};

export default function TourCard({
  id,
  title,
  description,
  imageUrl,
  price,
  duration,
  rating,
  maxGroupSize,
  onAddToCart,
}: TourCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // In a real app, this would be connected to a cart state management system
    if (onAddToCart) {
      onAddToCart(id);
    }

    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  // Generate stars for the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 sm:h-64">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 m-2 rounded-full font-bold">
          ${price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            ({rating.toFixed(1)})
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Max {maxGroupSize} people
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Link
            href={`/tours/${id}`}
            className="inline-block text-center bg-transparent border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 px-4 rounded-md font-medium transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="inline-block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors disabled:opacity-75"
          >
            {isAddingToCart ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
