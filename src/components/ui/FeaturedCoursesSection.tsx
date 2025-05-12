import React from "react";
import Image from "next/image";
import Link from "next/link";

type FeaturedCourse = {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
};

type FeaturedCoursesSectionProps = {
  courses: FeaturedCourse[];
};

const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({ courses }) => (
  <section className="py-24 sm:py-32 bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-wide font-sans"
          tabIndex={0}
          aria-level={2}
        >
          Nos cours phares
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-700">
          Des programmes variés pour tous les niveaux et tous les objectifs
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="flex flex-col items-start bg-white rounded-2xl shadow-md ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-orange-500 transition"
            tabIndex={-1}
            aria-label={`Cours : ${course.title}`}
          >
            <div className="relative w-full">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                priority={false}
              />
            </div>
            <div className="max-w-xl w-full p-6">
              <div className="flex items-center gap-x-4 text-xs mb-2">
                <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700 border border-orange-300">
                  {course.duration}
                </span>
                <span className="inline-flex items-center rounded-full bg-black px-2 py-1 text-xs font-semibold text-white border border-orange-500">
                  {course.level}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-2 text-lg font-bold leading-6 text-black group-hover:text-orange-600 focus-visible:text-orange-600 focus:outline-none">
                  <Link
                    href={`/cours/${course.id}`}
                    aria-label={`Voir le cours ${course.title}`}
                    tabIndex={0}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    <span className="absolute inset-0" />
                    {course.title}
                  </Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-700">{course.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export { FeaturedCoursesSection }; 