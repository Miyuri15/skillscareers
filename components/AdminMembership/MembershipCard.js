import Image from "next/image";

export default function MembershipCard() {
  const tabs = [
    {
      id: 1,
      title: "Basic Recruiter Package",
      value: 4875,
      icon: "/images/crown.png", // One image for basic
    },
    {
      id: 2,
      title: "Professional Recruiter Package",
      value: 2356,
      icon: ["/images/crown.png", "/images/crown.png"], // Two images for professional
    },
    {
      id: 3,
      title: "Enterprise Recruiter Package",
      value: 1120,
      icon: ["/images/crown.png", "/images/crown.png", "/images/crown.png"], // Three images for enterprise
    },
  ];

  return (
    <>
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="bg-white rounded-lg p-4 shadow-sm flex flex-col border-2 border-[#E6E8F1]"
          >
            <h3 className="text-[#8A93BE] font-semibold mb-2">{tab.title}</h3>
            <div className="text-3xl font-bold text-[#001571]">{tab.value}</div>

            {/* Render icons based on the tab type */}
            {Array.isArray(tab.icon) ? (
              <div className="flex space-x-2 mt-2">
                {tab.icon.map((imgSrc, index) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    alt={`icon-${index}`}
                    width={30}
                    height={30}
                    className="rounded"
                  />
                ))}
              </div>
            ) : (
              <Image
                src={tab.icon}
                alt="icon"
                width={30}
                height={50}
                className="rounded mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
