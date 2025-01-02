import Image from "next/image";
import { FaMedal, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function EditSkillsForm({ onClose }) {
  const [formData, setFormData] = useState({
    skill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const skills = [
    "UX Design",
    "UI Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Visual Design",
    "Front-end Development",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // Close the form on submit
  };

  return (
    <>
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white w-full max-w-4xl min-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 flex flex-col">
    {/* Header Section */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-2xl font-semibold text-[#001571]">
          Edit Soft Skills Details
        </h4>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <div className="border-t-2 border-gray-200 mb-4" />
    </div>

    {/* Input Section */}
    <div className="flex-grow">
      <label className="block text-md font-semibold text-[#001571] mb-3">
        Soft Skills
      </label>
      <div className="flex items-center border border-[#B0B6D3] rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 mb-8">
        {/* Input Field */}
        <input
          type="text"
          name="skills"
          placeholder="Type skills here..."
          className="flex-grow text-sm px-3 py-2 outline-none"
        />

        {/* Add Button */}
        <button
          type="button"
          className="bg-[#001571] text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <span>Add</span>
          <img src="/images/whitetick.png" alt="Tick" className="w-4 h-4" />
        </button>
      </div>

      {/* Current Skills */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="text-blue-900 bg-[#E6E8F1] rounded-lg px-4 py-2 flex items-center font-semibold"
            >
              <FaMedal size={18} className="mr-2" />
              <span>{skill}</span>
              <FaTimes size={18} className="ml-3" />
            </div>
          ))}
        </div>
      </form>
    </div>

    {/* Footer Section */}
    <div className="border-t-2 border-gray-200 mt-4 pt-4">
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

</div>
    </>
  );
}
