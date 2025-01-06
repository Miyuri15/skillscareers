import HeaderBar from "@/components/admin/HeaderBar";
import SideMenu from "@/components/admin/SideMenu";
import Membership from "@/components/AdminMembership/Memberships";

export default function AdminMemberships(){
    return<>
      <div className="bg-gray-100 w-full min-h-screen flex p-5">
        <SideMenu />
        <div className="flex-1 px-5">
            <HeaderBar/>
            <Membership/>
        </div>
      </div>
    </>
}