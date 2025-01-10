import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditResponsibilityForm({ onClose }) {

  const [responsibilities, setResponsibilities] = useState([
    "Design engaging and user-friendly interfaces for web and mobile applications.",
    "Conduct user research, wireframing, prototyping, and usability testing to improve designs.",
    "Collaborate with cross-functional teams including developers, product managers, and marketers.",
    "Maintain and evolve design systems to ensure consistency across all platforms.",
    "Stay updated with the latest design trends, tools, and technologies.",
  ]);

  const handleResponsibilitiesChange = (e) => {
    const value = e.target.value;
    setResponsibilities(value.split("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Responsibilities:", responsibilities); // For demonstration
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
              Key Responsibilities
            </label>
            <textarea
              name="responsibilities"
              rows={8}
              value={responsibilities.map((resp) => `• ${resp}`).join("\n")}
              onChange={handleResponsibilitiesChange}
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
