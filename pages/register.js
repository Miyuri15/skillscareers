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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-70"></div>

        {/* Logo */}
        <div className="absolute top-9 left-9 cursor-pointer w-90 h-90">
          <img src="/images/logo.png" alt="Logo" className="w-180 h-40" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start justify-end p-10 bg-black bg-opacity-0 text-white h-full w-full">
          <h1 className="text-4xl font-bold mb-3">Register</h1>
          <h2 className="text-5xl font-bold mb-4">SKILLS CAREERS</h2>
          <p className="text-md leading-relaxed mb-9">
            Welcome to Skill Careers, where finding your dream job or the right
            talent is just a click away.
          </p>
        </div>
      </div>
      {/* Right Side with Form */}
      <div className="flex flex-col justify-center md:w-2/5 p-8">
        <div className="flex flex-col items-center mb-4">
          <p className="text-blue-900 text-center text-md font-semibold  mb-4 ">
            Create your free account to explore job listings, connect with
            recruiters, and take the next step in your career.{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center p-8">
          {/* Job Seeker / Recruiter Selection */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setIsRecruiter(false)}
              className={` w-full rounded-lg ${
                !isRecruiter
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-blue-900"
              }`}
            >
              <span className="flex items-center justify-center ">
                <img
                  src="/images/tag-user.png"
                  alt="Login"
                  className="h-6 w-6 mr-5 "
                />
                Job Seeker
                <img
                  src="/images/Livello_1.png"
                  alt="Login"
                  className="h-6 w-6 ml-7"
                />
              </span>
            </button>
            <button
              onClick={() => setIsRecruiter(true)}
              className={`p-4 w-full rounded-lg ${
                isRecruiter
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-blue-900"
              }`}
            >
              <span className="flex items-center justify-center ">
                <img
                  src="/images/buliding.png"
                  alt="register"
                  className="h-6 w-6 mr-5 "
                />
                Recruiter
                <img
                  src="/images/Livello_1.png"
                  alt="register"
                  className="h-6 w-6 ml-7"
                />
              </span>
            </button>
          </div>
          <h2 className="text-xl text-center text-blue-900 font-bold mb-6 p-4">
            Join Skill Careers and Unlock New Opportunities!{" "}
          </h2>
          {/* Conditional Form Rendering */}
          {isRecruiter ? <RecruiterRegister /> : <JobSeekerRegister />}
        </div>
      </div>
    </div>
  );
};

export default Register;
