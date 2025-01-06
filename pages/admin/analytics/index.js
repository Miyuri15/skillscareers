import HeaderBar from "@/components/admin/HeaderBar";
import SideMenu from "@/components/admin/SideMenu";
import AdminAnalytics from "@/components/AdminAnalytic/Analytics";


export default function AdminAnalyticsPage(){
    return<>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <AdminAnalytics/>
        </div>
      </div>
    </>
}