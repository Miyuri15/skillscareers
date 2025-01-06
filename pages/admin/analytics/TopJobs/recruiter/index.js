import HeaderBar from "@/components/admin/HeaderBar";
import SideMenu from "@/components/admin/SideMenu";
import JobSearch from "@/components/AdminAnalytic/JobSearch";


export default function TopJobRecruiter(){
    return<>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <JobSearch/>
        </div>
      </div>
    </>
}