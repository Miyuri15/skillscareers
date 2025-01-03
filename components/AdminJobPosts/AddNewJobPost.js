import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddNewJobPost({ onClose }) {
  const [formData, setFormData] = useState({
    jobTitle: "",
    recruiterName: "",
    location: "",
    jobDescription: "", // Default value
    responsibilities: "",
    requirements: "",
    benifits: "",
    employmentType: [],
  });

  const jobTypes = [
    "On Site",
    "Hybrid",
    "Remote",
    "Full-Time",
    "Part-Time",
    "Freelance",
  ];

  const [responsibilities, setResponsibilities] = useState([
    "Design engaging and user-friendly interfaces for web and mobile applications.",
    "Conduct user research, wireframing, prototyping, and usability testing to improve designs.",
    "Collaborate with cross-functional teams including developers, product managers, and marketers.",
    "Maintain and evolve design systems to ensure consistency across all platforms.",
    "Stay updated with the latest design trends, tools, and technologies.",
  ]);

  const [requirements, setrequirements] = useState([
    "5+ years of experience in UX/UI design.",
    "Strong portfolio showcasing user-centered design and problem-solving skills.",
    "Proficiency in design tools like Figma, Sketch, and Adobe Creative Suite.",
    "Experience with HTML/CSS and front-end frameworks is a plus.",
    "Excellent communication skills and ability to work in a team environment."
  ]);

  const [perk, setperk] = useState([
    "Remote work flexibility.",
    "Health, dental, and vision insurance.",
    "401(k) plan with company match.",
    "Professional development opportunities.",
    "Flexible vacation policy",
  ]);

  const handleperkChange = (e) => {
    const value = e.target.value;
    setperk(value);
  };


  const handlerequirementsChange = (e) => {
    const value = e.target.value;
    setrequirements(value.split("\n"));
  };


  const toggleJobType = (type) => {
    setFormData((prevState) => {
      const isActive = prevState.employmentType.includes(type);
      const updatedTypes = isActive
        ? prevState.employmentType.filter((t) => t !== type)
        : [...prevState.employmentType, type];
      return { ...prevState, employmentType: updatedTypes };
    });
  };

  const handleResponsibilitiesChange = (e) => {
    const value = e.target.value;
    setResponsibilities(value.split("\n"));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Job Added:", formData);
    onClose(); // Close the form on successful submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-md p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-semibold text-[#001571]">
            Add Job Post
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
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Recruiter Name
            </label>
            <input
              type="text"
              name="recruiterName"
              value={formData.recruiterName}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          {/* Job Types Section */}
          <div>
            <label className="block text-sm font-semibold text-[#001571] mb-2">
              Job Types
            </label>
            <div className="flex flex-wrap gap-4">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleJobType(type)}
                  className={`px-4 py-2 rounded-xl border-2 ${
                    formData.employmentType.includes(type)
                      ? "bg-[#001571] text-white"
                      : "border-[#B0B6D3] text-[#001571]"
                  } text-sm font-medium focus:outline-none hover:shadow-md`}
                >
                  <div className="flex items-center">
                    {type}
                    <Image
                      src={
                        formData.employmentType.includes(type)
                          ? "/images/whitedotfull.png"
                          : "/images/whitedot.png"
                      }
                      alt="dot"
                      width={15}
                      height={10}
                      className="ml-3"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Job Description
            </label>
            <textarea
              type="text"
              name="description"
              rows={8}
              value={formData.jobDescription}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Key Responsibilities
            </label>
            <textarea
              name="responsibilities"
              rows={8}
              value={responsibilities.map((resp) => `• ${resp}`).join("\n")}
              onChange={handleResponsibilitiesChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Required Qualifications
            </label>
            <textarea
              name="requirements"
              rows={9}
              value={requirements
                .map((qualification) => `• ${qualification}`)
                .join("\n")}
              onChange={handlerequirementsChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#001571]">
              Perk & Benifits
            </label>
            <textarea
              name="perk"
              rows={8}
              value={perk
                .map((benifit) => `• ${benifit}`)
                .join("\n")}
              onChange={handleperkChange}
              className="mt-1 block w-full border border-[#B0B6D3] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm px-3 py-2"
            />
          </div>





          <div className="border-t-2 border-gray-200 mb-4" />

          <div className="flex justify-end">
            <button
              type="submit"
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
        </form>
      </div>
    </div>
  );
}
