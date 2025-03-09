"use client";

import { Tour, findDestinationById, findActivityById } from "@/lib/mockData";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface TourDetailClientProps {
  tour: Tour;
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    addItem({
      id: tour.id,
      title: tour.title,
      price: tour.price,
      imageUrl: tour.imageUrl,
    });

    // Use a timeout to show the "Adding to cart" state briefly
    setTimeout(() => {
      setIsAddingToCart(false);
      // Use client-side navigation to redirect to cart
      router.push("/cart");
    }, 1000);
  };

  // Generate stars for the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= tour.rating
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
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
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero section with tour image and title */}
        <div className="relative h-96">
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${tour.imageUrl})` }}
          />
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {tour.title}
              </h1>
              <div className="mt-6 flex justify-center items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                  {tour.duration}
                </span>
                <div className="flex items-center">
                  <div className="flex mr-1">{renderStars()}</div>
                  <span className="text-white text-sm">
                    ({tour.rating.toFixed(1)})
                  </span>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Max {tour.maxGroupSize} people
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Tour Overview
              </h2>
              <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-6">
                <p className="text-lg">{tour.longDescription}</p>
              </div>

              <h3 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
                Itinerary
              </h3>
              <div className="mt-6 space-y-8">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border-l-4 border-emerald-500 pl-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Day {day.day}: {day.title}
                    </h4>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-emerald-500 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Not Included
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 h-fit sticky top-20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ${tour.price}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">per person</p>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Tour Destinations
                </h4>
                <ul className="mt-2 space-y-1">
                  {tour.destinations.map((destId, index) => {
                    const destination = findDestinationById(destId);
                    return destination ? (
                      <li
                        key={index}
                        className="text-sm text-emerald-600 hover:underline"
                      >
                        <Link href={`/destinations/${destId}`}>
                          {destination.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Activities
                </h4>
                <ul className="mt-2 space-y-1">
                  {tour.activities.map((activityId, index) => {
                    const activity = findActivityById(activityId);
                    return activity ? (
                      <li
                        key={index}
                        className="text-sm text-emerald-600 hover:underline"
                      >
                        <Link href={`/activities/${activityId}`}>
                          {activity.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-3 px-4 rounded-md font-medium transition-colors text-center"
                >
                  {isAddingToCart ? "Adding to Cart..." : "Book This Tour"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
