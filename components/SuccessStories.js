import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SuccessStoryCard from "./SuccessStoryCard";
import Image from "next/image";
import News from "./News";

const testimonials = [
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: "Sarah Collins",
    position: "Senior Full-Stack Developer",
    company: "Inova Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: "James Lee",
    position: "Software Engineer",
    company: "Tech Innovators",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: "Emily Davis",
    position: "Product Manager",
    company: "Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: "Michael Brown",
    position: "Data Analyst",
    company: "Analytics Hub",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: "Sophia Wilson",
    position: "UX Designer",
    company: "Design Experts",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 3 ? 0 : prev + 3
    );
  };

  return (
    <div className="relative w-full text-gray-800 ">
      {/* Image Group as Background */}
      <div className="relative inset-0 -z-10 md:block sm:hidden overflow-hidden">
        {/* Line 2 Background */}
        <Image
          src="/images/line2.png"
          alt="line1 Background"
          width={400}
          height={400}
          className="absolute h-[5200px] w-[30vw] top-0 left-[-700px] -rotate-12 z-0 -translate-y-1/2 origin-top-right"
        />
 

        {/* Line 1 Background (small one on the right side)*/}

        <Image
          src="/images/line1.png"
          alt="line1 Background"
          width={800}
          height={400}
          className="absolute h-[2000px] top-0 right-[-400px] z-0 transform -translate-x-1/2 -translate-y-1/2 "
        />


      </div>
      {/* Foreground Content */}
      <div className="relative p-10">
        {/* Heading Section */}
        <div className="pt-20 flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">
            Success Stories from Our Community
          </h2>
          <a
            href="#"
            className="text-blue-900 mb-10 font-bold text-sm sm:text-base flex items-center"
          >
            View All
            <img
              src="/images/arrowBlue.png"
              alt="View All"
              className="h-5 w-5 ml-2"
            />
          </a>
        </div>

        {/* Slider Section */}
        <div className="flex items-center justify-between px-2 sm:px-4 md:px-4">
          <button
            onClick={handlePrev}
            className="text-blue-900 hover:text-blue-700 p-2 md:p-3"
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <SuccessStoryCard key={index} testimonial={testimonial} />
              ))}
          </div>

          <button
            onClick={handleNext}
            className="text-blue-900 hover:text-blue-700 p-2 md:p-3"
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array(Math.ceil(testimonials.length / 3))
            .fill()
            .map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full ${
                  index === Math.floor(currentIndex / 3)
                    ? "bg-blue-900"
                    : "bg-gray-300"
                } cursor-pointer`}
              />
            ))}
        </div>
      </div>
      <News />
    </div>
  );
};

export default SuccessStories;
