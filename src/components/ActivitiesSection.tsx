"use client";

import { useState } from "react";
import ActivityCard from "./ActivityCard";
import SectionContainer from "./SectionContainer";
import { activities } from "@/lib/mockData";

export default function ActivitiesSection() {
  const [visibleActivities, setVisibleActivities] = useState(4); // Show 4 by default
  const [filter, setFilter] = useState<string | null>(null);

  const filteredActivities = filter
    ? activities.filter((activity) => activity.difficulty === filter)
    : activities;

  const loadMore = () => {
    setVisibleActivities((prev) =>
      Math.min(prev + 4, filteredActivities.length)
    );
  };

  return (
    <SectionContainer
      id="activities"
      title="Adventure Activities"
      subtitle="Experience the thrill of adventure in the majestic mountains of North Pakistan"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            setFilter(null);
            setVisibleActivities(4);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            filter === null
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("Easy");
            setVisibleActivities(4);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            filter === "Easy"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Easy
        </button>
        <button
          onClick={() => {
            setFilter("Moderate");
            setVisibleActivities(4);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            filter === "Moderate"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Moderate
        </button>
        <button
          onClick={() => {
            setFilter("Challenging");
            setVisibleActivities(4);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            filter === "Challenging"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Challenging
        </button>
        <button
          onClick={() => {
            setFilter("Extreme");
            setVisibleActivities(4);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            filter === "Extreme"
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Extreme
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.slice(0, visibleActivities).map((activity) => (
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

      {visibleActivities < filteredActivities.length && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Load More Activities
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
