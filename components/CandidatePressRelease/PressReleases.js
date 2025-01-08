import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import PressCard from "./PressCard";

export default function PressReleases() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;
  const router = useRouter();

  // Handle the click for the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle the click for the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Function to navigate to the ViewPressRelease component with the relevant ID
  const handleCardClick = (id) => {
    router.push(`/candidate/pressRelease/viewPressRelease/${id}`);
  };

  // Function to generate the press cards for the current page
  const renderPressCards = () => {
    const cardsPerPage = 8; // 4 cards per row * 2 rows
    const startIndex = (currentPage - 1) * cardsPerPage;

    return Array.from({ length: cardsPerPage }, (_, index) => {
      const id = startIndex + index + 1; // Generate a unique ID
      return (
        <PressCard
          key={id}
          onClick={() => handleCardClick(id)} // Pass the ID to the click handler
        />
      );
    });
  };

  // Function to get the visible page numbers for pagination
  const getVisiblePages = () => {
    const visibleRange = 2; // Number of pages to show before and after the current page
    let startPage = Math.max(currentPage - visibleRange, 1);
    let endPage = Math.min(currentPage + visibleRange, totalPages);

    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(startPage + 4, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(endPage - 4, 1);
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  // Handle the page number click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col p-6 bg-white rounded-xl">
        {/* Page Title */}
          <h2 className="text-[#001571] text-xl font-bold mb-6">Press Releases</h2>

        {/* Search Bar */}
        <div className="bg-gray-100 flex items-center rounded-xl px-6 py-4 mb-4 shadow">
          <Image
            src="/images/search.png"
            alt="search"
            width={20}
            height={20}
            className="mx-3"
          />
          <input
            type="text"
            placeholder="Search Press releases..."
            className="flex-grow text-gray-600 outline-none bg-transparent"
          />
        </div>

        {/* Press Cards Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {renderPressCards()}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 items-center space-x-2">
          <button
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-200"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &laquo; {/* Left Arrow */}
          </button>
          {getVisiblePages().map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                currentPage === page
                  ? "text-[#001571]"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-200"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &raquo; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </>
  );
}
