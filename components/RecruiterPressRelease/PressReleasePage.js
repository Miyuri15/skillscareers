import Image from "next/image";
import { useState } from "react";

export default function PressReleasePage() {
  
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
          <div className="flex mb-6">
            <div className="flex flex-col space-y-1">
              <p className="text-xl font-semibold text-[#001571]">
                {release.title}
              </p>
              <p className="text-sm font-semibold text-[#001571] mb-8">
                {release.date}
              </p>
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
      
    </div>
  );
}
