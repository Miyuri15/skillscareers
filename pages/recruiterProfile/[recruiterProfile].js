import { useState } from "react";
import FeaturedJobCard from "@/components/FeaturedJobCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OpenJobs from "@/components/OpenJobs";
import Image from "next/image";
import Link from "next/link";
import JobApplicationForm from "@/components/JobApplicationForm"; // Import your form component
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDribbble,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const jobsData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  companyLogo: "/images/aerfin-logo.png",
  companyName: "AerFin",
  title: "Senior UX/UI Designer",
  location: "New York, NY",
  datePosted: `0${(i % 9) + 1} Jan 2024`,
}));

export default function RecruiterProfile() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const recruiters = [
    {
      id: 1,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "I am a dedicated and results-driven Senior UX/UI Designer with over 5 years of experience in creating user-friendly and aesthetically pleasing digital products. My expertise lies in designing intuitive interfaces for web and mobile applications, conducting user research, and collaborating with cross-functional teams to deliver seamless user experiences. I have a passion for combining creativity with data-driven insights to solve complex design challenges. Throughout my career, I have worked with innovative companies like InnovateTech Solutions and BrightPath Marketing, leading design projects that significantly improved user engagement and product usability. I am always eager to learn new trends in design and technology, and I strive to create designs that not only meet business goals but also delight users. In my free time, I enjoy mentoring junior designers, contributing to open-source projects, and exploring the latest developments in UX design.",
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

  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-20">
        {/* Profile Banner */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Background Image */}
            <Image
              src="/images/recruiterbg.png"
              alt="Background"
              width={1200}
              height={300}
              className="w-full h-48 object-cover"
            />
            {/* Profile Image */}
            <div className="absolute transform -mt-16 ml-20 border-4 border-[#001571] p-1 bg-white rounded-full overflow-hidden w-[180px] h-[180px] flex items-center justify-center">
              <Image
                src="/images/AerFin.png"
                alt="Aerfin Technologies Logo"
                width={160}
                height={160}
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="pr-10 flex justify-end mt-4 space-x-4 text-blue-900">
            <FaLinkedin size={24} className="cursor-pointer" />
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebook size={24} className="cursor-pointer" />
            <FaGithub size={24} className="cursor-pointer" />
            <FaDribbble size={24} className="cursor-pointer" />
          </div>

          {/* Profile Info */}
          <div className="p-20 pt-16 text-left mt-10">
            {recruiters.map((recruiter) => (
              <div key={recruiter.id}>
                <div className="flex items-center">
                  {/* Company Name */}
                  <h3 className="text-xl font-bold text-blue-900">
                    {recruiter.name} <span className="text-blue-500">✓</span>
                  </h3>
                </div>

                {/* Container for details and Apply Now button */}
                <div className="flex justify-between mt-4">
                  {/* Details section */}
                  <div className="flex flex-col gap-4">
                    {/* Location, Category, Employee Range */}
                    <div className="flex flex-row gap-8">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/location.png"
                          alt="location"
                          width={20}
                          height={2}
                        />
                        <p className="text-gray-800 font-semibold">
                          {recruiter.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/category.png"
                          alt="industry"
                          width={20}
                          height={2}
                        />
                        <p className="text-gray-800 font-semibold">
                          {recruiter.industry}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/user-octagon.png"
                          alt="employees"
                          width={20}
                          height={2}
                        />
                        <p className="text-gray-800 font-semibold">
                          {recruiter.employees}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Now button */}
                  <div>
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="bg-blue-900 text-white border-blue-950 border-2 px-4 py-2 rounded-md"
                    >
                      <div className="flex items-center gap-2 px-4">
                        <span>Apply Now</span>
                        <Image
                          src="/images/arrow.png"
                          alt="arrow"
                          width={20}
                          height={4}
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <h3 className="mt-5 text-blue-900 text-xl font-semibold">
                  Company Description
                </h3>
                <p className="text-gray-600 mt-8 mb-6">
                  {recruiter.description}
                </p>

                {/* Contact Information */}
                <div className="flex gap-8 mt-4 p-4">
                  <button className="flex items-center bg-blue-900 text-white px-5 py-4 rounded-md">
                    <FaPhoneAlt className="mr-2" />
                    {recruiter.phone}
                  </button>
                  <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md">
                    <FaEnvelope className="mr-2" />
                    {recruiter.email}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="mt-10 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-blue-900">Open Jobs</h2>
            <div className="flex justify-between space-x-4">
              <button className="px-4 py-2 bg-gray-300 text-blue-900 font-semibold hover:underline">
                Onsite
              </button>
              <button className="px-4 py-2 bg-gray-300 text-blue-900 font-semibold hover:underline">
                Hybrid
              </button>
              <button className="px-4 py-2 bg-gray-300 text-blue-900 font-semibold hover:underline">
                Remote
              </button>
            </div>
          </div>

          {/* open jobs */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {jobsData.map((job) => (
              <Link key={job.id} href={`/job/${job.id}`}>
                <FeaturedJobCard job={job} />
              </Link>
            ))}
          </div>
        </div>
      </div>

{/* Job Application Form Popup */}
{showApplicationForm && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="relative bg-white shadow-lg rounded-lg px-6 w-full max-w-4xl">
      <button
        onClick={() => setShowApplicationForm(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
      >
        Close
      </button>
      <JobApplicationForm onClose={() => setShowApplicationForm(false)} />
    </div>
  </div>
)}

      <Footer />
    </>
  );
}
