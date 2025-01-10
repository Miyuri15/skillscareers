import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function LatestApplications() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Updated to 10 rows per page
  const totalPages = 15;

  // Example inquiries from both recruiters and candidates
  const approvedData = Array.from({ length: 1 }, (_, index) => ({
    id: index + 1,
    application: "125",
    position:"Software Engineer",
    status: "Approved",
    date: "09 AUG 2024",
  }));

  const pendingData = Array.from(
    { length: (rowsPerPage * totalPages) / 2 },
    (_, index) => ({
      id: index + 1 + approvedData.length,
      application: "125",
      position:"Software Engineer",
      status: "Pending",
      date: "09 AUG 2024",
    })
  );

  // Combine both approved and pending data and reverse to display the most recent first (.reverse())
  const data = [...approvedData, ...pendingData];

  const displayedLatestApplications = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );


  return (
    <div className="p-6 bg-white rounded-xl mt-5">

    <div className="flex flex-grow justify-between p-6">
    <p className="font-semibold text-[#001571] text-lg">Latest Applications</p>
    <Link href="/candidate/myApplications">

    <div className="flex space-x-3">
        <p className="font-semibold text-[#001571]">View All</p>
        <Image src="/images/arrowrightblue.png" alt="arrow" width={20} height={10}/>
    </div>
    </Link>
    </div>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="text-left text-sm font-medium text-[#8A93BE]">
              <th className="py-3 px-6 items-center w-1/4">Position</th>
              <th className="py-3 px-6 items-center w-1/4">Published Date</th>
              <th className="py-3 px-6 items-center w-1/4"> Applications</th>
              <th className="py-3 px-6 items-center w-1/4">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 font-semibold">
            {displayedLatestApplications.map((item) => (
              <tr
                key={item.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="py-1 px-6  items-center">
                  {item.position}
                </td>
                <td className="py-1 px-6 items-center">{item.date}</td>
                <td className="py-1 px-6 items-center">{item.application}</td>
                <td className="py-1 px-7 justify-center">
                <div className="flex justify-between space-x-4">
                <Link href="/candidate/myApplications/ViewApplication">

                  <button
                    className="flex items-center bg-[#001571] text-white px-4 py-2 rounded-md"
                  >
                    View Now
                    <Image
                      src="/images/arrowrightwhite.png"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </button>
                  </Link>
                  <button
                    className="flex items-center justify-end bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    <Image
                      src="/images/eye-slash.png"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                                        Restrict

                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
