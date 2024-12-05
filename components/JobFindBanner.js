import Image from "next/image";
import { FaSearch, FaChartLine, FaUserTie, FaSearchPlus, FaMedal, FaLink } from "react-icons/fa";
import Countries from "./Countries";



export default function JobFindBanner() {
  return (
    <div className="flex flex-col lg:flex-row pt-5 px-5 lg:px-10 relative ">
      {/* Search content section */}
      <div className="w-full lg:w-2/3 pt-10 lg:pt-20 relative overflow-hidden">
        {/* Content inside the white section */}
        <div className="relative z-10 container mx-auto flex flex-col items-center lg:items-start">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 mb-4 text-center lg:text-left">
              Your Future <span className="text-blue-900">Starts Here!</span>
            </h1>
            <p className="text-gray-500 mb-6 text-center lg:text-left">
              Explore personalized job opportunities, expert tools, and
              connections with top companies to advance your career with Skill
              Careers.
            </p>
          </div>
        </div>

        <Countries/>

        {/* Searchbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 lg:mb-8 w-full bg-gray-200 rounded-md mt-3">
          <input
            type="text"
            placeholder="Easily find the job you're looking for..."
            className="w-full sm:flex-grow px-4 py-3 lg:py-6 focus:outline-none rounded-md font-semibold placeholder-[#5462A0] bg-gray-200"
          />
                <button className="bg-[#001571] text-white px-7 py-3 mr-2 rounded-md font-semibold w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    <FaSearch className="m-2" />
                    Search
                  </span>
                </button>
        </div>

        <div className="flex flex-col items-start lg:items-start">
          {/* User images and active users section */}
          <div className="flex items-center justify-start lg:justify-start mb-4">
            <div className="flex -space-x-2">
              <Image
                src="/images/people1.jpg"
                alt="User 1"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src="/images/people2.jpg"
                alt="User 2"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src="/images/people3.jpg"
                alt="User 3"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div className="hidden lg:block min-h-30 text-blue-900 font-bold m-3 ">|</div>
            <div className="ml-3 lg:ml-0 ">
              <p className="text-lg lg:text-xl font-semibold text-blue-800">6K+</p>
              <p className="text-blue-800 ">Active Daily Users</p>
            </div>
          </div>

          {/* Features section */}
          <div className="mt-20 flex flex-row lg:flex-row gap-4 lg:space-x-10 text-blue-700">
            <div className="flex items-center space-x-2 ">
              <FaSearch className="w-6 h-6" />
              <p>Advanced Job Search</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMedal className="w-6 h-6" />
              <p>Career Growth Resources</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaLink className="w-6 h-6" />
              <p>Recruiter Connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full lg:w-1/3 flex items-center justify-center  lg:mt-0">
        <Image
          src="/images/landingpagegirl.png"
          alt="girl image"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
