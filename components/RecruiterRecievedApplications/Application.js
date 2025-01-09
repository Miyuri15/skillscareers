import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function CandidateApplication() {
  const candidates = [
    {
      id: 1,
      name: "Alan Fernando",
      occupation: "Senior UI/UX Engineer ",
      passion: "Ai MI Enthusiast",
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

  const [formData, setFormData] = useState({
    firstName: "Alan",
    lastName: "Fernando",
    phone: "011-2335-876",
    email: "info@aerfintechnologies.com",
  });

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // Close the form on submit
  };

  return (
    <>
      <div className="flex flex-col p-6 bg-white min-h-screen rounded-xl">
        <div className="p-3 flex flex-grow justify-between items-center">
          <p className="text-[#001571] text-xl font-bold">Profile</p>
          {/* Action Buttons (Favorite, Approved, Declined) */}
          <div className="flex space-x-3 items-center">
            {/* Favorite Button */}
            <div className="bg-[#E6E8F1] rounded-xl flex items-center justify-center w-10 h-10">
              <Image
                src="/images/heartwhite.png"
                alt="favorite"
                width={20}
                height={16}
              />
            </div>

            {/* Approved Button */}
            <div className="flex items-center space-x-2 bg-[#001571] rounded-2xl px-4 py-2 ">
              <Image
                src="/images/whitetick.png"
                alt="checkbox"
                width={20}
                height={16}
              />
              <span className="text-white text-sm">Approved</span>
            </div>

            {/* Declined Button */}
            <div className="flex items-center space-x-2 bg-[#EC221F] rounded-2xl px-4 py-2">
              <Image
                src="/images/closecross.png"
                alt="checkbox"
                width={20}
                height={16}
              />
              <span className="text-white text-sm">Declined</span>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#B0B6D3] p-3" />
        {/* Form */}
        <form className="space-y-6 mb-8 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#8A93BE]">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full text-md px-2 py-1 text-[#001571]"
              />
            </div>
            <div>
              <label className="block text-sm  font-semibold text-[#8A93BE]">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full text-md px-2 py-1 text-[#001571]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#8A93BE]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-md px-2 py-1 text-[#001571]"
              />
            </div>
            <div>
              <label className="block text-sm  font-semibold text-[#8A93BE]">
                Contact Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full text-md px-2 py-1 text-[#001571]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Resume/CV*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-3 pb-3 border-2 border-gray-300 border-dashed rounded-md">
              <div className="flex space-x-3 bg-[#001571] px-4 py-2 rounded-2xl items-center">
                {/* File upload UI */}
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/downlaod.png"
                    alt="download"
                    width={30}
                    height={40}
                    className=""
                  />
                </div>
                <p className="text-white ml-3 items-center">Download CV</p>
                <div className="text-sm text-blue-900">
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* profile info */}
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/images/recruiterbg.png"
            alt="Background"
            width={1200}
            height={300}
            className="w-full h-32 sm:h-48 object-cover"
          />
          {/* Profile Image */}
          <div className="relative">
            {/* DP Image */}
            <div className="absolute transform -mt-10 sm:-mt-16 ml-4 sm:ml-10 lg:ml-20 border-4 border-[#001571] bg-white rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-[180px] lg:h-[180px] flex items-center justify-center">
              <Image
                src="/images/dp1.jpeg"
                alt="Profile"
                width={300}
                height={190}
                className="fill"
              />
            </div>

            {/* Edit Icon */}
            <div className="absolute -top-9 left-[200px] transform translate-x-1/2 -translate-y-1/2 w-20 h-8 sm:w-10 sm:h-30  rounded-full  items-center justify-center shadow-md">
              <Image
                src="/images/editiconwhite.png"
                alt="Edit Icon"
                width={40}
                height={20}
              />
            </div>
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
          {candidates.map((candidate) => (
            <div key={candidate.id}>
              <h3 className="text-lg sm:text-xl font-bold">{candidate.name}</h3>
              <div className="flex flex-grow justify-between">
                <div className="flex flex-row space-x-3">
                  <p className="font-semibold text-sm">
                    {candidate.occupation}
                  </p>
                  <p className="font-semibold text-sm">|</p>
                  <p className="font-semibold text-sm">{candidate.passion}</p>
                </div>
                {/* Edit Button */}
                <div>
                  <Link href="/recruiter/receivedApplications/ViewProfile">
                    <button className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm">
                      <div className="flex space-x-2 items-center">
                        <p>View Profile</p>
                        <Image
                          src="/images/arrowangal.png"
                          alt="edit"
                          width={20}
                          height={20}
                        />
                      </div>
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
