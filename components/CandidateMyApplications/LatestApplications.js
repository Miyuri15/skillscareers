import Image from "next/image";
import { useState } from "react";
import ViewLatestApplicationForm from "./ViewLatestApplicationForm";
import Link from "next/link";

export default function LatestApplications() {
  const [showViewLatestApplication, setShowViewLatestApplication] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Updated to 10 rows per page
  const totalPages = 15;

  // Example inquiries from both recruiters and candidates
  const approvedData = Array.from({ length: 1 }, (_, index) => ({
    id: index + 1,
    recruiterName: "Codezela Technologies",
    position:"Software Engineer",
    status: "Approved",
    date: "09 AUG 2024",
  }));

  const pendingData = Array.from(
    { length: (rowsPerPage * totalPages) / 2 },
    (_, index) => ({
      id: index + 1 + approvedData.length,
      recruiterName: "Codezela Technologies",
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
    <div className="p-6 bg-white rounded-xl">
      <h1 className="text-xl font-bold text-[#001571] mb-4">
        Latest Applications
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="text-left text-sm font-medium text-[#8A93BE]">
              <th className="py-3 px-6 items-center w-1/5">Position</th>
              <th className="py-3 px-6 items-center w-1/5">Recruiter Name</th>
              <th className="py-3 px-6 items-center w-1/5">Applied Date</th>
              <th className="py-3 px-6 items-center w-1/5">Status</th>
              <th className="py-3 px-6 items-center w-1/5">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 font-semibold">
            {displayedLatestApplications.map((item) => (
              <tr
                key={item.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="py-2 px-6  items-center">
                  {item.position}
                </td>
                <td className="py-2 px-6 items-center">{item.recruiterName}</td>
                <td className="py-2 px-6 items-center">{item.date}</td>
                <td className="py-2 px-6 items-center">{item.status}</td>
                <td className="py-2 px-6 flex justify-start">
                  <Link href="/candidate/myApplications/ViewApplication">
                  <div className="flex justify-end">

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
                  </div>
                  </Link>
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
