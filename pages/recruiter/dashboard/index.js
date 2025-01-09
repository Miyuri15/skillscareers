import LatestApplications from "@/components/recruiter/ApplicationsDashboard";
import DashboardCard from "@/components/recruiter/DashboaedCard";
import Graph from "@/components/recruiter/Graph";
import HeaderBar from "@/components/recruiter/HeaderBar";
import SideMenu from "@/components/recruiter/SideMenu";

export default function CandidateDashboard() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
          <HeaderBar/>
            <DashboardCard/>
            <Graph/>
            <LatestApplications/>
        </div>
      </div>
    </>
  );
}
