import Image from "next/image";
import { useState } from "react";
import {
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
import EditProfileForm from "./EditProfileForm";
  
  

export default function ProfileDetails(){
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
          logo: "/images/AerFin.png",
          socialLinks: [
            { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
            { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
            { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
            { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
          ],
        },
      ];

    
    return<>
<div>
<div className="relative">
          {/* Background Image */}
          <Image
            src="/images/recruiterbg.png"
            alt="Background"
            width={1200}
            height={300}
            className="w-full h-32 sm:h-48 object-cover"
          />
          {/* Edit Image */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full overflow-hidden w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] flex items-center justify-center shadow-md">
            <Image
              src="/images/editiconwhite.png"
              alt="Edit Icon"
              width={40}
              height={40}
            />
          </div>
          {/* Profile Image */}
          <div className="absolute transform -mt-14 sm:-mt-16 left-[150px] -translate-x-1/2 border-4 border-[#001571] p-1 bg-white rounded-full overflow-hidden w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] flex items-center justify-center">
            <Image
              src="/images/AerFin.png"
              alt="Aerfin Technologies Logo"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="pr-8 sm:pr-6 flex justify-end mt-4 space-x-2 sm:space-x-4 text-blue-900">
          <FaLinkedin size={20} className="cursor-pointer" />
          <FaTwitter size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
          <FaFacebook size={20} className="cursor-pointer" />
          <FaGithub size={20} className="cursor-pointer" />
          <FaDribbble size={20} className="cursor-pointer" />
        </div>

        {/* Profile Info */}
        <div className="p-4 sm:p-10 text-left mt-20">
          {recruiters.map((recruiter) => (
            <div key={recruiter.id}>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                {recruiter.name} <span className="text-blue-500">✓</span>
              </h3>

              {/* Container for details and Apply Now button */}
              <div className="flex flex-col lg:flex-row sm:flex-col md:flex-row justify-between items-start sm:items-start mt-4  gap-4">
                {/* Details section */}
                <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col sm:gap-8 items-start sm:items-start">
                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/location.png"
                      alt="location"
                      width={20}
                      height={20}
                    />
                    <p className="text-gray-800 font-semibold">
                      {recruiter.location}
                    </p>
                  </div>
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/category.png"
                      alt="industry"
                      width={20}
                      height={20}
                    />
                    <p className="text-gray-800 font-semibold">
                      {recruiter.industry}
                    </p>
                  </div>
                  {/* Employee Range */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/user-octagon.png"
                      alt="employees"
                      width={20}
                      height={20}
                    />
                    <p className="text-gray-800 font-semibold">
                      {recruiter.employees}
                    </p>
                  </div>
                </div>

                {/* Edit Button */}
                <div>
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className=" text-white   px-3 py-2 sm:px-4 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/editicon.png"
                        alt="arrow"
                        width={50}
                        height={16}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <h3 className="mt-5 text-blue-900 text-lg sm:text-xl font-bold font-mono">
                Company Description
              </h3>
              <p className="text-gray-800 mt-4 sm:mt-8 mb-4 sm:mb-6 font-sans">
                {recruiter.description}
              </p>

            </div>
          ))}
        </div>
                    {/* Edit Profile Form Popup */}
                    {showApplicationForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                  <EditProfileForm onClose={() => setShowApplicationForm(false)} />
                  </div>
              </div>
            )}
      


</div>
    </>
}