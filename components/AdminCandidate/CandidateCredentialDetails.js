import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CredencialsForm from "./CandidateCredencialsForm";
import CandidateCredencialsForm from "./CandidateCredencialsForm";

export default function CandidateCredencialDetails() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Edit Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowApplicationForm(true)}
            className="text-white px-3 py-2 sm:px-4 rounded-md"
          >
            <div className="flex gap-2">
              <Image
                src="/images/editicon.png"
                alt="edit"
                width={50}
                height={16}
              />
            </div>
          </button>
        </div>
        <form>
          {candidates.map((candidate) => (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-[#001571]">
                User Name
              </label>
              <input
                type="text"
                name="User Name"
                value={candidate.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#001571]">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={candidate.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001571]">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="pone"
                    value={candidate.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </form>
        {/* Edit Profile Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <CandidateCredencialsForm onClose={() => setShowApplicationForm(false)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
