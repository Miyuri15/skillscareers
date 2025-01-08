import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import ViewLatestApplicationForm from "@/components/CandidateMyApplications/ViewLatestApplicationForm";

export default function ViewApplicationPage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <ViewLatestApplicationForm/>
        </div>
      </div>
    </>
  );
}
