import Image from "next/image";
import { BsArrowUpShort } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

export default function DashboardCard() {
  const tabs = [
    {
      id: "Jobs",
      title: "Jobs",
      value: 18,
      icon: "/images/flag.png",
      change: "+2.5%",
      time: "Since Yesterday",
    },
    {
      id: "Applications",
      title: "Applications",
      value: 1889,
      icon: "/images/application.png",
      change: "+6.5%",
      time: "Since Yesterday",
    },
    {
      id: "Recruiters",
      title: "Recruiters",
      value: 428,
      icon: "/images/recruiters.png",
      change: "+1.5%",
      time: "Since Last Month",
    },
    {
      id: "Candidates",
      title: "Candidates",
      value: 5670,
      icon: "/images/users.png",
      change: "+1.5%",
      time: "Since Last Month",
    },
  ];
  return (
    <>
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="bg-white rounded-lg p-4 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-row space-x-2">
                <h3 className="text-gray-500 font-semibold">{tab.title}</h3>
                <Image
                  src="/images/arrowRight.png"
                  alt="arrow"
                  width={20}
                  height={10}
                />
              </div>
              <Image src={tab.icon} alt={tab.title} width={30} height={30} />
            </div>
            <div className="text-3xl font-bold text-[#001571]">
              {tab.value}
            </div>
            <div className="flex items-center  text-sm mt-2">
            <FaArrowUp/>
              <span className="mr-1 text-green-500">
              {tab.change}

              </span>
              <p className="text-gray-800 text-xs">{tab.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
