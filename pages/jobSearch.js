import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchResults from "@/components/SearchResults";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export const countries = [
  { value: "", label: "Select the Country", code: "" },
  { value: "US", label: "United States", code: "us" },
  { value: "CA", label: "Canada", code: "ca" },
  { value: "GB", label: "United Kingdom", code: "gb" },
  { value: "FR", label: "France", code: "fr" },
  { value: "DE", label: "Germany", code: "de" },
  { value: "IN", label: "India", code: "in" },
  { value: "AU", label: "Australia", code: "au" },
  { value: "JP", label: "Japan", code: "jp" },
  { value: "CN", label: "China", code: "cn" },
  { value: "BR", label: "Brazil", code: "br" },
  { value: "ZA", label: "South Africa", code: "za" },
  { value: "RU", label: "Russia", code: "ru" },
  { value: "IT", label: "Italy", code: "it" },
  { value: "ES", label: "Spain", code: "es" },
  { value: "MX", label: "Mexico", code: "mx" },
  { value: "NG", label: "Nigeria", code: "ng" },
  { value: "KR", label: "South Korea", code: "kr" },
  { value: "AR", label: "Argentina", code: "ar" },
  { value: "NL", label: "Netherlands", code: "nl" },
  { value: "SE", label: "Sweden", code: "se" },
];

export default function JobSearchPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-200 h-[3900px] sm:h-[5600px] md:h-[5600px] lg:h-[3400px]">
        <div className="relative min-h-screen flex flex-col">
          {/* Image Group as Background */}
          <div className="relative w-full h-[800px]">
            <Image
              src="/images/whiteImage.png"
              alt="White Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <Image
              src="/images/bgLineWide.jpg"
              alt="Background Line Thin"
              width={200}
              height={350}
              className="absolute top-0 right-0 w-auto h-[800px] opacity-5"
            />
            <Image
              src="/images/bgLineThin.jpg"
              alt="Background Line Wide"
              width={200}
              height={350}
              className="absolute top-0 right-80 w-auto h-[800px] opacity-5"
            />
          </div>
          {/* Content */}
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-10">
            <div className="mt-20 mb-12">
              <h2 className="text-4xl text-gray-400 font-bold">
                Find Your<span className="text-blue-900"> Perfect</span> Job.
              </h2>
            </div>
            {/* Search Bar */}
            <div className="bg-gray-300 mb-12 rounded-md p-4">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="Search by job title, keywords, or company."
                  className="bg-gray-300 flex-grow px-4 py-6 focus:outline-none w-full sm:w-[60%] md:w-[45%] lg:w-[30%] rounded-md font-semibold placeholder-[#5462A0]"
                />

                <Countries />

                <button className="bg-[#001571] text-white px-8 py-2 rounded-md font-semibold w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    <FaSearch className="m-2" />
                    Search
                  </span>
                </button>
              </div>
            </div>
            {/* Filters Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Industry</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Experience Level</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Salary Range</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Job Type</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
            </div>
            <SearchResults />
          </div>
        </div>
      </div>
      <Footer className="bottom-0 fixed" />
    </>
  );
}
