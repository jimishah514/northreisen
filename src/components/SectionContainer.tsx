import { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
};

export default function SectionContainer({
  id,
  title,
  subtitle,
  className = "",
  children,
  bgColor = "bg-white dark:bg-gray-900",
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
