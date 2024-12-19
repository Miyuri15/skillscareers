import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDribbble,
  FaDownload,
  FaEnvelope,
  FaIdBadge,
  FaRegIdBadge,
  FaMedal,
} from "react-icons/fa";

const CandidateProfile = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-200 min-h-screen p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-center">
        {/* Profile Banner */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Background Image */}
            <Image
              src="/images/recruiterbg.png"
              alt="Background"
              width={1200}
              height={300}
              className="w-full h-32 sm:h-48 object-cover"
            />
            {/* Profile Image */}
            <div className="absolute transform -mt-10 sm:-mt-16 ml-4 sm:ml-10 lg:ml-20 border-4 border-[#001571]n bg-white rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-[180px] lg:h-[180px] flex items-center justify-center">
              <Image
                src="/images/dp1.jpeg"
                alt="Profile"
                width={300}
                height={190}
                className="fill"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-end sm:justify-end mt-4 space-x-4 text-blue-900 px-4 sm:px-4">
            <FaLinkedin size={24} className="cursor-pointer" />
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebook size={24} className="cursor-pointer" />
            <FaGithub size={24} className="cursor-pointer" />
            <FaDribbble size={24} className="cursor-pointer" />
          </div>

          {/* Profile Info */}
          <div className="text-left px-4 sm:px-8 lg:px-10 pt-20 mt-10">
            {/* Container for Profile Info and Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              {/* Profile Info */}
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800 font-sans ">
                  Alan Fernando
                </h2>
                <p className="text-sm sm:text-base text-gray-900 font-semibold font-sans">
                  Senior UI/UX Engineer | AI ML Enthusiast
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
                <button className="flex items-center justify-center px-4 py-2 text-white bg-[#001571] rounded-md hover:bg-blue-900 text-sm sm:text-base">
                  Download CV <FaDownload className="ml-2" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 text-white bg-[#001571] rounded-md hover:bg-blue-900 text-sm sm:text-base">
                  Send an Email <FaEnvelope className="ml-2" />
                </button>
              </div>
            </div>
            {/* Bio Section */}
            <div className=" text-left sm:px-6 sm:py-5 lg:px-0 md:px-0">
              <h3 className=" mb-5 mt-6 text-base font-sans sm:text-lg font-bold text-blue-800">
                Personal Profile
              </h3>
              <p className="text-sm sm:text-base text-gray-800 pb-10 font-sans">
                I am a dedicated and results-driven Senior UI/UX Designer with
                over 5 years of experience in creating user-friendly and
                aesthetically pleasing digital products. My expertise lies in
                designing intuitive interfaces for web and mobile applications,
                conducting user research, and collaborating with
                cross-functional teams to deliver seamless user experiences. I
                have a passion for combining creativity with data-driven
                insights to solve complex design challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Bio Data Section */}
        <div className="w-full space-y-8 mt-6 mb-4">
          <div className="bg-white px-10 py-4 sm:px-10 sm:py-8 lg:px-10 lg:py-10 rounded-lg shadow-md">
            <h2 className="text-base font-sans sm:text-lg font-bold text-blue-800 mb-4">
              Bio Data
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-sans">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Birthday:</span> 20 Aug 2000
                </p>
                <p>
                  <span className="font-semibold">Nationality:</span> Sri Lankan
                </p>
                <p>
                  <span className="font-semibold">Languages:</span> Sinhala,
                  English, Tamil
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Mawathagama,
                  Kurunegala
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Age:</span> 26 Years
                </p>
                <p>
                  <span className="font-semibold">Marital Status:</span>{" "}
                  Unmarried
                </p>
                <p>
                  <span className="font-semibold">Religion:</span> Christianity
                </p>
                <p>
                  <span className="font-semibold">Ethnicity:</span> South Asian
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8 mt-3 mb-4">
          {/* Experience Section */}
          <div className="bg-white p-10 rounded-lg shadow-md font-sans">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Experience</h2>
            <div>
              {/* Experience Item */}
              <div className="my-10">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Senior UX/UI Designer – InnovateTech Solutions
                    </h3>
                    {/* Date for smaller screens */}
                    <p className="text-gray-800 font-semibold mt-2 sm:hidden">
                      Jan 2023 - Jan 2024
                    </p>
                  </div>
                  {/* Date for larger screens */}
                  <div className="hidden font-semibold sm:flex flex-col items-center text-gray-800 text-right ml-4">
                    <p>Jan 2023 - Jan 2024</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-900">Colombo, Sri Lanka</p>
                  <p className="text-gray-900 mt-2">
                    Led the design of multiple high-profile web and mobile
                    applications, focusing on enhancing user experience and
                    product usability. Collaborated with cross-functional teams,
                    including developers and product managers, to deliver
                    seamless solutions. Conducted user research, created
                    wireframes, and built interactive prototypes.
                  </p>
                </div>
              </div>

              {/* Repeat Experience Item */}
              <div className="my-10">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Senior UX/UI Designer – InnovateTech Solutions
                    </h3>
                    {/* Date for smaller screens */}
                    <p className="text-gray-800 font-semibold mt-2 sm:hidden">
                      Jan 2023 - Jan 2024
                    </p>
                  </div>
                  {/* Date for larger screens */}
                  <div className="hidden font-semibold sm:flex flex-col items-center text-gray-800 text-right ml-4">
                    <p>Jan 2023 - Jan 2024</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-900">Colombo, Sri Lanka</p>
                  <p className="text-gray-900 mt-2">
                    Led the design of multiple high-profile web and mobile
                    applications, focusing on enhancing user experience and
                    product usability. Collaborated with cross-functional teams,
                    including developers and product managers, to deliver
                    seamless solutions. Conducted user research, created
                    wireframes, and built interactive prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white p-10 rounded-lg shadow-md font-sans">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Education</h2>
            <div className="space-y-6">
              {/* Education Item */}
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    MSc in Human Computer Interaction
                  </h3>
                  <p className="text-gray-500">
                    University of Colombo, Sri Lanka
                  </p>
                  {/* Date for smaller screens */}
                  <p className="text-gray-900 mt-2 sm:hidden font-semibold">
                    Jan 2019 - Jan 2021
                  </p>
                </div>
                {/* Date for larger screens */}
                <div className="hidden sm:block text-gray-900 text-right font-semibold">
                  Jan 2019 - Jan 2021
                </div>
              </div>

              {/* Repeat Education Item */}
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Bachelor of Science in Graphic Design
                  </h3>
                  <p className="text-gray-500">
                    University of Colombo, Sri Lanka
                  </p>
                  {/* Date for smaller screens */}
                  <p className="text-gray-900 mt-2 sm:hidden font-semibold">
                    Jan 2014 - Jan 2019
                  </p>
                </div>
                {/* Date for larger screens */}
                <div className="hidden sm:block text-gray-900 text-right font-semibold">
                  Jan 2014 - Jan 2019
                </div>
              </div>
            </div>
          </div>

          {/* Licenses & Certifications Section */}
          <div className="bg-white p-10 rounded-lg shadow-md font-sans">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Licenses & Certifications
            </h2>
            <div className="space-y-6">
              {/* Certification Item */}
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Google UX Design Professional Certificate
                  </h3>
                  <p className="text-gray-500">Google</p>
                  {/* Date for smaller screens */}
                  <p className="text-gray-900 mt-2 sm:hidden font-semibold">
                    Jan 2022
                  </p>
                </div>
                {/* Date for larger screens */}
                <div className="hidden sm:block text-gray-900 text-right font-semibold">
                  Jan 2022
                </div>
              </div>

              {/* Repeat Certification Item */}
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Certified User Experience Professional (CUXP)
                  </h3>
                  <p className="text-gray-500">CUXP</p>
                  {/* Date for smaller screens */}
                  <p className="text-gray-900 mt-2 sm:hidden font-semibold">
                    Jan 2021
                  </p>
                </div>
                {/* Date for larger screens */}
                <div className="hidden sm:block text-gray-900 text-right font-semibold">
                  Jan 2021
                </div>
              </div>
            </div>
          </div>
          {/* Skills Section */}
          <div className="bg-white p-10 rounded-lg shadow-md font-sans">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {[
                "UX Design",
                "UI Design",
                "Wireframing",
                "Prototyping",
                "User Research",
                "Visual Design",
                "Front-end Development",
              ].map((skill) => (
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
          <div className="bg-white p-10 rounded-lg shadow-md font-sans">
            <h2 className="text-xl font-bold text-blue-800 mb-4 ">Tools</h2>
            <div className="flex flex-wrap gap-4 ">
              {[
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
              ].map((tool) => (
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
          <div className="bg-white p-10 rounded-lg shadow-md font-sans ">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Angular JS",
                "React JS",
                "Bootstrap",
                "Git",
              ].map((tech) => (
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CandidateProfile;
