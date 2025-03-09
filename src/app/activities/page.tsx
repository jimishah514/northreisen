"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activities } from "@/lib/mockData";
import ActivityCard from "@/components/ActivityCard";
import { useState } from "react";

export default function ActivitiesPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredActivities = filter
    ? activities.filter((activity) => activity.difficulty === filter)
    : activities;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Adventure Activities
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              From thrilling mountain expeditions to cultural immersions,
              discover the wide range of activities that North Pakistan has to
              offer.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === null
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Easy")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Easy"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Easy
            </button>
            <button
              onClick={() => setFilter("Moderate")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Moderate"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Moderate
            </button>
            <button
              onClick={() => setFilter("Challenging")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Challenging"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Challenging
            </button>
            <button
              onClick={() => setFilter("Extreme")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === "Extreme"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Extreme
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                id={activity.id}
                title={activity.title}
                description={activity.description}
                imageUrl={activity.imageUrl}
                duration={activity.duration}
                difficulty={activity.difficulty}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
