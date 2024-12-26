import Link from "next/link";
import { useState } from "react";


export default function SideMenu(){
    const [activeButton, setActiveButton] = useState("Dashboard");

    const menuItems = [
      { name: "Dashboard", href: "/admin/dashboard", icon: "/images/dashboardIcon.png" },
      { name: "Recruiters", href: "/admin/recruiters", icon: "/images/recruitersIcon.png" },
      { name: "Candidates", href: "/admin/candidates", icon: "/images/candidatesIcon.png" },
      { name: "Job Posts", href: "/admin/job-posts", icon: "/images/jobPostsIcon.png" },
      { name: "Analytics", href: "/admin/analytics", icon: "/images/analyticsIcon.png" },
      { name: "Memberships", href: "/admin/memberships", icon: "/images/membershipsIcon.png" },
      { name: "Announcements", href: "/admin/announcements", icon: "/images/announcementsIcon.png" },
      { name: "Press Releases", href: "/admin/press-releases", icon: "/images/pressReleasesIcon.png" },
      { name: "My Profile", href: "/admin/my-profile", icon: "/images/myProfileIcon.png" },
      { name: "Help & Contact", href: "/admin/help-contact", icon: "/images/helpContactIcon.png" },
      { name: "Settings", href: "/admin/settings", icon: "/images/settingsIcon.png" },
      { name: "Logout", href: "/logout", icon: "/images/logoutIcon.png" },
    ];
return(
    <>
    
            {/* Side Menu */}
            <div className="bg-white w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/4 min-h-screen p-5 rounded-lg">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveButton(item.name)}
                className={`flex items-center p-3 rounded-lg font-sans ${
                  activeButton === item.name
                    ? "bg-[#001571] text-white"
                    : "bg-white text-[#001571] hover:bg-gray-100"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`h-5 w-5 mr-6 lg:mr-6 md:mr-6 sm:mr-3 ml-2 sm:ml-0 lg:ml-2 md:ml-2 ${
                    activeButton === item.name ? "filter invert brightness-0" : ""
                  }`}
                />
                <Link href={item.href} className="text-sm font-medium">
                  {item.name}
                </Link>
              </button>
            ))}
          </div>
        </div>

    </>
)  
}