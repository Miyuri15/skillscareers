import HeaderBar from "@/components/Candidate/HeaderBar";
import SideMenu from "@/components/Candidate/SideMenu";
import PressReleases from "@/components/CandidatePressRelease/PressReleases";

export default function CandidatePressReleasePage() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <PressReleases/>
        </div>
      </div>
    </>
  );
}
