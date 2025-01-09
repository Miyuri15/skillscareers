import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditJobDesForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "Senior UX/UI Designer",
    company: "InnovateTech Solutions",
    location: "Union Place, Colombo 10",
    date: "08 JAN 2024",
    description:
      "As a Senior UX/UI Designer at InnovateTech Solutions, you will work with a talented team of designers and developers to create intuitive, user-centered designs for our cutting-edge digital products. We are looking for a creative thinker who has a passion for modern design and enjoys collaborating in a fast-paced environment. You’ll be responsible for translating user needs into interactive, high-performing web and mobile applications.",
    employmentType: ["Full Time", "On Site"],
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
      <div className="bg-white w-full max-w-4xl min-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">
            Edit Job Post
          </h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        {/* Form Section */}
        <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#001571] mb-5">
              Job Description
            </label>
            <textarea
              type="text"
              name="title"
              rows={8}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>

        </form>

        {/* Footer Section */}
        <div className="border-t-2 border-gray-200 mb-4 mt-4" />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}

            className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          >
            <div className="flex items-center space-x-3">
              <p>Save</p>
              <Image
                src="/images/whitetick.png"
                alt="tick"
                width={20}
                height={10}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
