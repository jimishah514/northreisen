import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
};

export default function DestinationCard({
  id,
  title,
  description,
  imageUrl,
  location,
}: DestinationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 sm:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
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
            {location}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          href={`/destinations/${id}`}
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
