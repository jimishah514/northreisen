"use client";

import { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Traveler, USA",
    content:
      "The K2 Base Camp trek was the most challenging and rewarding experience of my life. The guides were knowledgeable, and the scenery was beyond imagination. I'll never forget standing beneath the mighty K2!",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Mohammad Ali",
    role: "Family Vacationer, UAE",
    content:
      "Our family trip to Hunza Valley was perfect. The accommodations were comfortable, the food was delicious, and our children loved exploring the ancient forts. The locals were so welcoming to us.",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Cultural Explorer, UK",
    content:
      "The 'Live Like a Local' experience in Hunza was truly authentic. I learned so much about the culture, from traditional cooking to handicrafts. It wasn't just tourism—it was a meaningful cultural exchange.",
    image: "/images/testimonials/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "John Peterson",
    role: "Cycling Enthusiast, Canada",
    content:
      "Mountain biking along the Karakoram Highway exceeded all my expectations. The support team was excellent, and the route offered the perfect combination of challenge and beauty. Unforgettable.",
    image: "/images/testimonials/testimonial-4.jpg",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer
      id="testimonials"
      title="Happy Travelers"
      subtitle="Hear what our clients have to say about their experiences in North Pakistan"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <svg
                          className="h-8 w-8 text-emerald-500 mb-4 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                          {testimonial.content}
                        </p>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex
                    ? "bg-emerald-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
