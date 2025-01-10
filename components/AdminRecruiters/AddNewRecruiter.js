import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddNewRecruiter({ onClose }) {
  const [formData, setFormData] = useState({
    recruiterName: "",
    email: "",
    phone: "",
    package: "Basic Recruiter Package", // Default value
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation
    if (!formData.recruiterName || !formData.email || !formData.phone) {
      alert("Please fill all required fields!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Recruiter Added:", formData);
    onClose(); // Close the form on successful submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">Add New Recruiter</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Recruiter Name
            </label>
            <input
              type="text"
              name="recruiterName"
              value={formData.recruiterName}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#001571]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Membership
            </label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            >
              <option value="Basic Recruiter Package">Basic Recruiter Package</option>
              <option value="Advanced Recruiter Package">Advanced Recruiter Package</option>
              <option value="Premium Recruiter Package">Premium Recruiter Package</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div className="border-t-2 border-gray-200 mt-4" />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              <div className="flex items-center space-x-3">
                <p>Add</p>
                <Image src="/images/whitetick.png" alt="tick" width={20} height={10} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
