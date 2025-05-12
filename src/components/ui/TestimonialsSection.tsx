"use client";

import React from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar?: string;
  company?: string;
  rating?: number;
  date?: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
  <section className="bg-black py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide font-sans"
          tabIndex={0}
          aria-level={2}
        >
          Témoignages
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          Découvrez les expériences de nos clients et partenaires qui ont transformé leur vision en réalité avec nous.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 shadow-lg ring-1 ring-gray-800 hover:ring-orange-500/50 focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-300"
            tabIndex={0}
            aria-label={`Témoignage de ${testimonial.author}`}
          >
            <div className="relative">
              <svg
                className="absolute -top-4 -left-4 h-8 w-8 text-orange-500/20"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg leading-7 text-white relative z-10">{testimonial.content}</p>
            </div>
            <div className="mt-6 flex items-center gap-x-4">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500/20"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-orange-500/20">
                  <span className="text-xl font-semibold text-orange-500">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <div className="font-semibold text-orange-500">{testimonial.author}</div>
                <div className="text-sm text-gray-300">{testimonial.role}</div>
                {testimonial.company && (
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                )}
                {testimonial.date && (
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                )}
                {testimonial.rating && (
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating! ? "text-orange-500" : "text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { TestimonialsSection }; 