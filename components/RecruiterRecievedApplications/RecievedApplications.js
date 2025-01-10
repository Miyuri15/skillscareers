import { useState } from "react";
import Image from "next/image";
import AllApplications from "./AllApplications";
import CustomizedApplications from "./CustomizedApplications";
import AddNewApplication from "./AddNewApplication";

export default function ReceivedApplications() {
  const [isAllJobPosts, setisAllJobPosts] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);


  return (
    <div className="flex flex-col p-6 bg-white rounded-xl">
      {/* Page Title */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-[#001571] text-xl font-bold mb-6">Received Applications</h2>
        <button
          className="bg-[#001571] text-white px-8 py-2 rounded-lg font-medium mb-6"
          onClick={() => setShowApplicationForm(true)}
        >
          + Add New
        </button>
      </div>
      <div className="flex justify-between items-center w-full">
  {/* Toggle Buttons */}
  <div className="flex space-x-2 bg-[#E6E8F1] p-1 rounded-2xl">
    <button
      onClick={() => setisAllJobPosts(true)}
      className={`px-4 py-2 flex items-center space-x-2 rounded-2xl font-medium ${
        isAllJobPosts
          ? "bg-blue-900 text-white"
          : "bg-[#E6E8F1] text-blue-900"
      }`}
    >
      <span className="text-white">All Applications</span>
      {isAllJobPosts && (
        <Image
          src="/images/whitetick.png"
          alt="tick"
          width={20}
          height={20}
        />
      )}
    </button>
    <button
      onClick={() => setisAllJobPosts(false)}
      className={`px-4 py-2 flex items-center space-x-2 rounded-2xl font-medium ${
        !isAllJobPosts
          ? "bg-blue-900 text-white"
          : "bg-[#E6E8F1] text-gray-400"
      }`}
    >
      <span className="text-white">Categorize By Job Post</span>
      {!isAllJobPosts && (
        <Image
          src="/images/graytick.png"
          alt="tick"
          width={20}
          height={20}
        />
      )}
    </button>
  </div>

  {/* Action Buttons (Favorite, Approved, Declined) */}
  <div className="flex space-x-3 items-center">
    {/* Favorite Button */}
    <div className="border-2 border-blue-900 rounded-xl flex items-center justify-center w-10 h-10">
      <Image
        src="/images/heart.png"
        alt="favorite"
        width={20}
        height={16}
      />
    </div>

    {/* Approved Button */}
    <div className="flex items-center space-x-2 border-2 border-blue-900 rounded-2xl px-4 py-2">
      <Image
        src="/images/checkboxblue.png"
        alt="checkbox"
        width={20}
        height={16}
      />
      <span className="text-blue-900 text-sm">Approved</span>
    </div>

    {/* Declined Button */}
    <div className="flex items-center space-x-2 border-2 border-blue-900 rounded-2xl px-4 py-2">
      <Image
        src="/images/checkboxblue.png"
        alt="checkbox"
        width={20}
        height={16}
      />
      <span className="text-blue-900 text-sm">Declined</span>
    </div>
  </div>
</div>
      {/* Search Bar */}
      <div className="bg-[#E6E8F1] flex items-center rounded-xl px-6 py-4 mb-4 mt-8 shadow">
        <Image
          src="/images/search.png"
          alt="search"
          width={20}
          height={20}
          className="mx-3"
        />
        <input
          type="text"
          placeholder="Search By Name or Job Title..."
          className="flex-grow text-[#8A93BE] outline-none bg-transparent"
        />
      </div>

      {/* Display Components */}
      {isAllJobPosts ? <AllApplications /> : <CustomizedApplications />}
                          {/* Edit Profile Form Popup */}
                          {showApplicationForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                      <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                        <AddNewApplication onClose={() => setShowApplicationForm(false)} />
                        </div>
                    </div>
                  )}
      
    </div>
  );
}
