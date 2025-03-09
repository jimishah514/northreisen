import { destinations, findDestinationById } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import DestinationDetailClient from "./DestinationDetailClient";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const destination = findDestinationById(resolvedParams.id);
  return {
    title: destination
      ? `${destination.title} - North Pakistan Tourism`
      : "Destination Not Found",
  };
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const destination = findDestinationById(resolvedParams.id);

  if (!destination) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Destination not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The destination you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </p>
            <div className="mt-8">
              <Link
                href="/destinations"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Back to Destinations
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <DestinationDetailClient destination={destination} />;
}
