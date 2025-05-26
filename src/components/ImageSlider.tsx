"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/slider1.png",
  "/slider1.png",
  "/slider1.png",
  "/slider1.png",
  "/slider1.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

useEffect(() => {
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
  });
}, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;

      setIsTransitioning(true);
      setNextIndex(index);

      // Shorter transition time
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300); 
    },
    [currentIndex, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-250 ease-linear ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Next Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-250 ease-linear ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={images[nextIndex]}
          alt={`Slide ${nextIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white w-5"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
