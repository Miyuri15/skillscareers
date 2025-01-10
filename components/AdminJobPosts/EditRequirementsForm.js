import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditRequirementsForm({ onClose }) {
  const [requirements, setrequirements] = useState([
    "5+ years of experience in UX/UI design.",
    "Strong portfolio showcasing user-centered design and problem-solving skills.",
    "Proficiency in design tools like Figma, Sketch, and Adobe Creative Suite.",
    "Experience with HTML/CSS and front-end frameworks is a plus.",
    "Excellent communication skills and ability to work in a team environment."
  ]);

  const handlerequirementsChange = (e) => {
    const value = e.target.value;
    setrequirements(value.split("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("requirements:", requirements); // For demonstration
    onClose(); // Close the form on submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl min-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-semibold text-[#001571]">
            Edit Job Post
          </p>
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
            <label className="block text-sm font-semibold text-[#001571] mb-2">
              Required Qualifications
            </label>
            <textarea
              name="requirements"
              rows={9}
              value={requirements
                .map((qualification) => `• ${qualification}`)
                .join("\n")}
              onChange={handlerequirementsChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
        </form>

        {/* Footer Section */}
        <div className="border-t-2 border-gray-200 mb-4 mt-4" />
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
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
