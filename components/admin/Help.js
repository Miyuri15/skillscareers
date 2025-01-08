import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Help() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Updated to 10 rows per page
  const totalPages = 15;

  // Example inquiries from both recruiters and candidates
  const recruiterData = Array.from({ length: 1 }, (_, index) => ({
    id: index + 1,
    profileImage: "/images/codezelalogo.png",
    profileName: "Codezela Technologies",
    userType: "Recruiter",
    date: "09 AUG 2024",
    time: "03 : 45 : 25 PM",
  }));

  const candidateData = Array.from(
    { length: 2 },
    (_, index) => ({
      id: index + 1 + recruiterData.length,
      profileImage: "/images/dp1.jpeg",
      profileName: "Aln Fernando",
      userType: "Candidate",
      date: "09 AUG 2024",
      time: "02 : 45 : 25 PM",
    })
  );

  // Combine both recruiters and candidates data and reverse to display the most recent first (.reverse())
  const data = [...recruiterData, ...candidateData];

  const displayedInquires = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Determine the range of visible pages
  const getVisiblePages = () => {
    const visiblePages = 4;
    const halfRange = Math.floor(visiblePages / 2);
    let start = Math.max(currentPage - halfRange, 1);
    let end = start + visiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - visiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="p-6 bg-white rounded-xl max-h-screen mt-5">
      <div className='flex flex-row justify-between'>
        <p className="font-5xl font-semibold text-[#001571] mb-4">Help & Contact</p>
        <Link href="/admin/help-contact">
        <div className="flex space-x-4 items-center">
        <p className="font-5xl font-semibold text-[#001571]">View All</p>
        <Image src="/images/arrowrightblue.png" alt="arrow" width={30} height={20}/>
        </div>
        </Link>

       </div>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="text-left text-sm font-medium text-[#8A93BE]">
              <th className="py-3 px-6">Profile Name</th>
              <th className="py-3 px-6">User Type</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 font-semibold">
            {displayedInquires.map((item) => (
              <tr
                key={item.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="py-2 px-6 flex items-center">
                  <Image
                    src={item.profileImage}
                    alt={item.profileName}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  {item.profileName}
                </td>
                <td className="py-4 px-6">{item.userType}</td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.time}</td>
                <td className="py-4 px-6 ">
                  <button
                    className="flex items-center bg-[#001571] text-white px-4 py-2 rounded-md justify-end"
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4 items-center space-x-2">
        <button
          className="px-3 py-1 rounded-lg  text-gray-600"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {getVisiblePages().map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page ? " text-[#001571]" : " text-gray-600"
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded-lg  text-gray-600"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}
