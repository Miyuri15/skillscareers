import React, { useState, useEffect } from "react";
import Link from "next/link";
import FeaturedJobCard from "../components/FeaturedJobCard";


// Mock data - Add 100 jobs for testing
const jobsData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  companyLogo: "/images/aerfin-logo.png",
  companyName: "AerFin",
  title: "Senior UX/UI Designer",
  location: "New York, NY",
  datePosted: `0${(i % 9) + 1} Jan 2024`,
}));

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        &lt;
      </button>
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-500">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};


export default function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20); // Default for large screens

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4); // Smaller screens
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(18); // Medium screens
      } else {
        setItemsPerPage(20); // Larger screens
      }
    };

    // Call once on component mount
    updateItemsPerPage();

    // Add resize event listener
    window.addEventListener("resize", updateItemsPerPage);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(jobsData.length / itemsPerPage);
  const currentJobs = jobsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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
    <div className="min-h-fit relative">
      <div className="p-5 mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 sm:mb-0">
            Search Results
          </h2>
          <div className="flex flex-wrap justify-start sm:justify-end space-x-2 sm:space-x-4 sm:mr-5">
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">
              Creative
            </button>
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">
              IT/Software
            </button>
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">
              Finance
            </button>
          </div>
        </div>
      </div>
  
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-8">
        {currentJobs.map((job) => (
          <Link key={job.id} href={`/job/${job.id}`}>
            <FeaturedJobCard job={job} />
          </Link>
        ))}
      </div>
  
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}  