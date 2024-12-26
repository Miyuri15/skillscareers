import DashboardCard from "@/components/admin/DashboaedCard";
import HeaderBar from "@/components/admin/HeaderBar";
import Graph from "@/components/admin/JobPostGraph";
import JobPostGraph from "@/components/admin/JobPostGraph";
import SideMenu from "@/components/admin/SideMenu";
import Image from "next/image";

export default function AdminDashboard() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
          <HeaderBar />
          <DashboardCard />
          <Graph />
          {/* Help & Contact */}
          <div className="bg-white rounded-lg mt-8 p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#001571]">
                Help & Contact Inquiries
              </h3>
              <button className="text-[#001571] text-sm font-semibold">
                View All
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/company.png"
                    alt="Company Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[#001571]">
                      Codezela Technologies
                    </p>
                    <p className="text-sm text-gray-400">Recruiter</p>
                  </div>
                </div>
                <button className="text-sm text-[#001571] font-semibold">
                  View Now
                </button>
              </div>
              {/* Repeat similar blocks for other inquiries */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
