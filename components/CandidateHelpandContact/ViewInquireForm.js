import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ViewInquireForm({ onClose }) {

  const [formData, setFormData] = useState({
    title:"Request System Modification",
    date:"20 AUG 2024",
    reply:"Looking to expand your professional network? Join our online networking event on [Insert Date] to connect with like-minded professionals and industry leaders. Don't miss this opportunity to grow your connections and advance your career!",
    desc:"Looking to expand your professional network? Join our online networking event on [Insert Date] to connect with like-minded professionals and industry leaders. Don't miss this opportunity to grow your connections and advance your career!",
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
            View Inquire
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
            <label className="block text-sm font-semibold text-[#001571] mb-2">
              Inquire Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.reProfileName}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571] mb-2">
              Inquire Date
            </label>
            <input
              type="text"
              name="title"
              value={formData.reInquireTitle}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571] mb-2">
              Inquire Description
            </label>
            <textarea
              type="text"
              name="title"
              rows={3}
              value={formData.desc}
              onChange={handleChange}
              className="mt-2 mb-5 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2 "
            />
          </div>
          <div className="border-t-2 border-gray-200" />

          <div>
            <label className="block text-sm font-semibold text-[#001571] mb-3 mt-20">
              Inquire Description
            </label>
            <textarea
              type="text"
              name="title"
              rows={3}
              value={formData.desc}
              onChange={handleChange}
              className="bg-[#B0B6D3] mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
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
              <p>Done</p>
              <Image
                src="/images/graytick.png"
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
