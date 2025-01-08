import Image from "next/image";
export default function JobPost() {
  const jobs = [
    {
      id: 1,
      logo: "/images/AerFinLogo.png",
      date: "08 Jan 2024",
      title: "Senior UX/UI Designer",
      company: "InnovateTech Solutions",
      location: "Colombo, Sri Lanka",
      description:
        "As a Senior UX/UI Designer at InnovateTech Solutions, you will work with a talented team of designers and developers to create intuitive, user-centered designs for our cutting-edge digital products. We are looking for a creative thinker who has a passion for modern design and enjoys collaborating in a fast-paced environment. You’ll be responsible for translating user needs into interactive, high-performing web and mobile applications.",
      employmentType: ["Full Time", "On Site"],
    },
  ];

  const responsibilities = [
    {
      label: "key",
      value:
        "Design engaging and user-friendly interfaces for web and mobile applications",
    },
    {
      label: "key",
      value:
        "Conduct user research, wireframing, prototyping, and usability testing to improve designs.",
    },
    {
      label: "key",
      value:
        "Collaborate with cross-functional teams including developers, product managers, and marketers.",
    },
    {
      label: "key",
      value:
        "Maintain and evolve design systems to ensure consistency across all platforms.",
    },
    {
      label: "key",
      value:
        "Stay updated with the latest design trends, tools, and technologies.",
    },
  ];

  const requirements = [
    { label: "requirements", value: "5+ years of experience in UX/UI design." },
    {
      label: "requirements",
      value:
        "Strong portfolio showcasing user-centered design and problem-solving skills.",
    },
    {
      label: "requirements",
      value:
        "Proficiency in design tools like Figma, Sketch, and Adobe Creative Suite.",
    },
    {
      label: "requirements",
      value: "Experience with HTML/CSS and front-end frameworks is a plus.",
    },
    {
      label: "requirements",
      value:
        "Excellent communication skills and ability to work in a team environment.",
    },
  ];

  const perks = [
    { label: "perks", value: "Remote work flexibility." },
    { label: "perks", value: "Health, dental, and vision insurance." },
    { label: "perks", value: "401(k) plan with company match." },
    { label: "perks", value: "Professional development opportunities." },
    { label: "perks", value: "Flexible vacation policy" },
  ];

  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden p-6">
        {jobs.map((job) => (
          <div key={job.id}>
            <div className="flex flex-grow justify-end">
              {/* Date on the top right */}
              <p className="text-gray-900 font-semibold">{job.date}</p>
            </div>

              {/* Logo on the top left */}
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={140}
                height={40}
              />
              <div>
            </div>
            <div className="flex flex-grow justify-between">
              <div className="flex space-x-10">
                <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-2">
                  {job.title}
                </h3>
                <div className="flex space-x-2 mb-4 mt-6">
                  {job.employmentType.map((type, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-md text-xs mt-2 font-medium items-center ${
                        type === "Full Time"
                          ? "bg-[#001571] text-white"
                          : type === "On Site"
                          ? "bg-[#00B6B4] text-white"
                          : ""
                      }`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <button className="border-2 border-[#001571] px-5 py-2 mt-6">
                  <div className="flex flex-row space-x-2 items-center">
                    <p className="font-semibold text-[#001571]">
                      View Company Profile
                    </p>
                    <Image
                      src="/images/arrowblue.png"
                      alt="arrow"
                      width={30}
                      height={10}
                    />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-grow space-x-5">
              <p className="font-bold text-gray-800  font-sans">
                {job.company}
              </p>
              <p className=" font-bold">|</p>
              <p className="text-gray-800 font-bold  font-sans">
                {job.location}
              </p>
            </div>
            <div className="border-t-2 border-gray-300 mt-3 mb-3" />
            <div >
              <p className="font-semibold mb-6 font-2xl">Job Description</p>
            </div>

            <p className=" mb-8 ">{job.description}</p>
          </div>
        ))}

        <div className="border-t-2 border-gray-300 mt-2 mb-6" />

        <div >
          <p className="font-semibold mb-6 font-2xl">Key Responsibilities</p>
        </div>

        {responsibilities.map((responsibility) => (
          <div>
            <ul class="list-disc list-inside space-y-2">
              <li>{responsibility.value}</li>
            </ul>
          </div>
        ))}
        <div className="border-t-2 border-gray-300 mt-6 mb-6" />

        <div >
          <p className="font-semibold mb-6 font-2xl">Required Qualifications</p>
        </div>
        {requirements.map((requirement) => (
          <div>
            <ul class="list-disc list-inside space-y-2">
              <li>{requirement.value}</li>
            </ul>
          </div>
        ))}

        <div className="border-t-2 border-gray-300 mt-6 mb-6" />

        <div >
          <p className="font-semibold mb-6 font-2xl">Perks & Benifits</p>
        </div>
        {perks.map((perk) => (
          <div>
            <ul class="list-disc list-inside space-y-2">
              <li>{perk.value}</li>
            </ul>
          </div>
        ))}

      </div>
    </>
  );
}
