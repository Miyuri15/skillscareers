import HeaderBar from "@/components/admin/HeaderBar";
import SideMenu from "@/components/admin/SideMenu";
import AdminJobPosts from "@/components/AdminJobPosts/JobPosts";

export default function JobPostsPage(){
    return<>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <AdminJobPosts/>
        </div>
      </div>
    </>
}