import React, { useState } from "react";
import Link from "next/link";
import FeaturedJobCard from "../components/FeaturedJobCard";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaArrowAltCircleLeft,
  FaArrowCircleLeft,
  FaArrowLeft,
} from "react-icons/fa";

const jobsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  companyLogo: "/images/aerfin-logo.png",
  companyName: "AerFin",
  title: "Senior UX/UI Designer",
  location: "New York, NY",
  datePosted: `0${(i % 9) + 1} Jan 2024`,
}));

const ITEMS_PER_PAGE = 4;

export default function SimilarJobs() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobsData.length / ITEMS_PER_PAGE);
  const currentJobs = jobsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-7 bg-gray-50 min-h-fit relative">
      <div className=" p-2 max-w-full mx-auto">
      <div className="pt-20 px-10 flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">
          Similar Jobs
        </h2>
        <a
          href="/jobSearch"
          className="text-blue-900 mb-10 font-bold text-sm sm:text-base flex items-center"
        >
          View All
          <img
            src="/images/arrowBlue.png"
            alt="View All"
            className="h-5 w-5 ml-2"
          />
        </a>
      </div>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`absolute left-3 text-blue-900 hover:text-blue-700 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous page"
          >
            <FaAngleLeft className="text-5xl" />
          </button>
          {/* Job Cards */}
          <div className="pl-10 pr-10 w-full grid grid-cols-1 sm:grid-cols-1 sm:px-20 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentJobs.map((job) => (
              <Link key={job.id} href={`/job/${job.id}`}>
                <FeaturedJobCard job={job} />
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`absolute right-0 z-10 px-4 py-2 text-blue-800 rounded-full hover:text-blue-700 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next page"
          >
            <FaAngleRight className="text-5xl" />
            </button>
        </div>

        {/* Bullets for Page Indicators */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`mb-4 w-3 h-3 rounded-full ${
                currentPage === index + 1 ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
