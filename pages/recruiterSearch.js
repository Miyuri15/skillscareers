import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecruiterListPage from "@/components/RecruiterList";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function RecruiterSearchPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-200 h-[2600px] sm:h-[3300px] md:h-[3400px] lg:h-[2950px]">
        <div className="relative min-h-screen flex flex-col">
          {/* Image Group as Background */}
          <div className="relative w-full h-[700px]">
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
              className="absolute top-0 right-0 w-auto h-[700px] opacity-5"
            />
            <Image
              src="/images/bgLineThin.jpg"
              alt="Background Line Wide"
              width={200}
              height={350}
              className="absolute top-0 right-80 w-auto h-[700px] opacity-5"
            />
          </div>
          {/* content */}
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-20">
            <div className="mt-20 mb-12">
              <h2 className="text-4xl text-[#8A93BE] font-bold font-sans">
                Find Your<span className="text-[#001571]"> Perfect</span> Recruiter.
              </h2>
            </div>
            {/* Search bar */}
            <div className="bg-[#E6E8F1] h-auto mb-12 rounded-md">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="Easily find the Recruiters you’re looking for..."
                  className="bg-[#E6E8F1] flex-grow px-4 py-6 focus:outline-none w-full sm:w-[60%] md:w-[45%] lg:w-[30%] rounded-md font-semibold placeholder-[#5462A0]"
                />
                <button className="bg-[#001571] text-white px-6 py-3 mr-2 rounded-md font-semibold w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    <FaSearch className="m-2" />
                    Search
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 flex flex-wrap justify-center gap-4 mb-8">
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Industry Specialist</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Employee Range</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="bg-[#001571] w-full text-white px-4 py-4 rounded-lg appearance-none">
                  <option>Job Types</option>
                </select>
                <img
                  src="/images/arrow-down.png"
                  alt="Arrow Down"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
            </div>{" "}
            {/* content */}
            <RecruiterListPage />
          </div>
        </div>
      </div>
      <Footer className="bottom-0 fixed"/>
    </>
  );
}
