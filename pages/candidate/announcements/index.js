import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import Announcements from "@/components/CandidateAnnouncements/Announcements";

export default function CandidateAnnouncementPage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <Announcements/>
        </div>
      </div>
    </>
  );
}
