"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      tabIndex={0}
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero_vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background video showing gym activities"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide text-center mb-6 font-sans" style={{ letterSpacing: "0.05em" }}>
          DISICK TRAINING CENTER
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium text-center mb-12 max-w-3xl tracking-wide">
          Transformez votre corps et votre esprit avec nos programmes d&apos;entraînement personnalisés et notre équipe d&apos;experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/packages" 
            tabIndex={0} 
            aria-label="Découvrir nos abonnements"
            className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500 px-8 py-4 text-lg"
          >
            DÉCOUVRIR NOS ABONNEMENTS
          </a>
          <a 
            href="/contact" 
            tabIndex={0} 
            aria-label="Nous contacter"
            className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-white text-white hover:text-orange-500 hover:border-orange-500 focus-visible:ring-orange-500 px-8 py-4 text-lg"
          >
            NOUS CONTACTER
          </a>
        </div>
      </div>
    </section>
  );
};

export { Hero }; 