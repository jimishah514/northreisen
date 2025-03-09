import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccommodationPage() {
  // In a real application, this would be fetched from a database
  const accommodations = [
    {
      id: 1,
      name: "Serena Hotel Hunza",
      location: "Karimabad, Hunza Valley",
      description:
        "Luxury hotel with stunning views of the Hunza Valley and surrounding mountains. Features traditional architecture with modern amenities.",
      priceRange: "$$$",
      image: "/images/accommodations/serena-hunza.jpg",
    },
    {
      id: 2,
      name: "Shangrila Resort",
      location: "Lower Kachura Lake, Skardu",
      description:
        "Iconic resort situated beside the stunning Lower Kachura Lake, featuring beautiful Chinese-inspired architecture and gardens.",
      priceRange: "$$$",
      image: "/images/accommodations/shangrila.jpg",
    },
    {
      id: 3,
      name: "Eagle's Nest Hotel",
      location: "Duikar, Hunza",
      description:
        "Perched on a hilltop offering panoramic views of Hunza Valley and the Karakoram Range. Perfect for sunrise and sunset views.",
      priceRange: "$$",
      image: "/images/accommodations/eagles-nest.jpg",
    },
    {
      id: 4,
      name: "Hotel One Swat",
      location: "Mingora, Swat Valley",
      description:
        "Modern hotel in the heart of Swat Valley with comfortable rooms and all essential amenities for travelers.",
      priceRange: "$$",
      image: "/images/accommodations/hotel-one-swat.jpg",
    },
    {
      id: 5,
      name: "Fairy Meadows Cottages",
      location: "Fairy Meadows, Nanga Parbat Base",
      description:
        "Rustic wooden cottages with breathtaking views of Nanga Parbat. Basic amenities but unparalleled natural setting.",
      priceRange: "$$",
      image: "/images/accommodations/fairy-meadows.jpg",
    },
    {
      id: 6,
      name: "Hunza Eco Homestay",
      location: "Gulmit, Upper Hunza",
      description:
        "Traditional family homestay offering authentic cultural experience with home-cooked meals and local hospitality.",
      priceRange: "$",
      image: "/images/accommodations/homestay.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Where to Stay
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              From luxury hotels to authentic homestays, find the perfect
              accommodation for your North Pakistan adventure.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    Accommodation Image
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {accommodation.name}
                    </h3>
                    <span className="text-emerald-600 font-medium">
                      {accommodation.priceRange}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {accommodation.location}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {accommodation.description}
                  </p>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
