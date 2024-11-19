import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import SimilarJobs from './SimilarJobs';
import { useState } from 'react';
import JobApplicationForm from './JobApplicationForm';
import Link from 'next/link';

const SingleJobDetails = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs = [
    {
      id: 1,
      logo: '/images/AerFinLogo.png',
      date: '08 Jan 2024',
      title: 'Senior UX/UI Designer',
      company: 'InnovateTech Solutions',
      location: 'New York, NY',
      description:
        'Join our creative team to design intuitive user experiences and interfaces for cutting-edge tech solutions. Ideal for someone with a passion for modern design trends.',
      employmentType: ['Full Time', 'On Site'],
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-full mx-auto bg-white shadow-md rounded-md p-4 md:p-10">
        <div className="space-y-6">
          {jobs.map((job) => (
            <div className="flex items-center justify-between mb-8 mt-5" key={job.id}>
              {/* Left: Logo */}
              <Image src={job.logo} alt="logo" width={80} height={40} />

              {/* Right: Date */}
              <p className="text-blue-950">{job.date}</p>
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">{jobs[0].title}</h1>
              <p className="text-gray-800 font-semibold mt-2">
                {jobs[0].company} | {jobs[0].location}
              </p>
            </div>

            <div className="flex flex-wrap space-x-2">
              {jobs[0].employmentType.map((type, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs rounded ${
                    type === 'Full Time' ? 'bg-[#001571] text-white' : 'bg-[#00B6B4] text-white'
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/jobSearch">
              <button className="px-5 py-2 text-blue-950 border-2 border-blue-900 flex items-center space-x-2">
                <span>View Company Profile</span>
                <FaArrowRight className="text-blue-900" />
              </button>
            </Link>

            <button
              onClick={() => setShowApplicationForm(true)}
              className="px-4 py-2 bg-blue-950 text-white w-full md:w-auto"
            >
              Apply Now
            </button>
          </div>

          <div className="border-t border-gray-300 my-6"></div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Job Description</h2>
              <p className="text-gray-700">{jobs[0].description}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Key Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Design engaging and user-friendly interfaces for web and mobile applications.</li>
                <li>Conduct user research, wireframing, prototyping, and usability testing to improve designs.</li>
                <li>Collaborate with cross-functional teams including developers, product managers, and marketers.</li>
                <li>Maintain and evolve design systems to ensure consistency across all platforms.</li>
                <li>Stay updated with the latest design trends, tools, and technologies.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Required Qualifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>5+ years of experience in UX/UI design.</li>
                <li>Strong portfolio showcasing user-centered design and problem-solving skills.</li>
                <li>Proficiency in design tools like Figma, Sketch, and Adobe Creative Suite.</li>
                <li>Experience with HTML/CSS and front-end frameworks is a plus.</li>
                <li>Excellent communication skills and ability to work in a team environment.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Perks & Benefits</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Remote work flexibility.</li>
                <li>Health, dental, and vision insurance.</li>
                <li>401(k) plan with company match.</li>
                <li>Professional development opportunities.</li>
                <li>Flexible vacation policy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SimilarJobs />

      {/* Job Application Form Popup */}
      {showApplicationForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
            <button
              onClick={() => setShowApplicationForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <JobApplicationForm onClose={() => setShowApplicationForm(false)} />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SingleJobDetails;
