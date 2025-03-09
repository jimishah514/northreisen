"use client";

import { useState } from "react";
import TourCard from "./TourCard";
import SectionContainer from "./SectionContainer";
import { tours } from "@/lib/mockData";
import { useCart } from "@/lib/CartContext";

export default function ToursSection() {
  const [visibleTours, setVisibleTours] = useState(3); // Show 3 by default
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredTours = activeCategory
    ? tours.filter((tour) => tour.category === activeCategory)
    : tours;

  const loadMore = () => {
    setVisibleTours((prev) => Math.min(prev + 3, filteredTours.length));
  };

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
    <SectionContainer
      id="tours"
      title="Featured Tours"
      subtitle="Discover our carefully curated tour packages for the ultimate North Pakistan experience"
      bgColor="bg-gray-100 dark:bg-gray-800"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            setActiveCategory(null);
            setVisibleTours(3);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === null
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          All Tours
        </button>
        <button
          onClick={() => {
            setActiveCategory("adventure");
            setVisibleTours(3);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === "adventure"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Adventure
        </button>
        <button
          onClick={() => {
            setActiveCategory("cultural");
            setVisibleTours(3);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === "cultural"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Cultural
        </button>
        <button
          onClick={() => {
            setActiveCategory("family");
            setVisibleTours(3);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === "family"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Family
        </button>
        <button
          onClick={() => {
            setActiveCategory("native-experience");
            setVisibleTours(3);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === "native-experience"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Native Experience
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.slice(0, visibleTours).map((tour) => (
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

      {visibleTours < filteredTours.length && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Load More Tours
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
