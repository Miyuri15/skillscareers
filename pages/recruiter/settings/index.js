import HeaderBar from "@/components/recruiter/HeaderBar";
import SideMenu from "@/components/recruiter/SideMenu";
import RecruiterSettings from "@/components/RecruiterSettings/Settings";

export default function CandidateSettingsPage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <RecruiterSettings/>
        </div>
      </div>
    </>
  );
}
