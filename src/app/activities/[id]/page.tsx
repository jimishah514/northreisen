import { activities, findActivityById } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ActivityDetailClient from "./ActivityDetailClient";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const activity = findActivityById(resolvedParams.id);
  return {
    title: activity
      ? `${activity.title} - North Pakistan Tourism`
      : "Activity Not Found",
  };
}

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id,
  }));
}

export default async function ActivityDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const activity = findActivityById(resolvedParams.id);

  if (!activity) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Activity not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The activity you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </p>
            <div className="mt-8">
              <Link
                href="/activities"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Back to Activities
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <ActivityDetailClient activity={activity} />;
}
