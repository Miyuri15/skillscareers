import Image from "next/image";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";
import Link from "next/link";

export default function FeaturedJobCard() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs = [
    {
      id: 1,
      logo: "/images/AerFinLogo.png",
      date: "08 Jan 2024",
      title: "Senior UX/UI Designer",
      company: "InnovateTech Solutions",
      location: "New York, NY",
      description:
        "Join our creative team to design intuitive user experiences and interfaces for cutting-edge tech solutions. Ideal for someone with a passion for modern design trends.",
      employmentType: ["Full Time", "On Site"],
    },
    // Repeat similar objects for additional job cards if needed
  ];

  return (
    <>
      <div className="p-3  flex space-x-4 overflow-x-auto scrollbar-hide">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 w-80 relative"
          >
            {/* Logo on the top left */}
            <div className="absolute top-10 left-7">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={80}
                height={40}
              />
            </div>
            {/* Date on the top right */}
            <div className="absolute top-3 right-8">
              <p className="text-gray-900">{job.date}</p>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mt-12 mb-2">
              {job.title}
            </h3>
            <div className="flex space-x-2 mb-4">
              {job.employmentType.map((type, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-md text-xs font-medium font-sans ${
                    type === "Full Time"
                      ? "bg-[#001571] text-white"
                      : type === "On Site"
                      ? "bg-[#00B6B4] text-white"
                      : ""
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>

            <p className="font-bold text-gray-800 mt-6 font-sans">{job.company}</p>
            <p className="text-gray-800 font-bold mb-4 font-sans">{job.location}</p>

            <p className="text-gray-600 mb-8 font-sans">{job.description}</p>
            <div className="flex justify-center space-x-6">
              <button
                className="bg-[#001571] text-white py-2 px-4 rounded-md font-semibold w-auto font-sans"
              >
                Apply Now
              </button>
              <button className="border border-[#001571] text-[#001571] py-2 px-3 rounded-md font-semibold font-sans w-auto">
                Quick View
              </button>
            </div>
          </div>
        ))}

        {/* Job Application Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
              <button
                onClick={() => setShowApplicationForm(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <JobApplicationForm
                onClose={() => setShowApplicationForm(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
