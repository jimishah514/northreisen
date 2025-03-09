import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinations } from "@/lib/mockData";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Explore North Pakistan Destinations
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Discover breathtaking landscapes, ancient cultures, and
              unforgettable adventures across the majestic regions of Northern
              Pakistan.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
