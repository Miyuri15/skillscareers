import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard';
import Link from 'next/link';


const jobsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  companyLogo: '/images/aerfin-logo.png',
  companyName: 'AerFin',
  title: 'Senior UX/UI Designer',
  location: 'New York, NY',
  datePosted: `0${(i % 9) + 1} Jan 2024`,
}));

const ITEMS_PER_PAGE = 4;


export default function FeaturedJobs() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(jobsData.length / ITEMS_PER_PAGE);
  const currentJobs = jobsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


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
    <div className="p-2 sm:p-4 md:p-6 relative">
      <div className="p-10 flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">Featured Jobs</h2>
        <a href="#" className="text-blue-900 font-bold text-sm sm:text-base">
          View All
          <img
                src="/images/arrow-up.png"
                alt="Login"
                className="h-5 w-5 ml-2"
              />

        </a>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-blue-600" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 sm:space-x-4 scrollbar-hide"
        >
          {/* Cards */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[85%] sm:w-[48%] md:w-[24%] bg-white rounded-lg p-3 sm:p-4 shadow-none"
            >
          {currentJobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`}>
              
                <FeaturedJobCard job={job} />
              
            </Link>
          ))}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-blue-600" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${activeIndex === i ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
