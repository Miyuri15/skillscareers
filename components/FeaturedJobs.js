import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard';

export default function FeaturedJobs() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth / (window.innerWidth >= 768 ? 4 : 1.2);

    if (direction === 'left') {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
      container.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    } else {
      setActiveIndex((prev) => Math.min(prev + 1, container.children.length - (window.innerWidth >= 768 ? 4 : 1)));
      container.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="p-4 md:p-6 relative">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="ml-4 md:ml-10 text-xl md:text-2xl font-bold text-blue-900">Featured Jobs</h2>
        <a href="#" className="text-blue-600 font-semibold mr-4 md:mr-0">
          View All
        </a>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-blue-600" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {/* Cards */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[90%] sm:w-[48%] md:w-[24%] bg-white rounded-lg p-4"
            >
              <FeaturedJobCard />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-blue-600" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${activeIndex === i ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
