"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Luxury That Embraces You",
    subtitle: "Elegant undergarments crafted with precision & love for the modern woman.",
    image: "/slide1.jpg",
    btnLink: "/collections",
    btnText: "Discover Now",
  },
  {
    id: 2,
    title: "Bridal Elegance Starts Here",
    subtitle: "Bridal lingerie that redefines your special day with timeless beauty.",
    image: "/slide2.jpeg",
    btnLink: "/collections/bridalwear",
    btnText: "Shop Bridal",
  },
  {
    id: 3,
    title: "Sensual Nights, Stylish Dreams",
    subtitle: "Curated lingerie that celebrates comfort, confidence & romance.",
    image: "/slide3.jpg",
    btnLink: "/collections/lingerie",
    btnText: "Explore Lingerie",
  },
 
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Background Image with subtle overlay */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover brightness-[0.65]"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10 text-center z-30">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 tracking-tight text-red-600 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-gray-200 mb-8 font-light tracking-wide">
                {slide.subtitle}
              </p>
              <Link
                href={slide.btnLink}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-base md:text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                {slide.btnText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-3 rounded-full text-white transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-3 rounded-full text-white transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              currentIndex === idx
                ? "bg-red-600 border-red-600 scale-110"
                : "border-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
