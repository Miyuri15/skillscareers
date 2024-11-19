import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchResults from "@/components/SearchResults";
import Image from "next/image";
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

export default function jobSearchPage() {
  return (
    <>
      <Header />
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

      <div className="p-4 md:p-10">
        <div className="mt-20 mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-400 font-bold">
            Find Your<span className="text-blue-900"> Perfect</span> Job.
          </h2>
        </div>

        <div className="bg-[#e6e8f1]  mb-8 rounded-md p-4 relative">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
    {/* Text Input */}
    <input
      type="text"
      placeholder="Search by job title, keywords, or company."
      className="bg-gray-200 flex-grow px-4 py-3 focus:outline-none rounded-md font-semibold placeholder-[#5462A0] w-full sm:w-auto"
    />

    {/* Countries Dropdown */}
    <div className="flex flex-wrap justify-end items-center gap-4  w-full rounded-md">
          <select className="w-full lg:w-auto bg-[#e6e8f1] border-2 border-[#B0B6D3] text-[#5462A0] px-4 py-3 lg:px-20 lg:py-5 font-semibold rounded-md">
            {countries.map((country) => (
              <option key={country.code}>{country.label}</option>
            ))}
          </select>
        </div>

    {/* Search Button */}
    <button className="bg-[#001571] text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto">
    <span className="flex items-center justify-center ">
      <FaSearch className="m-2"/>
                Search
              </span>
    </button>
  </div>
</div>

{/* Filters Section */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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

      <Footer />
    </>
  );
}
