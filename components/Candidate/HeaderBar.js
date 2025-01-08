import Image from "next/image";

export default function HeaderBar() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Left Section */}
        <div className="bg-[#001571] text-white py-4 px-8 rounded-xl font-semibold">
          SKILLS CAREERS
        </div>

        {/* Middle Section */}
        <div className="flex-grow mx-8">
          <div className="bg-white flex items-center pl-8 pr-4 py-4 rounded-lg shadow-sm w-full">
            <Image
              src="/images/search.png"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search Job Listings..."
              className="ml-2 text-gray-500 outline-none w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center bg-white px-5 py-1 rounded-lg shadow-sm">
          <div className="text-left mr-4">
            <p className="font-semibold text-[#001571]">Skills Careers</p>
            <p className="text-sm text-gray-400">Candidate</p>
          </div>
          <Image
            src="/images/dp1.jpeg"
            alt="Admin Profile"
            width={50}
            height={50}
            className="rounded-md border-2 border-[#001571]"
          />
        </div>
      </div>
    </>
  );
}
