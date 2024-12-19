import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";

export default function RecruiterListPage() {
  const recruiters = [
    {
      id: 1,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
      "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-6 h-6" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-6 h-6" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-6 h-6" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-6 h-6" />, url: "#" },
      ],
    },
    {
      id: 2,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
    {
      id: 3,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
    {
      id: 4,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
    {
      id: 7,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
    {
      id: 8,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
  ];

  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // For small screens (sm)
      } else {
        setItemsPerPage(4); // For medium and larger screens
      }
    };

    updateItemsPerPage(); // Initial check
    window.addEventListener("resize", updateItemsPerPage); // Listen to resize events

    return () => window.removeEventListener("resize", updateItemsPerPage); // Cleanup
  }, []);

  const totalPages = Math.ceil(recruiters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecruiters = recruiters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="p-10 sm:p-10 min-h-fit">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-5">
          Search Results
        </h2>
        <p className="text-blue-900 font-semibold">145 Results</p>
      </div>

      {/* Recruiter List */}
      <div className="space-y-6">
        {currentRecruiters.map((recruiter) => (
          <div
            key={recruiter.id}
            className="border rounded-lg bg-white p-4 sm:p-6 shadow-md"
          >
            <p className="text-gray-800 font-semibold text-right p-3 mb-4">
              Member Since {recruiter.memberSince}
            </p>
            <div className="flex flex-col md:flex-col items-start md:items-start">
              {/* Recruiter Logo */}
              <div className="flex-shrink-0 mb-4 md:mb-5 md:mr-6">
                <Image
                  src={recruiter.logo}
                  alt={`${recruiter.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Recruiter Details */}
              <div className="flex-grow">
                <div className="flex flex-row md:flex-col justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                    {recruiter.name} <span className="text-blue-500">✓</span>
                  </h3>
                  <div className="flex gap-3 mt-2 md:mt-4 sm:justify-start">
                    {recruiter.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="hover:text-blue-900"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Image
                      src="/images/location.png"
                      alt="location"
                      width={16}
                      height={16}
                    />
                    {recruiter.location}
                  </p>
                  <p className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Image
                      src="/images/category.png"
                      alt="category"
                      width={16}
                      height={16}
                    />
                    {recruiter.industry}
                  </p>
                  <p className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Image
                      src="/images/user-octagon.png"
                      alt="employees"
                      width={16}
                      height={16}
                    />
                    {recruiter.employees}
                  </p>
                </div>

                <p className="text-gray-600 mt-4 text-sm sm:text-base font-sans">
                  {recruiter.description}
                </p>

                {/* Contact Information */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md">
                    <FaPhoneAlt className="mr-2" />
                    {recruiter.phone}
                  </button>
                  <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md">
                    <FaEnvelope className="mr-2" />
                    {recruiter.email}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-end gap-4 mt-4">
              <Link href="/recruiterProfile/123">
              <button className="text-blue-900 font-sans border border-blue-900 px-4 py-2 rounded-md">
                View Profile
              </button>
              </Link>
              <Link href="/jobSearch">
              <button className="bg-blue-900 font-sans text-white px-4 py-2 rounded-md">
                Open Jobs
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-2">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li
              key={pageNumber}
              className={`cursor-pointer px-3 py-1 rounded-md ${
                currentPage === pageNumber + 1
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
