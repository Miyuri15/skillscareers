import LatestApplications from "@/components/Candidate/ApplicationsDashboard";
import DashboardCard from "@/components/Candidate/DashboaedCard";
import Graph from "@/components/Candidate/Graph";
import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";

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
