import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import CandidateMyProfile from "@/components/CandidateMyProfile/MyProfile";

export default function CandidateMyProfilePage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <div className="bg-white rounded-xl p-6 ">
                <h1 className="font-bold mb-6 text-[#001571]">My Profile</h1>
            <CandidateMyProfile/>
            </div>
        </div>
      </div>
    </>
  );
}
