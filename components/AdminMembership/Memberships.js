import Image from "next/image";
import MembershipCard from "./MembershipCard";
import MembershipPlans from "./MembershipPlans";

export default function Membership() {
  return (
    <>
      <div className="p-5 bg-white rounded-xl">
        <p className=" text-[#001571] font-semibold text-lg mb-6">Memberships</p>
        <MembershipCard />
        {/* search bar */}
                <div className="flex-grow">
                  <div className="bg-[#E6E8F1] flex items-center pl-8 pr-4 py-4 rounded-lg shadow-sm w-full">
                    <Image
                      src="/images/search.png"
                      alt="Search"
                      width={20}
                      height={20}
                    />
                    <input
                      type="text"
                      placeholder="Search Memberships..."
                      className="ml-2 text-[#8A93BE] outline-none w-full bg-gray-200"
                    />
                  </div>
                </div>

                {/* Recruiters */}
                <MembershipPlans/>
        
      </div>
    </>
  );
}
