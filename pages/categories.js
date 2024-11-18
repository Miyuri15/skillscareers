import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

// Function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100"> {/* Set minimum height for full screen */}
        <div className="relative">
          <Image
            src="/images/bgLineWide.jpg"
            alt="line"
            width={100}
            height={30}
            className="absolute top-0 right-0 w-fit h-[500px] object-cover z-0 opacity-5 items-end"
          />

          <Image
            src="/images/bgLineThin.jpg"
            alt="line"
            width={200}
            height={500}
            className="absolute top-0 right-20 w-fit h-[500px] object-cover z-0 opacity-5 items-end"
          />
        </div>

        {/* Search Banner */}
        <div className="p-10 relative">
          <div className="mt-20 mb-12"></div>
          <div className="bg-gray-300 h-auto mb-12 p-4 rounded-md">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Easily find the category you’re looking for..."
                className="bg-gray-300 flex-grow px-4 py-6 focus:outline-none w-full rounded-md sm:w-auto font-semibold placeholder-[#5462A0]"
              />
              <button className="bg-[#001571] text-white px-14 py-5 rounded-md font-semibold w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="p-10 mb-10 relative">
          {[...Array(5)].map((_, rowIndex) => (
            <div
              key={`${currentPage}-${rowIndex}`}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6"
            >
              {shuffleArray([...categories]).map((category) => (
                <div
                  key={category.id}
                  className="text-center border p-5 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow aspect-square flex flex-col justify-center"
                >
                  <Image
                    src={category.icon}
                    alt={category.label}
                    width={50}
                    height={20}
                    className="mx-auto mb-4"
                  />
                  <p className="text-blue-900 font-semibold">{category.label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
