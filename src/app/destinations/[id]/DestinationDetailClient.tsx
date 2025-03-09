"use client";

import { Destination } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface DestinationDetailClientProps {
  destination: Destination;
}

export default function DestinationDetailClient({
  destination,
}: DestinationDetailClientProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero section with destination image and title */}
        <div className="relative h-96">
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${destination.imageUrl})` }}
          />
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {destination.title}
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                {destination.location}
              </p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                About {destination.title}
              </h2>
              <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-6">
                <p className="text-lg">{destination.longDescription}</p>
              </div>

              <h3 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
                Highlights
              </h3>
              <ul className="mt-6 space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-emerald-500"
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
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Travel Information
              </h3>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Best Time to Visit
                </h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {destination.bestTimeToVisit}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  How to Reach
                </h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {destination.howToReach}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/tours"
                  className="block w-full bg-emerald-600 border border-transparent rounded-md py-3 px-4 font-medium text-white text-center hover:bg-emerald-700"
                >
                  Explore Tours to {destination.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
