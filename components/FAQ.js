
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "How do I create an account on Skill Careers?",
    answer:
      "Creating an account is simple. Click on the 'Sign Up' button on the homepage, provide your email address, create a password, and fill in your basic details. You can also sign up using your Google or LinkedIn account for quicker registration.",
  },
  {
    question: "How can I apply for jobs on Skill Careers?",
    answer: "To apply for jobs, simply browse the job listings and click 'Apply' on the jobs that interest you.",
  },
  {
    question: "Is there a cost to use Skill Careers as a job seeker?",
    answer: "No, Skill Careers is free to use for job seekers.",
  },
  {
    question: "How do I update my profile or resume?",
    answer: "You can update your profile or resume by going to your account settings.",
  },
  {
    question: "Can recruiters contact me directly through Skill Careers?",
    answer: "Yes, recruiters can contact you directly through the platform if your profile is set to public.",
  },
  {
    question: "What kind of jobs are available on Skill Careers?",
    answer: "Skill Careers offers a variety of jobs across different industries, including tech, finance, healthcare, and more.",
  },
  {
    question: "How do I post a job as a recruiter?",
    answer: "Recruiters can post jobs by creating an account and navigating to the 'Post a Job' section.",
  },
  {
    question: "Are there any tools to help me stand out as a job seeker?",
    answer: "Yes, Skill Careers provides tools such as resume building tips and interview preparation resources.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative py-20 px-10 bg-gray-50 lg:min-h-screen ">
      <div className="max-w-full mx-auto">
      <div className="pt-5 flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-10">
          FAQs
        </h2>
        <a
          href="/jobSearch"
          className="text-blue-900 font-bold text-sm sm:text-base flex items-center"
        >
          View All
          <img
            src="/images/arrowBlue.png"
            alt="View All"
            className="h-5 w-5 ml-2"
          />
        </a>
      </div>
        <div className="border-t border-gray-300">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-gray-900 hover:bg-gray-100"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#33448D]" />
                ) : (
                  <FaChevronDown className="text-[#33448D]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-800">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
