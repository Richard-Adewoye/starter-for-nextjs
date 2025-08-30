import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface Testimonial {
  quote: React.ReactNode; // JSX for responsive line breaks
  source: string;
  image: string;
}


// Testimonials with responsive line breaks
const testimonials: Testimonial[] = [
  {
    quote: (
      <>
        <span className="block">Thriving begins</span>
        <span className="block sm:inline"> where self-compassion</span>
        <span className="block"> meets ambition</span>
      </>
    ),
    source: " ",
    image: "/tb1.jpg",
  },
  {
    quote: (
      <>
        <span className="block">You are enough, exactly as you are.</span>
        <span className="block sm:inline"> And you are also capable of so much more.</span>
      </>
    ),
    source: " ",
    image: "/tb1.jpg",
  },
  {
    quote: (
      <>
        <span className="block">The truest form of power</span>
        <span className="block sm:inline"> is the gentle courage to be yourself.</span>
      </>
    ),
    source: " ",
    image: "/tb1.jpg",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // rotate every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start text-left text-white overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/tb1.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-[50%_10%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Block */}
      <div className="max-w-3xl px-4 sm:px-6 md:px-8 space-y-6 ml-0 md:ml-6 lg:ml-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {testimonials[activeIndex].quote}
            </p>
            {testimonials[activeIndex].source && (
              <span className="text-red-600 font-bold uppercase text-lg sm:text-xl">
                {testimonials[activeIndex].source}
              </span>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-start space-x-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full border-2 transition ${
                activeIndex === index
                  ? "bg-white border-white"
                  : "border-white bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
