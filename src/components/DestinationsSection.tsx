"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import SectionContainer from "./SectionContainer";
import { destinations } from "@/lib/mockData";

export default function DestinationsSection() {
  const [visibleDestinations, setVisibleDestinations] = useState(4); // Show 4 by default

  const loadMore = () => {
    setVisibleDestinations((prev) => Math.min(prev + 4, destinations.length));
  };

  return (
    <SectionContainer
      id="destinations"
      title="Popular Destinations"
      subtitle="Explore the breathtaking landscapes and cultural treasures of North Pakistan"
      bgColor="bg-gray-100 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.slice(0, visibleDestinations).map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            title={destination.title}
            description={destination.description}
            imageUrl={destination.imageUrl}
            location={destination.location}
          />
        ))}
      </div>

      {visibleDestinations < destinations.length && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Load More Destinations
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
