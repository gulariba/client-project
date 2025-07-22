"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trendingProducts } from "../lib/trendingProduct";

export default function TrendingHeroStyleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = trendingProducts.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const product = trendingProducts[currentIndex];

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl w-full relative">
        {/* Card */}
        <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center gap-10 transition-all duration-500">
          
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] rounded-xl overflow-hidden group shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-xl" />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-red-500 drop-shadow-lg">
              {product.name}
            </h2>
            <p className="text-lg text-gray-200 font-medium">
              Rs. {product.price.toLocaleString()}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? "fill-current"
                      : "fill-none stroke-current"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-300">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href={`/product/${product.id}`}
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-base font-semibold transition duration-300 shadow-md"
            >
              View Product
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-red-700 text-white p-3 rounded-full z-40 shadow-md transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-red-700 text-white p-3 rounded-full z-40 shadow-md transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {trendingProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-red-600 scale-110 shadow"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
