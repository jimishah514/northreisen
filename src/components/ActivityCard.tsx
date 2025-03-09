import Image from "next/image";
import Link from "next/link";

type ActivityCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme";
};

export default function ActivityCard({
  id,
  title,
  description,
  imageUrl,
  duration,
  difficulty,
}: ActivityCardProps) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-blue-100 text-blue-800",
    Challenging: "bg-orange-100 text-orange-800",
    Extreme: "bg-red-100 text-red-800",
  }[difficulty];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 sm:h-64">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            <svg
              className="mr-1.5 h-2 w-2 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {duration}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColor}`}
          >
            <svg
              className="mr-1.5 h-2 w-2"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          href={`/activities/${id}`}
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
