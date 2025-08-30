"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/img-7.jpg", // replace with your actual image paths
  "/img-5.jpg",
  "/img-6.jpg",
  "/img-4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Fade Animation */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Become <br /> the best version of yourself
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl">
         Make remarkable progress towards becoming you.
        </p>
        <Link
          href="/start"
          className="mt-8 bg-white text-gray-800 rounded-full py-3 px-6 font-semibold hover:bg-gray-100 transition"
        >
          Start now
        </Link>
      </div>
    </section>
  );
}
