import Link from "next/link";
import { useRouter } from "next/router";

export default function SideMenu() {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", href: "/candidate/dashboard", icon: "/images/dashboardiconblue.png" },
    { name: "Search Jobs", href: "/candidate/searchJobs", icon: "/images/search.png" },
    { name: "Recruiters", href: "/candidate/recruiters", icon: "/images/recruitersIcon.png" },
    { name: "My Applications", href: "/candidate/myApplications", icon: "/images/myapplications.png" },
    { name: "Announcements", href: "/candidate/announcements", icon: "/images/announcementsIcon.png" },
    { name: "Press Releases", href: "/candidate/pressRelease", icon: "/images/pressReleasesIcon.png" },
    { name: "My Profile", href: "/candidate/myProfile", icon: "/images/myProfileIcon.png" },
    { name: "Help & Contact", href: "/candidate/help-contact", icon: "/images/helpContactIcon.png" },
    { name: "Settings", href: "/candidate/settings", icon: "/images/settingsIcon.png" },
    { name: "Logout", href: "/logout", icon: "/images/logoutIcon.png" },
  ];

  return (
    <>
      {/* Side Menu */}
      <div className="bg-white w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/4 min-h-screen p-5 rounded-lg">
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center py-2 px-3 rounded-lg font-sans ${
                router.pathname === item.href
                  ? "bg-[#001571] text-white"
                  : "bg-white text-[#001571] hover:bg-gray-100"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`h-5 w-5 mr-6 lg:mr-6 md:mr-6 sm:mr-3 ml-2 sm:ml-0 lg:ml-2 md:ml-2 ${
                  router.pathname === item.href ? "filter invert brightness-0" : ""
                }`}
              />
              <Link href={item.href} className="text-md font-medium">
                {item.name}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
