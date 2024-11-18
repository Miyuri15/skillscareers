import React, { useState } from "react";
import JobSeekerRegister from "@/components/JobSeekerRegister";
import RecruiterRegister from "@/components/RecruiterRegister";

const Register = () => {

    const [isRecruiter, setIsRecruiter] = useState(false);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side with Image and Intro Text */}
      <div
        className="relative hidden md:flex md:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loginscrn.jpg')" }}
      >
        {/* Logo */}
        <div className="absolute top-9 left-9 cursor-pointer w-90 h-90">
          <img src="/images/logo.png" alt="Logo" className="w-180 h-40" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start justify-end p-10 bg-black bg-opacity-0 text-white h-full w-full ">
          <h1 className="text-4xl font-bold mb-3 ">Register</h1>
          <h2 className="text-5xl font-bold mb-4 ">SKILLS CAREERS</h2>
          <p className="text-md leading-relaxed mb-9 ">
            Welcome to Skill Careers, where finding your dream job or the right
            talent is just a click away.
          </p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="flex flex-col justify-center md:w-2/5 p-8">
        <div className="flex flex-col items-center mb-4">

          <h2 className="text-2xl text-blue-900 font-semibold text-center mb-2 ">
            Welcome Back! Let's Get You Started.
          </h2>
          <p className="text-blue-900 text-center text-m mt-4 mb-4 ">
            Log in to access your account and continue your career journey or
            recruitment process.
          </p>
        </div>

        <div className="flex flex-col justify-center p-8">
        {/* Job Seeker / Recruiter Selection */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setIsRecruiter(false)}
            className={`p-4 w-full rounded-lg ${
              !isRecruiter ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900"
            }`}
          >
            Job Seeker
          </button>
          <button
            onClick={() => setIsRecruiter(true)}
            className={`p-4 w-full rounded-lg ${
              isRecruiter ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900"
            }`}
          >
            Recruiter
          </button>
        </div>
        <h2 className="text-xl text-center text-blue-900 font-bold mb-4">
          Join Skill Careers and Connect with the Best Talent Today!
        </h2>
        {/* Conditional Form Rendering */}
        {isRecruiter ? <RecruiterRegister /> : <JobSeekerRegister />}
      </div>

      </div>
    </div>
  );
};

export default Register;
