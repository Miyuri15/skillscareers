import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function DashboardCard() {
  const tabs = [
    {
      id: "Applications",
      title: "Applications",
      value: 12,
      icon: "/images/applications.png",
      change: "+6.5%",
      time: "Since Last Month",
    },
    {
      id: "Impressions",
      title: "Impressions",
      value: 221,
      icon: "/images/impressions.png",
      change: "+1.5%",
      time: "Since Last Month",
    },
    {
      id: "Profile Views",
      title: "Profile Views",
      value: 8,
      icon: "/images/profileviews.png",
      change: "+1.5%",
      time: "Since Last Month",
    },
  ];
  return (
    <>
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="bg-white rounded-lg p-4 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-row space-x-2">
                <h3 className="text-[#a1a9c8] font-semibold">{tab.title}</h3>
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
