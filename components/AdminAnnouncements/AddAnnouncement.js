import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddAnnouncement({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Job Added:", formData);
    onClose(); // Close the form on successful submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl min-h-[90vh] flex flex-col rounded-xl shadow-md p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">Add Announcement</h4>
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
            <label className="block text-sm font-semibold text-[#001571]">
              Announcement Title
            </label>
            <input
              type="text"
              name="announcement"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Announcement Description
            </label>
            <textarea
              type="text"
              name="desc"
              rows={4}
              value={formData.desc}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
        </form>

        {/* Footer Section */}
        <div className="border-t-2 border-gray-200 mt-4 mb-2" />
        <div className="flex justify-end mt-auto">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          >
            <div className="flex items-center space-x-3">
              <p>Create</p>
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
