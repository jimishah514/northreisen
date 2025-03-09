"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                North Pakistan
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Destinations
              </Link>
              <Link
                href="/activities"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Activities
              </Link>
              <Link
                href="/accommodation"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Accommodation
              </Link>
              <Link
                href="/cuisine"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Cuisine
              </Link>
              <Link
                href="/tours"
                className="border-transparent text-gray-900 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Tours
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/cart"
              className="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Destinations
            </Link>
            <Link
              href="/activities"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Activities
            </Link>
            <Link
              href="/accommodation"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Accommodation
            </Link>
            <Link
              href="/cuisine"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Cuisine
            </Link>
            <Link
              href="/tours"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Tours
            </Link>
            <Link
              href="/cart"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
