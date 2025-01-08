import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import CandidateSettings from "@/components/CandidateSettings/Settings";

export default function CandidateSettingsPage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <CandidateSettings/>
        </div>
      </div>
    </>
  );
}
