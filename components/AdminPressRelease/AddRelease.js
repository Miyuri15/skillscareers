import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddRelease({ onClose }) {
    const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "Join Our Upcoming Networking Event",
    desc: "Digital literacy is foundational in the modern workplace. It involves understanding and effectively using digital tools and platforms such as project management software, cloud storage solutions, and communication tools like Slack or Microsoft Teams. Staying informed about cybersecurity best practices and emerging technologies ensures you're equipped for any digital challenges.\n\nClear and concise communication is critical, especially in remote and hybrid settings. Whether you’re using email, video conferencing, or instant messaging platforms, your ability to convey ideas and collaborate effectively ensures smooth workflows and stronger team dynamics.\n\nWith the flexibility of digital work often comes the challenge of managing tasks and deadlines. Tools like Trello, Asana, or Notion can help you stay organized and prioritize effectively. Strong time management skills help maintain productivity while reducing stress in a fast-paced environment.\n\nTechnology evolves rapidly, and the workplace often shifts to adopt the latest trends. Being adaptable ensures you can navigate changes such as new software implementations, process updates, or industry trends. A mindset of continuous learning will help you embrace innovation rather than fear it.\n\nThe digital workplace can sometimes feel isolating, making emotional intelligence more important than ever. Understanding and managing your emotions, empathizing with colleagues, and maintaining strong interpersonal relationships can foster a positive and collaborative work culture.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // Close the form on submit
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">
            Create a Press Release
          </h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="border-t-2 border-gray-200 mb-4" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
               Description
            </label>
            <textarea
              type="text"
              name="description"
              rows={20}
              value={formData.desc}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>


          <div className="mb-4 mt-4">
      <label className="block text-sm font-semibold text-blue-900">
        Image
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-3 text-center">
          {/* File upload UI */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/upload.png" 
              alt="upload"
              width={40}
              height={40}
              className=""
            />
          </div>
          <div className="text-sm text-blue-900">
            <label
              htmlFor="image-upload"
              className="relative cursor-pointer rounded-md font-semibold text-[#8A93BE]"
            >
              <span>
                Click or drag file to this area to upload your Image
              </span>
              <input
                id="image-upload"
                name="image-upload"
                type="file"
                className="sr-only"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs text-[#8A93BE]">
            Please make sure to upload a JPEG, PNG & JPG
          </p>
        </div>
      </div>
      {image && (
        <div className="mt-4">
          <p className="text-sm text-blue-900">Selected File:</p>
          <p className="text-sm text-gray-600">{image.name}</p>
        </div>
      )}
    </div>


          <div className="border-t-2 border-gray-200 mb-4" />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#001571] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            >
              <div className="flex items-center space-x-3">
                <p>Create</p>
                <Image
                  src="/images/whitetick.png"
                  alt="tick"
                  width={20}
                  height={10}
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
