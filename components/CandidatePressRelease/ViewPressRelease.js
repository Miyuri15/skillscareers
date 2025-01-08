import { useRouter } from "next/router";
import SideMenu from "../admin/SideMenu";
import PressReleasePage from "./PressReleasePage";
import HeaderBar from "../Candidate/HeaderBar";

const ViewPressRelease = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
          <div className="bg-gray-100 w-full min-h-screen flex p-5">
            <SideMenu />
            <div className="flex-1 px-5">
                <HeaderBar/>
                <PressReleasePage/>
            </div>
          </div>
    
    </>
  );
};

export default ViewPressRelease;
