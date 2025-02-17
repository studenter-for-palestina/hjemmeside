import React, { useState } from "react";
import { imageSliderContent } from "../../config.js";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSliderContent.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSliderContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative w-full pt-6" data-carousel="slide">
      <div className="relative min-h-72 max-h-96  overflow-hidden rounded-lg md:h-96">
        {imageSliderContent.map((subItem, index) => (
          <div
          key={index}
          className={`absolute inset-0 transition-opacity mx-auto md:w-[40%] duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          data-carousel-item={index === currentIndex ? "active" : ""}
        >
            <a href={subItem.link} className="relative  block h-full">
              <img
                src={subItem.image}
                className="absolute block w-full md:min-w-[35%] h-auto hover:opacity-55  transition-all duration-200 ease-in-out "
                alt={`Slide ${index + 1}`}
                loading="lazy"
            />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center
                              w-full md:max-w-[85%] px-4 py-2 bg-black bg-opacity-50 text-white rounded-lg">
                <p className="text-xl font-semibold">{subItem.text}</p>
              </div>
            </a>
          </div>))}

        {/* Previous Button */}
        <button
          type="button"
          aria-label="previous image"
          className="absolute top-1/2 left-1 md:left-1/4 z-30 flex items-center justify-center w-10 h-10 bg-white rounded-full group hover:bg-gray-800/60 ring-2 ring-black transition-all duration-200 ease-in-out"
          onClick={goToPrevious}
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          aria-label = "next image"
          className="absolute top-1/2 right-1 md:right-1/4 z-30 flex items-center justify-center w-10 h-10 bg-white rounded-full group hover:bg-gray-800/60 ring-2 ring-black transition-all duration-200 ease-in-out"
          onClick={goToNext}
        >
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
