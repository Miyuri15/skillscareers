import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import AddExperienceForm from "./AddExperienceForm";
import { useState } from "react";

export default function EditExperienceForm({ onClose }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Senior UX/UI Designer",
      company: "InnovateTech Solutions",
      location: "Colombo, Sri Lanka",
      duration: "Jan 2023 - Jan 2024",
      description:
        "Led the design of multiple high-profile web and mobile applications, focusing on enhancing user experience and product usability. Collaborated with cross-functional teams, including developers and product managers, to deliver seamless solutions. Conducted user research, created wireframes, and built interactive prototypes.",
    },
    // Add more experiences as needed
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
          Edit Experience Details
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

    {/* Content Section */}
    <div className="flex-grow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col mb-4 font-semibold">
                <p>
                  {experience.role} - {experience.location}
                </p>
                <p>{experience.duration}</p>
              </div>
              <div className="flex flex-row space-x-3">
                {/* Edit Button */}
                <div className="bg-white rounded-full overflow-hidden w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] flex items-center justify-center shadow-md">
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    type="button"
                  >
                    <Image
                      src="/images/editiconwhite.png"
                      alt="Edit Icon"
                      width={50}
                      height={40}
                    />
                  </button>
                </div>

                <div className="bg-white rounded-full overflow-hidden w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] flex items-center justify-center shadow-md">
                  <Image
                    src="/images/trashblue.png"
                    alt="Delete Icon"
                    width={20}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <p className="mb-5">{experience.location}</p>
            <p>{experience.description}</p>
          </div>
        ))}
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

  {/* Add Experience Form Popup */}
  {showApplicationForm && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
        <AddExperienceForm onClose={() => setShowApplicationForm(false)} />
      </div>
    </div>
  )}
</div>
    </>
  );
}
