import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopJobPosts(){
      const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 5;
    

    const posts = Array.from(
        { length: rowsPerPage },
        (_, index) => ({
          id: index + 1,
          logo:"/images/codezelalogo.png",
          recruiterName:"Codezela Technologies",
          position:"Ai Engineer",
          count:"36 Posts"
      })
      );
      const displayedTopJobPosts = posts.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      );
    
    return<>
    <div className="bg-white rounded-xl overflow-y-auto mt-4">
    <div className="flex flex-grow justify-between p-6">
    <p className="font-semibold">Top Job Posts</p>
    <Link href="/admin/analytics/TopJobs/recruiter">

    <div className="flex space-x-3">
        <p className="font-semibold">View All</p>
        <Image src="/images/arrowrightblue.png" alt="arrow" width={20} height={10}/>
    </div>
    </Link>
    </div>

    <div>

    <table className="w-full text-left border-collapse">
          <tbody>
            {displayedTopJobPosts.map((post) => (
              <tr
                key={post.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <div className="flex items-center">
                  <Image src={post.logo} alt="logo" width={40} height={20} className="pr-2 "/>
                  <p className="text-sm font-semibold">{post.recruiterName}</p>
                   </div></td>
                 
                <td className=" py-2 px-4 justify-end text-right text-sm font-semibold">{post.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
    </>
}