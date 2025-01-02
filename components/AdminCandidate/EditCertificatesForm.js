import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import AddCertificatesForm from "./AddCertificatesForm";

export default function EditCertificatesForm({ onClose }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "Google UX Design Professional Certificate",
      provider: "Google",
      date: "Jan 2022",
    },
    {
      id: 2,
      title: "Certified User Experience Professional (CUXP)",
      provider: "CUXP",
      date: "Jan 2021",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // Close the form on submit
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-4xl min-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 flex flex-col justify-between">
          {/* Header Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-semibold text-[#001571]">
                Edit Licenses & Certificates Details
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

          {/* Form Section */}
          <form
            className="space-y-6 flex-grow overflow-y-auto"
            onSubmit={handleSubmit}
          >
            {certifications.map((certification) => (
              <div key={certification.id}>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col mb-4 font-semibold">
                    <p>{certification.title}</p>
                    <p>{certification.date}</p>
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

                    {/* Delete Button */}
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
                <p className="mb-5">{certification.provider}</p>
              </div>
            ))}
          </form>

          {/* Footer Section */}
          <div className="border-t-2 border-gray-200 mt-4 pt-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowApplicationForm(true)}
                className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
              >
                <div className="flex items-center space-x-3">
                  <p>Add</p>
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

        {/* Add Certificate Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <AddCertificatesForm
                onClose={() => setShowApplicationForm(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
