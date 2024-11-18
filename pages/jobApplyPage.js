import Header from "@/components/Header";
import JobApplicationForm from "@/components/JobApplicationForm";
import { useState } from 'react';

export default function JobApplicationPage(){
    const [selectedJob, setSelectedJob] = useState('');
    const [resume, setResume] = useState(null);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
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
    };
  
    return(
        <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full  bg-white rounded-lg shadow-lg py-5 px-5">
        <h2 className="text-center text-2xl font-semibold text-blue-900 mb-6">
          Apply for Aerfin Technologies
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-m font-semibold text-blue-900 mb-1">
              Select Job
            </label>
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
              <option value="">Select job from the listing</option>
              <option value="Job1">Job1</option>
              <option value="Job2">Job2</option>
              <option value="Job3">Job3</option>
              {/* Add more job options as needed */}
            </select>
          </div>

          <div className="mb-4">
          <label className="block text-m font-semibold text-blue-900 mb-1">
          Resume/CV
            </label>
            <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-md p-4 hover:bg-gray-50">
              <label
                htmlFor="file-upload"
                className="block text-m font-medium text-blue-200 mb-1">                <div className="space-y-1">
                  <svg
                    className="mx-auto h-8 w-8 text-blue-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H14a2 2 0 00-2 2v28a2 2 0 002 2h20a2 2 0 002-2V16L28 8z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 20h4M22 28h10M22 36h10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Click or drag file to this area to upload your Resume</span>
                  <p className="text-xs text-blue-400">Please make sure to upload a PDF</p>
                </div>
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
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
            <div>
              <label className="block text-m font-semibold text-blue-900 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-m font-semibold text-blue-900 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-m font-semibold text-blue-900 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block text-m font-semibold text-blue-900 mb-1"
            />
          </div>

          <div className="mb-6">
            <label className="block text-m font-semibold text-blue-900 mb-1">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          <div className="flex flex-row space-x-4">
            <button
              type="submit"
              className=" bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800"
            >
              Submit Application
            </button>
            <button
              type="button"
              className=" bg-white border border-blue-900 border-2 text-blue-900 px-5 py-2 rounded-md font-medium hover:bg-blue-50"
            >
              Back to Profile
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}