import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function JobApplicationForm({ onClose }) {
  const [selectedJob, setSelectedJob] = useState("");
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({ selectedJob, resume, formData });
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed w-full inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative w-full max-h-[85vh] bg-white rounded-t-lg shadow-lg overflow-y-auto p-8">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-900">
          Apply for Aerfin Technologies
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <label className="block text-sm font-semibold text-blue-900">
              Select Job
            </label>
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-medium"
            >
              <option value="" className="text-gray-200">
                Select job from the listing
              </option>
              <option value="Job1">Job1</option>
              <option value="Job2">Job2</option>
              <option value="Job3">Job3</option>
              {/* Add more job options as needed */}
            </select>
          </div>

          <div className="mb-4 mt-4">
            <label className="block text-sm font-semibold text-blue-900">
              Resume/CV
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-3 text-center">
                {/* File upload UI */}
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/downloadIcon.png"
                    alt="download"
                    width={40}
                    height={40}
                    className=""
                  />
                </div>
                <div className="text-sm text-blue-900">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-blue-900 hover:text-indigo-500"
                  >
                    <span>
                      Click or drag file to this area to upload your Resume
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-blue-900">
                  Please make sure to upload a PDF
                </p>
              </div>
            </div>
          </div>
          {/* Input fields for first name, last name, etc. */}
          <div>
            <label className="block text-sm mt-4 font-semibold text-blue-900">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-m focus:ring-blue-900 focus:border-blue-900 sm:text-lg"
            />
          </div>

          <div>
            <label className="block mt-4 text-sm  font-semibold text-blue-900">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 sm:text-lg"
            />
          </div>

          <div className="mb-4 mt-4">
            <label className="block text-sm font-semibold text-blue-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 sm:text-lg"
            />
          </div>

          <div className="mb-6 mt-4">
            <label className="block text-sm font-semibold text-blue-900">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="mt-2 block w-full border-2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>

          <div className="flex justify-start gap-4">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded-md border-2 font-medium hover:bg-indigo-700"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-gray-300 border-blue-900 border-2"
            >
              Back to Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
