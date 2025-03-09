import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CuisinePage() {
  // In a real application, this would be fetched from a database
  const cuisines = [
    {
      id: 1,
      name: "Chapshuro",
      origin: "Hunza, Gilgit-Baltistan",
      description:
        "A traditional bread stuffed with minced meat, herbs, and spices. It's pan-fried until crispy on the outside and juicy on the inside.",
      image: "/images/cuisine/chapshuro.jpg",
    },
    {
      id: 2,
      name: "Dowdo",
      origin: "Baltistan",
      description:
        "A hearty soup made with yogurt, wheat flour, and local herbs. Often served with apricot oil, it's a staple during cold winter months.",
      image: "/images/cuisine/dowdo.jpg",
    },
    {
      id: 3,
      name: "Mantu",
      origin: "Gilgit-Baltistan",
      description:
        "Steamed dumplings filled with spiced minced meat and onions, topped with yogurt and dried mint. A delicious Central Asian influence.",
      image: "/images/cuisine/mantu.jpg",
    },
    {
      id: 4,
      name: "Sharbat e Toot",
      origin: "Various regions",
      description:
        "A refreshing mulberry drink that's popular during summer months. Made from fresh mulberries that grow abundantly in the northern areas.",
      image: "/images/cuisine/sharbat-toot.jpg",
    },
    {
      id: 5,
      name: "Harissa",
      origin: "Chitral",
      description:
        "A slow-cooked dish of wheat and meat, pounded to a paste-like consistency. Rich, hearty, and traditionally served during celebrations.",
      image: "/images/cuisine/harissa.jpg",
    },
    {
      id: 6,
      name: "Mamtu",
      origin: "Hunza, Gilgit-Baltistan",
      description:
        "Hand-rolled pasta made from buckwheat flour, served with a walnut sauce and topped with local cheese. A unique Hunza specialty.",
      image: "/images/cuisine/mamtu.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Local Cuisine
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Discover the unique flavors and traditional dishes of North
              Pakistan, where every meal tells a story of culture and heritage.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    Cuisine Image
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cuisine.name}
                  </h3>
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
                      Origin: {cuisine.origin}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cuisine.description}
                  </p>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                    Learn More
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
