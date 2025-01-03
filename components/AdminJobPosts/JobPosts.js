import { useState } from "react";
import Image from "next/image";
import AllJobPosts from "./AllJobPosts";
import RestrictedJobPosts from "./RestrictedJobPosts";
import AddNewJobPost from "./AddNewJobPost";

export default function AdminJobPosts() {
  const [isAllJobPosts, setisAllJobPosts] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);


  return (
    <div className="flex flex-col p-6 bg-white">
      {/* Page Title */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-[#001571] text-xl font-bold mb-6">Job Posts</h2>
        <button
          className="bg-[#001571] text-white px-4 py-2 rounded-lg font-medium mb-6"
          onClick={() => setShowApplicationForm(true)}
        >
          + Add New
        </button>
      </div>

      {/* Toggle Buttons */}
      <div className="flex space-x-2 mb-4 bg-gray-200 p-1 rounded-xl w-fit">
        <button
          onClick={() => setisAllJobPosts(true)}
          className={`px-4 py-2 rounded-lg font-medium ${
            isAllJobPosts
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-blue-900"
          }`}
        >
          <div className="flex space-x-3">
            <p>All Job Posts</p>
            <Image
              src="/images/whitetick.png"
              alt="tick"
              width={20}
              height={20}
            />
          </div>
        </button>
        <button
          onClick={() => setisAllJobPosts(false)}
          className={`px-4 py-2 rounded-lg font-medium ${
            !isAllJobPosts
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <div className="flex space-x-3">
            <p>Restricted Job Posts</p>
            <Image
              src="/images/graytick.png"
              alt="tick"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 flex items-center rounded-xl px-6 py-4 mb-4 shadow">
        <Image
          src="/images/search.png"
          alt="search"
          width={20}
          height={20}
          className="mx-3"
        />
        <input
          type="text"
          placeholder="Search Job Posts..."
          className="flex-grow text-gray-600 outline-none bg-transparent"
        />
      </div>

      {/* Display Components */}
      {isAllJobPosts ? <AllJobPosts /> : <RestrictedJobPosts />}
                          {/* Edit Profile Form Popup */}
                          {showApplicationForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                      <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                        <AddNewJobPost onClose={() => setShowApplicationForm(false)} />
                        </div>
                    </div>
                  )}
      
    </div>
  );
}
