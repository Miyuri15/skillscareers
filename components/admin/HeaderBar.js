import Image from "next/image";


export default function HeaderBar(){
    return<>
              {/* Header */}
              <div className="flex flex-row justify-between mb-8">
                <div className="flex items-center space-x-5">
                  <div className="bg-[#001571] text-white py-6 px-8 rounded-lg font-medium">
                    SKILLS CAREERS
                  </div>
                  <div className="bg-white flex items-center pl-8 pr-20 py-6 rounded-lg shadow-sm">
                    <Image
                      src="/images/search.png"
                      alt="Search"
                      width={20}
                      height={20}
                    />
                    <input
                      type="text"
                      placeholder="Search Job Listings..."
                      className="ml-2 text-gray-500 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center bg-white px-5 py-3 rounded-lg shadow-sm space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-[#001571]">Skills Careers</p>
                    <p className="text-sm text-gray-400">Admin</p>
                  </div>
                  <Image
                    src="/images/dp1.jpeg"
                    alt="Admin Profile"
                    width={50}
                    height={50}
                    className="rounded-full border border-[#001571]"
                  />
                </div>
              </div>
    
    </>
}