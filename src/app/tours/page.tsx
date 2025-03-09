"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tours } from "@/lib/mockData";
import TourCard from "@/components/TourCard";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredTours = activeCategory
    ? tours.filter((tour) => tour.category === activeCategory)
    : tours;

  const handleAddToCart = (tourId: string) => {
    const tour = tours.find((t) => t.id === tourId);
    if (tour) {
      addItem({
        id: tour.id,
        title: tour.title,
        price: tour.price,
        imageUrl: tour.imageUrl,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Tour Packages
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Explore our carefully curated tour packages designed to provide
              you with the ultimate North Pakistan experience.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === null
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              All Tours
            </button>
            <button
              onClick={() => setActiveCategory("adventure")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === "adventure"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Adventure
            </button>
            <button
              onClick={() => setActiveCategory("cultural")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === "cultural"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Cultural
            </button>
            <button
              onClick={() => setActiveCategory("family")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === "family"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Family
            </button>
            <button
              onClick={() => setActiveCategory("native-experience")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === "native-experience"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Native Experience
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                description={tour.description}
                imageUrl={tour.imageUrl}
                price={tour.price}
                duration={tour.duration}
                rating={tour.rating}
                maxGroupSize={tour.maxGroupSize}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
