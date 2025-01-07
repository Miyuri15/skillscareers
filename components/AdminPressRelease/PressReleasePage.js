import Image from "next/image";
import { useState } from "react";
import EditRelease from "./EditReleaseForm";

export default function PressReleasePage() {
    const [showReleaseEditForm, setShowReleaseEditForm] = useState(false);
  
  const releases = [
    {
      id: 1,
      title: "5 Essential Skills for Thriving in a Digital Workplace",
      image: "/images/releaseimg.png",
      date: "24 AUG 2024",
      desc: "At the heart of the digital workplace is the ability to navigate technology effectively. Digital literacy involves understanding tools such as cloud platforms, productivity software, and communication apps. Whether it's Google Workspace for collaborative tasks or tools like Trello and Notion for project management, knowing how to use these systems ensures efficiency. Equally important is staying aware of cybersecurity practices. Protecting sensitive data, recognizing phishing attempts, and using secure passwords can safeguard both personal and professional information in a digital environment.",
    },
  ];
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl">
      {releases.map((release) => (
        <div key={release.id} className="p-4">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col space-y-1">
              <p className="text-xl font-semibold text-[#001571]">
                {release.title}
              </p>
              <p className="text-sm font-semibold text-[#001571] mb-8">
                {release.date}
              </p>
            </div>
            <div className="flex space-x-3">
            <button
              onClick={() => setShowReleaseEditForm(true)}
              className=" text-white  rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editblue.png"
                  alt="arrow"
                  width={50}
                  height={16}
                />
              </div>
            </button>
              <Image
                src="/images/deleteblue.png"
                alt="delete"
                width={50}
                height={20}
              />
            </div>
          </div>
          <div className="relative w-full h-[400px] mb-4">
            <Image
              src={release.image}
              alt="img"
              layout="fill" // Automatically adjusts to the container
              objectFit="cover" // Ensures the image fills the container
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="mb-2">{release.desc}</p>
            {release.desc}
          </div>
        </div>
      ))}
              {/* Edit Release Popup */}
              {showReleaseEditForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                    <EditRelease
                      onClose={() => setShowReleaseEditForm(false)}
                    />
                  </div>
                </div>
              )}
      
    </div>
  );
}
