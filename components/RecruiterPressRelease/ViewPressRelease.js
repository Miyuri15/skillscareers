import { useRouter } from "next/router";
import PressReleasePage from "./PressReleasePage";
import SideMenu from "../recruiter/SideMenu";
import HeaderBar from "../recruiter/HeaderBar";

const ViewPressRelease = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
          <div className="bg-gray-100 w-full min-h-screen flex p-5">
            <SideMenu/>
            <div className="flex-1 px-5">
              <HeaderBar/>
                <PressReleasePage/>
            </div>
          </div>
    
    </>
  );
};

export default ViewPressRelease;
