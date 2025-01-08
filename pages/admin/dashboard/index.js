import DashboardCard from "@/components/admin/DashboaedCard";
import HeaderBar from "@/components/admin/HeaderBar";
import Help from "@/components/admin/Help";
import Graph from "@/components/admin/JobPostGraph";
import SideMenu from "@/components/admin/SideMenu";
import { Chart } from "chart.js";

export default function AdminDashboard() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
          <HeaderBar />
          <DashboardCard />
          <Graph />
          <Help/>
        </div>
      </div>
    </>
  );
}
