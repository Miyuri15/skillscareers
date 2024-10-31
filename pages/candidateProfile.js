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
} from "react-icons/fa";

const CandidateProfile = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen flex flex-col items-center justify-center p-4 ">
        {/* Profile Banner */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Background Image */}
            <Image
              src="/images/profilebg.jpg"
              alt="Background"
              width={1200}
              height={300}
              className="w-full h-48 object-cover"
            />
            {/* Profile Image */}
            <div className="absolute top-24 left-1/4 transform -translate-x-1/2">
              <Image
                src="/images/profiledp.jpg"
                alt="Profile Picture"
                width={120}
                height={120}
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-end mt-4 space-x-4 text-blue-900">
            <FaLinkedin size={24} className="cursor-pointer" />
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebook size={24} className="cursor-pointer" />
            <FaGithub size={24} className="cursor-pointer" />
            <FaDribbble size={24} className="cursor-pointer" />
          </div>

          {/* Profile Info */}
          <div className="p-6 pt-16 text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Alan Fernando
            </h2>
            <p className="text-gray-500">
              Senior UI/UX Engineer | AI ML Enthusiast
            </p>
            <p className="text-gray-500">Colombo 08, Sri Lanka</p>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button className="flex items-center px-4 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-800">
                <FaDownload className="mr-2" /> Download CV
              </button>
              <button className="flex items-center px-4 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-800">
                <FaEnvelope className="mr-2" /> Send an Email
              </button>
            </div>

            {/* Bio Section */}
            <div className="mt-8 text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Bio Section
              </h3>
              <p className="text-gray-600">
                I am a dedicated and results-driven Senior UI/UX Designer with
                over 5 years of experience in creating user-friendly and
                aesthetically pleasing digital products. My expertise lies in
                designing intuitive interfaces for web and mobile applications,
                conducting user research, and collaborating with
                cross-functional teams to deliver seamless user experiences. I
                have a passion for combining creativity with data-driven
                insights to solve complex design challenges.
              </p>
              <p className="text-gray-600 mt-4">
                Throughout my career, I have worked with innovative companies
                like InnovateTech Solutions and BrightPath Marketing, leading
                design projects that significantly improved user engagement and
                product usability. I am always eager to learn new trends in
                design and technology, and I strive to create designs that not
                only meet business goals but also delight users. In my free
                time, I enjoy mentoring junior designers, contributing to
                open-source projects, and exploring the latest developments in
                UX design.
              </p>
            </div>
          </div>
        </div>

            <div className="w-full max-w-4xl space-y-8 mt-3">

                {/* Experience Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
                    <div className="space-y-6">
                        {/* Experience Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Senior UX/UI Designer – InnovateTech Solutions</h3>
                                <p className="text-gray-500">Colombo, Sri Lanka</p>
                                <p className="text-gray-600 mt-2">
                                    Led the design of multiple high-profile web and mobile applications, focusing on enhancing user experience and product usability.
                                    Collaborated with cross-functional teams, including developers and product managers, to deliver seamless solutions.
                                    Conducted user research, created wireframes, and built interactive prototypes.
                                </p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2023 - Jan 2024
                            </div>
                        </div>

                        {/* Repeat Experience Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Senior UX/UI Designer – InnovateTech Solutions</h3>
                                <p className="text-gray-500">Colombo, Sri Lanka</p>
                                <p className="text-gray-600 mt-2">
                                    Led the design of multiple high-profile web and mobile applications, focusing on enhancing user experience and product usability.
                                    Collaborated with cross-functional teams, including developers and product managers, to deliver seamless solutions.
                                    Conducted user research, created wireframes, and built interactive prototypes.
                                </p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2023 - Jan 2024
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
                    <div className="space-y-6">
                        {/* Education Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">MSc in Human Computer Interaction</h3>
                                <p className="text-gray-500">University of Colombo, Sri Lanka</p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2019 - Jan 2021
                            </div>
                        </div>

                        {/* Repeat Education Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Bachelor of Science in Graphic Design</h3>
                                <p className="text-gray-500">University of Colombo, Sri Lanka</p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2014 - Jan 2019
                            </div>
                        </div>
                    </div>
                </div>

                {/* Licenses & Certifications Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Licenses & Certifications</h2>
                    <div className="space-y-6">
                        {/* Certification Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Google UX Design Professional Certificate</h3>
                                <p className="text-gray-500">Google</p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2022
                            </div>
                        </div>

                        {/* Repeat Certification Item */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Certified User Experience Professional (CUXP)</h3>
                                <p className="text-gray-500">CUXP</p>
                            </div>
                            <div className="text-gray-500 text-right">
                                Jan 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
      <Footer/>
    </>
  );
};

export default CandidateProfile;
