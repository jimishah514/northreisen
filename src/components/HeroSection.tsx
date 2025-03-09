"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results page with the query
      // For now, we'll redirect to one of our main pages
      if (
        searchQuery.toLowerCase().includes("destination") ||
        searchQuery.toLowerCase().includes("place")
      ) {
        router.push("/destinations");
      } else if (
        searchQuery.toLowerCase().includes("tour") ||
        searchQuery.toLowerCase().includes("package")
      ) {
        router.push("/tours");
      } else if (
        searchQuery.toLowerCase().includes("activity") ||
        searchQuery.toLowerCase().includes("adventure")
      ) {
        router.push("/activities");
      } else {
        // Default to destinations if no specific keywords are found
        router.push("/destinations");
      }
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background image - in production, use a real image of North Pakistan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg')",
        }}
      />
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            <span className="block">Discover the Beauty of</span>
            <span className="block text-emerald-400">North Pakistan</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl max-w-xl mx-auto">
            Experience breathtaking landscapes, rich culture, and unforgettable
            adventures in the majestic mountains of Northern Pakistan.
          </p>
          <div className="mt-8 sm:mt-10">
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search destinations, activities, or tours..."
                  className="flex-grow py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 py-3 px-6 rounded-r-lg text-white font-medium transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/destinations"
              className="inline-block bg-white text-emerald-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Destinations
            </Link>
            <Link
              href="/tours"
              className="inline-block bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              View Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
