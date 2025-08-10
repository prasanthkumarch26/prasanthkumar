"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Dock, Github } from "lucide-react";

// Carousel.tsx

type Slide = {
  id: number;
  title: string;
  description: string;
  techstack: string;
  image: string;
  githubLink: string;
  liveLink: string;
};

type CarouselProps = {
  projects: Slide[];
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = projects;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-bold">
      <div
        className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`min-w-full h-full relative bg-gradient-to-r from-[#151515] to-[#0e0e0e] flex items-center justify-center`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Content Overlay */}
              <div className="relative z-10 text-center text-[#ccd6f6] px-6 md:px-12 max-w-4xl pt-50">
                <h2 className="text-xl md:text-2xl font-bold transform transition-all duration-700 ease-out">
                  {slide.title}
                </h2>
                {/* <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed text-[#8892b0]">
                  {slide.description}
                </p> */}
                <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed text-red-500">
                  {slide.techstack}
                </p>
                <div className="flex text-center items-center justify-center mt-5 gap-6">
                  <a href={slide.githubLink} className="hover:text-red-500">
                    <Github />
                  </a>
                  <a href={slide.liveLink} className="hover:text-red-500" target="_blank">
                    <Dock />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#ccd6f6]" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#ccd6f6]" />
        </button>
      </div>
      {/* Slide Indicators */}
      <div
        className="relative w-full h-20 rounded-2xl overflow-hidden shadow-2xl group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === index
                  ? "bg-red-500 shadow-lg"
                  : "bg-[#ccd6f6] hover:bg-[#ccd6f6]/90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

{
  /* Progress Bar */
}
{
  /* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div> */
}

{
  /* Carousel Controls */
}
{
  /* <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isAutoPlaying
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>

        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
          {currentSlide + 1} / {slides.length}
        </div>
      </div> */
}

{
  /* Thumbnail Navigation */
}
{
  /* <div className="flex justify-center mt-6 space-x-4 overflow-x-auto pb-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              currentSlide === index
                ? "ring-2 ring-blue-500 scale-110"
                : "opacity-70 hover:opacity-100 hover:scale-105"
            }`}
          >
            <div
              className={`w-full h-full ${slide.bgColor} flex items-center justify-center`}
            >
              <div
                className="w-full h-full bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          </button>
        ))}
      </div> */
}
