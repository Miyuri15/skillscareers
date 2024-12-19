import Image from "next/image";
import Link from "next/link";
import {
  FaLaptopCode,
  FaTruck,
  FaMoneyCheckAlt,
  FaChalkboardTeacher,
  FaUsers,
  FaChartLine,
  FaHeartbeat,
} from "react-icons/fa";

export default function Category() {
  const categories = [
    {
      name: "Technology & Development",
      icon: "/images/technologyDevelopment.png",
    },
    { name: "Operations & Logistics", icon: "/images/operationsLogistics.png" },
    { name: "Finance & Accounting", icon: "/images/educationTraining.png" },
    { name: "Education & Training", icon: "/images/educationTraining.png" },
    { name: "Human Resources", icon: "/images/hr.png" },
    { name: "Marketing & Sales", icon: "/images/marketingSales.png" },
    { name: "Health & Wellness", icon: "/images/hr.png" },
    { name: "Human Resources", icon: "/images/hr.png" },
    { name: "Human Resources", icon: "/images/hr.png" },
  ];

  return (
    <div className="py-10 sm:p-6 md:p-10 mt-4 mb-6 px-5 ">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className=" text-xl sm:text-2xl font-bold text-[#33448D]">
          Categories
        </h2>
        <Link
          href="/categories"
          className="text-[#33448D] mb-10 flex items-center space-x-1 font-bold text-md sm:text-base"
        >
          <span>View All</span>
          <img
            src="/images/arrowBlue.png"
            alt="Arrow Icon"
            className="w-4 h-4 object-contain"
          />
        </Link>
      </div>

      <div className=" space-y-6 sm:space-y-8">
        {[0, 3, 6].map((rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-x-6">
              {categories
                .slice(rowIndex, rowIndex + 3)
                .map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <div className="text-2xl sm:text-3xl text-[#33448D]">
                      <Image
                        src={category.icon}
                        alt={category.label}
                        width={40}
                        height={50}
                        className="mx-auto mb-1 mr-2 "
                      />
                    </div>
                    <span className="text-base sm:text-lg text-[#33448D] font-medium">
                      {category.name}
                    </span>
                  </div>
                ))}
            </div>
            {/* Divider */}
            {rowIndex < 9 && (
              <div className="border-t border-gray-300 mt-4 sm:mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
