import Image from "next/image";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import CredencialDetails from "./CredencialDetails";

export default function EditProfile() {
  const [isProfile, setIsProfile] = useState(true);

  return (
    <>
      {/* edit profile section */}
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden p-6">
        {/* Toggle Buttons */}
        <div className="flex space-x-2 mb-10 bg-gray-200 p-1 rounded-xl w-fit ">
          <button
            onClick={() => setIsProfile(true)}
            className={`px-4 py-2 rounded-lg font-medium ${
              isProfile ? "bg-blue-900 text-white" : "bg-gray-100 text-blue-900"
            }`}
          >
            <div className="flex space-x-3">
              <p>Profile</p>
              <Image
                src="/images/whitetick.png"
                alt="tick"
                width={20}
                height={20}
              />
            </div>
          </button>
          <button
            onClick={() => setIsProfile(false)}
            className={`px-4 py-2 rounded-lg font-medium ${
              !isProfile
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            <div className="flex space-x-3">
              <p>Credenials</p>
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
              {isProfile ? <ProfileDetails /> : <CredencialDetails />}
        

      </div>
    </>
  );
}
