import Image from "next/image";
import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDribbble,
  FaMedal,
} from "react-icons/fa";
import EditCandidateProfileForm from "../AdminCandidate/EditCandidateProfileForm";
import EditBioDataForm from "../AdminCandidate/EditBioDataForm";
import EditExperienceForm from "../AdminCandidate/EditExperienceForm";
import EditEducationForm from "../AdminCandidate/EditEducationForm";
import EditCertificatesForm from "../AdminCandidate/EditCertificatesForm";
import EditSkillsForm from "../AdminCandidate/EditSkillsForm";
import EditToolsForm from "../AdminCandidate/EditToolsForm";
import EditTechnologiesForm from "../AdminCandidate/EditTechnologiesForm";

export default function CandidateMyProfile() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showBioDataForm, setShowBioDataForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showCertificatesForm, setShowCertificatesForm] = useState(false);
  const [showToolsForm, setShowToolsForm] = useState(false);
  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [showTechnologiesForm, setShowTechnologiesForm] = useState(false);
  const candidates = [
    {
      id: 1,
      name: "Alan Fernando",
      occupation: "Senior UI/UX Engineer ",
      passion: "Ai MI Enthusiast",
      description:
        "I am a dedicated and results-driven Senior UX/UI Designer with over 5 years of experience in creating user-friendly and aesthetically pleasing digital products. My expertise lies in designing intuitive interfaces for web and mobile applications, conducting user research, and collaborating with cross-functional teams to deliver seamless user experiences. I have a passion for combining creativity with data-driven insights to solve complex design challenges. Throughout my career, I have worked with innovative companies like InnovateTech Solutions and BrightPath Marketing, leading design projects that significantly improved user engagement and product usability. I am always eager to learn new trends in design and technology, and I strive to create designs that not only meet business goals but also delight users. In my free time, I enjoy mentoring junior designers, contributing to open-source projects, and exploring the latest developments in UX design.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
  ];

  const bioDataLeft = [
    { label: "Birthday", value: "20 Aug 2000" },
    { label: "Nationality", value: "Sri Lankan" },
    { label: "Languages", value: "Sinhala, English, Tamil" },
    { label: "Address", value: "Mawathagama, Kurunegala" },
  ];

  const bioDataRight = [
    { label: "Age", value: "26 Years" },
    { label: "Marital Status", value: "Unmarried" },
    { label: "Religion", value: "Christianity" },
    { label: "Ethnicity", value: "South Asian" },
  ];

  const experiences = [
    {
      role: "Senior UX/UI Designer",
      company: "InnovateTech Solutions",
      location: "Colombo, Sri Lanka",
      duration: "Jan 2023 - Jan 2024",
      description:
        "Led the design of multiple high-profile web and mobile applications, focusing on enhancing user experience and product usability. Collaborated with cross-functional teams, including developers and product managers, to deliver seamless solutions. Conducted user research, created wireframes, and built interactive prototypes.",
    },
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "MSc in Human Computer Interaction",
      institution: "University of Colombo, Sri Lanka",
      duration: "Jan 2019 - Jan 2021",
    },
    {
      degree: "Bachelor of Science in Graphic Design",
      institution: "University of Colombo, Sri Lanka",
      duration: "Jan 2014 - Jan 2019",
    },
  ];

  const certifications = [
    {
      title: "Google UX Design Professional Certificate",
      provider: "Google",
      date: "Jan 2022",
    },
    {
      title: "Certified User Experience Professional (CUXP)",
      provider: "CUXP",
      date: "Jan 2021",
    },
  ];

  const skills = [
    "UX Design",
    "UI Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Visual Design",
    "Front-end Development",
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Miro",
    "Invision",
    "Zaplin",
    "Azure",
    "Jira",
    "Trello",
    "VS Code",
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular JS",
    "React JS",
    "Bootstrap",
    "Git",
  ];

  return (
    <>
      <div>
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/images/recruiterbg.png"
            alt="Background"
            width={1200}
            height={300}
            className="w-full h-32 sm:h-48 object-cover rounded-t-xl"
          />
          {/* Edit Image */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white rounded-full overflow-hidden w-[30px] sm:w-[30px] h-[30px] sm:h-[30px] flex items-center justify-center shadow-md">
            <Image
              src="/images/editiconwhite.png"
              alt="Edit Icon"
              width={40}
              height={40}
            />
          </div>
          {/* Profile Image */}
          <div className="relative">
  {/* DP Image */}
  <div className="absolute transform -mt-10 sm:-mt-16 ml-4 sm:ml-10 lg:ml-20 border-4 border-[#001571] bg-white rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-[180px] lg:h-[180px] flex items-center justify-center">
    <Image
      src="/images/dp1.jpeg"
      alt="Profile"
      width={300}
      height={190}
      className="fill"
    />
  </div>

  {/* Edit Icon */}
  <div className="absolute -top-9 left-[200px] transform translate-x-1/2 -translate-y-1/2 w-20 h-8 sm:w-10 sm:h-30  rounded-full  items-center justify-center shadow-md">
    <Image
      src="/images/editiconwhite.png"
      alt="Edit Icon"
      width={40}
      height={20}
    />
  </div>
</div>
        </div>

        {/* Social Media Icons */}
        <div className="pr-8 sm:pr-6 flex justify-end mt-4 space-x-2 sm:space-x-4 text-blue-900">
          <FaLinkedin size={25} className="cursor-pointer" />
          <FaTwitter size={25} className="cursor-pointer" />
          <FaInstagram size={25} className="cursor-pointer" />
          <FaFacebook size={25} className="cursor-pointer" />
          <FaGithub size={25} className="cursor-pointer" />
          <FaDribbble size={25} className="cursor-pointer" />
        </div>

        {/* Profile Info */}
        <div className="p-4 sm:p-10 text-left mt-20">
          {candidates.map((candidate) => (
            <div key={candidate.id}>
              <h3 className="text-lg sm:text-xl font-bold">
                {candidate.name} 
              </h3>
              <div className="flex flex-grow justify-between">
                <div className="flex flex-row space-x-3">
                  <p>{candidate.occupation}</p>
                  <p>|</p>
                  <p>{candidate.passion}</p>
                </div>
                {/* Edit Button */}
                <div>
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className=" text-white px-3 py-2 sm:px-4 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/editicon.png"
                        alt="arrow"
                        width={40}
                        height={16}
                      />
                    </div>
                  </button>
                </div>
              </div>

              <h3 className="mt-5 text-blue-900 text-lg sm:text-xl font-bold">
                Personal Profile
              </h3>
              <p className="text-gray-800 mt-3 sm:mt-8  font-sans">
                {candidate.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bio Data Section */}
        <div className="w-full space-y-8 mb-4">
          <div className="bg-white px-10 py-4 sm:px-10 sm:py-5 lg:px-10 lg:py-5 rounded-lg">
            <div className="flex flex-grow justify-between">
              <h2 className="text-base font-sans sm:text-lg font-bold text-blue-800 mb-4">
                Bio Data
              </h2>
              <button
                onClick={() => setShowBioDataForm(true)}
                className=" text-white px-3 py-2 sm:px-4 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/editicon.png"
                    alt="arrow"
                    width={40}
                    height={16}
                  />
                </div>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-sans">
              <div className="space-y-2">
                {bioDataLeft.map((item, index) => (
                  <p key={index}>
                    <span className="font-semibold">{item.label}:</span>{" "}
                    {item.value}
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                {bioDataRight.map((item, index) => (
                  <p key={index}>
                    <span className="font-semibold">{item.label}:</span>{" "}
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="bg-white px-10 rounded-lg  font-sans ">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800">Experience</h2>
            <button
              onClick={() => setShowExperienceForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          {experiences.map((exp, index) => (
            <div key={index} className="my-2">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="w-2/3">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {exp.role} – {exp.company}
                  </h3>
                  <p className="text-gray-900">{exp.location}</p>
                  <p className="text-gray-900 mt-2">{exp.description}</p>
                </div>
                <p className="hidden sm:block text-gray-800 font-semibold">
                  {exp.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="bg-white px-10 pt-10 rounded-lg font-sans">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Education</h2>
            <button
              onClick={() => setShowEducationForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between mb-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {edu.degree}
                </h3>
                <p className="text-gray-500">{edu.institution}</p>
              </div>
              <p className="text-gray-900 text-right font-semibold">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white px-10 pt-10 rounded-lg  font-sans">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Licenses & Certifications
            </h2>
            <button
              onClick={() => setShowCertificatesForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between mb-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {cert.title}
                </h3>
                <p className="text-gray-500">{cert.provider}</p>
              </div>
              <p className="text-gray-900 text-right font-semibold">
                {cert.date}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white p-10 rounded-lg font-sans">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Skills</h2>
            <button
              onClick={() => setShowSkillsForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="text-blue-900 bg-[#E6E8F1] rounded-lg px-4 py-2 flex items-center font-semibold"
              >
                <FaMedal size={18} className="mr-2" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-white p-10 rounded-lg  font-sans">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Tools</h2>
            <button
              onClick={() => setShowToolsForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="text-blue-900 bg-[#E6E8F1] rounded-lg px-4 py-2 flex items-center font-semibold"
              >
                <FaMedal size={18} className="mr-2" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white p-10 rounded-lg  font-sans">
          <div className="flex flex-grow justify-between">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Technologies
            </h2>
            <button
              onClick={() => setShowToolsForm(true)}
              className=" text-white px-3 py-2 sm:px-4 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/editicon.png"
                  alt="arrow"
                  width={40}
                  height={16}
                />
              </div>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="text-blue-900 bg-[#E6E8F1] rounded-lg px-4 py-2 flex items-center font-semibold"
              >
                <FaMedal size={18} className="mr-2" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Edit Profile Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditCandidateProfileForm onClose={() => setShowApplicationForm(false)} />
            </div>
          </div>
        )}

        {/* Edit Bio Data Form Popup */}
        {showBioDataForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditBioDataForm onClose={() => setShowBioDataForm(false)} />
            </div>
          </div>
        )}

        {/* Edit Experience Form Popup */}
        {showExperienceForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditExperienceForm
                onClose={() => setShowExperienceForm(false)}
              />
            </div>
          </div>
        )}

        {/* Edit Education Form Popup */}
        {showEducationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditEducationForm
                onClose={() => setShowEducationForm(false)}
              />
            </div>
          </div>
        )}

                {/* Edit Certificates Form Popup */}
                {showCertificatesForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditCertificatesForm
                onClose={() => setShowCertificatesForm(false)}
              />
            </div>
          </div>
        )}

        
                {/* Edit Skills Form Popup */}
                {showSkillsForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditSkillsForm
                onClose={() => setShowSkillsForm(false)}
              />
            </div>
          </div>
        )}

        
                {/* Edit Tools Form Popup */}
                {showToolsForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditToolsForm
                onClose={() => setShowToolsForm(false)}
              />
            </div>
          </div>
        )}


                {/* Edit Technologies Form Popup */}
                {showTechnologiesForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
              <EditTechnologiesForm
                onClose={() => setShowTechnologiesForm(false)}
              />
            </div>
          </div>
        )}



      </div>
    </>
  );
}
