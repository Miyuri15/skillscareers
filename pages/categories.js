

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Categories() {
  const categories = [
    { id: 1, label: "Creative & Design", icon: "/images/creativeIdea.png" },
    { id: 2, label: "Education & Training", icon: "/images/educationTraining.png" },
    { id: 3, label: "Technology & Development", icon: "/images/technologyDevelopment.png" },
    { id: 4, label: "Operations & Logistics", icon: "/images/operationsLogistics.png" },
    { id: 5, label: "Marketing & Sales", icon: "/images/marketingSales.png" },
  ];

  const totalPages = 6; // Number of pages
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}



  return (
    <>
      <Header />
      <div className="bg-gray-200 h-[1300px] sm:h-[4700px] md:h-[2700px] lg:h-[2000px]">
        <div className="relative min-h-screen flex flex-col">
          {/* Image Group as Background */}
          <div className="relative w-full h-[500px]">
            {/* White Image */}
            <Image
              src="/images/whiteImage.png"
              alt="White Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            {/* Overlay Images */}
            <Image
              src="/images/bgLineWide.jpg"
              alt="Background Line Thin"
              width={200}
              height={350}
              className="absolute top-0 right-0 w-auto h-[500px] opacity-5"
            />
            <Image
              src="/images/bgLineThin.jpg"
              alt="Background Line Wide"
              width={200}
              height={350}
              className="absolute top-0 right-80 w-auto h-[500px] opacity-5"
            />
          </div>

          {/* Content Section */}
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-10">
            <div className="mt-10 mb-12">
              <h2 className="text-3xl sm:text-4xl text-gray-400 font-bold">
                Search for Job<span className="text-blue-900"> Categories</span>
              </h2>
              <p className="text-gray-500 mt-5">
                Explore the diverse range of job categories to find the perfect
                fit for your skills and interests.
              </p>
            </div>

            {/* Search bar */}
            <div className="bg-gray-300 h-auto mb-12 rounded-md">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="Easily find the category you’re looking for..."
                  className="bg-gray-300 flex-grow px-4 py-6 focus:outline-none w-full sm:w-[60%] md:w-[45%] lg:w-[30%] rounded-md font-semibold placeholder-[#5462A0]"
                />
                <button className="bg-[#001571] text-white px-4 py-5 rounded-md font-semibold w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    <FaSearch className="m-2" />
                    Search
                  </span>
                </button>
              </div>
            </div>

            {/* Category section */}
            <div className="p-4 sm:p-6 md:p-10 flex-grow">
              {[...Array(5)].map((_, rowIndex) => (
                <div
                  key={`${currentPage}-${rowIndex}`}
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6"
                >
                  {shuffleArray(categories).map((category) => (
                    <div
                      key={category.id}
                      className="text-center border p-5 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow aspect-square flex flex-col justify-center"
                    >
                      <Image
                        src={category.icon}
                        alt={category.label}
                        width={50}
                        height={50}
                        className="mx-auto mb-4"
                      />
                      <p className="text-blue-900 font-semibold">{category.label}</p>
                    </div>
                  ))}
                </div>
              ))}

              {/* Pagination section */}
              <div className="flex justify-center mt-10 sm:mt-12">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 ${currentPage === 1 ? "text-gray-400" : "text-blue-500"} cursor-pointer`}
                  >
                    {"<"}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 ${currentPage === i + 1 ? "text-blue-900 font-bold" : "text-gray-500"} cursor-pointer`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 ${currentPage === totalPages ? "text-gray-400" : "text-blue-500"} cursor-pointer`}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0 w-full" />
    </>
  );
}
