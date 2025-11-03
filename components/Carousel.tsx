import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface CarouselItem {
  image: React.ReactNode;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] group">
      <div className="w-full h-full rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden relative">
        <div 
            className="flex transition-transform ease-in-out duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center justify-center p-8 md:p-12 bg-black/10">
                {item.image}
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">{item.title}</h3>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Left Arrow */}
        <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-3 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            aria-label="Previous slide"
        >
            <ChevronLeftIcon />
        </button>
        {/* Right Arrow */}
        <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-3 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            aria-label="Next slide"
        >
            <ChevronRightIcon />
        </button>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {items.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-[var(--color-primary)] scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                ></button>
            ))}
        </div>
    </div>
  );
};