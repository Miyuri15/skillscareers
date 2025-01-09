import HeaderBar from "@/components/recruiter/HeaderBar";
import SideMenu from "@/components/recruiter/SideMenu";
import ReceivedApplications from "@/components/RecruiterRecievedApplications/RecievedApplications";

export default function ReceivedApplicationPage(){
    return<>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <ReceivedApplications/>
        </div>
      </div>
    </>
}