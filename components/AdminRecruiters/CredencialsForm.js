import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CredencialsForm({ onClose }) {
  const [formData, setFormData] = useState({
    recruiterName: "Aerfin Technologies",
    location: "Union Place, Colombo 10",
    recruiterCategory: "Technology & Development",
    employeeRange: "11 - 50 Employees",
    website: "www.aerfintech.com",
    email: "info@aerfintechnologies.com",
    package: "Basic Recruiter Package",
    phone: "011-2335-876",
    companyDescription:
      "I am a dedicated and results-driven Senior UX/UI Designer with over 5 years of experience in creating user-friendly and aesthetically pleasing digital products. My expertise lies in designing intuitive interfaces for web and mobile applications, conducting user research, and collaborating with cross-functional teams to deliver seamless user experiences. I have a passion for combining creativity with data-driven insights to solve complex design challenges.\n\nThroughout my career, I have worked with innovative companies like InnovateTech Solutions and BrightPath Marketing, leading design projects that significantly improved user engagement and product usability. I am always eager to learn new trends in design and technology, and I strive to create designs that not only meet business goals but also delight users.\n\nIn my free time, I enjoy mentoring junior designers, contributing to open-source projects, and exploring the latest developments in UX design.",
  });

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">Edit Profile</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
            <div>
              <label className="block text-sm font-semibold text-[#001571]">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#001571]"> Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#001571]">Membership</label>
              <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
                >
                  <option value="Basic Recruiter Package">
                    Basic Recruiter Package
                  </option>
                  <option value="Advanced Recruiter Package">
                    Advanced Recruiter Package
                  </option>
                  <option value="Premium Recruiter Package">
                    Premium Recruiter Package
                  </option>
                </select>
            </div>

            <div className="border-t-2 border-gray-200 mt-4" />
            <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              <div className="flex items-center space-x-3">
                <p>Save</p>
                <Image src="/images/whitetick.png" alt="tick" width={20} height={10} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
