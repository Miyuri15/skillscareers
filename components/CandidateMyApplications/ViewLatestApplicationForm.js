import { useState } from "react";
import Image from "next/image";
import CandidateMyApplication from "./MyApplication";
import JobPost from "./JobPost";

export default function ViewLatestApplicationForm() {
  const [isMyApplication, setisMyApplication] = useState(true);


  return (
    <div className="flex flex-col p-6 bg-white rounded-xl">

      {/* Toggle Buttons */}
      <div className="flex space-x-2 mb-4 bg-gray-200 p-1 rounded-2xl w-fit">
        <button
          onClick={() => setisMyApplication(true)}
          className={`px-4 py-2 rounded-2xl font-medium ${
            isMyApplication
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
        >
          <div className="flex space-x-3">
            <p>My Application</p>
            <Image
              src="/images/whitetick.png"
              alt="tick"
              width={20}
              height={20}
            />
          </div>
        </button>
        <button
          onClick={() => setisMyApplication(false)}
          className={`px-4 py-2 rounded-2xl font-medium ${
            !isMyApplication
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          <div className="flex space-x-3">
            <p>Job Post</p>
            <Image
              src="/images/graytick.png"
              alt="tick"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>


      {/* Display Components */}
      {isMyApplication ? <CandidateMyApplication /> : <JobPost/>}
      
    </div>
  );
}
