import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import CandidateInquires from "@/components/CandidateHelpandContact/Inquires";

export default function CandidateHelpandContactPage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
        <HeaderBar/>
            <CandidateInquires/>
        </div>
      </div>
    </>
  );
}
