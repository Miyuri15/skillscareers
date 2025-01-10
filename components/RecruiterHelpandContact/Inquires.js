import Image from "next/image";
import { useState } from "react";
import ViewInquireForm from "./ViewInquireForm";
import AddInquireForm from "./AddInquire";

export default function RecruiterInquires() {
  const [showViewInquire, setShowViewInquire] = useState(false);
  const [showAddInquire, setShowAddInquire] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6; // Updated to 10 rows per page
  const totalPages = 15;

  // Example inquiries from both recruiters and candidates
  const solvedData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: "Request System Modification",
    status: "Solved",
    date: "09 AUG 2024",
    time: "03 : 45 : 25 PM",
  }));

  const pendingData = Array.from(
    { length: (rowsPerPage * totalPages) / 2 },
    (_, index) => ({
      id: index + 1 + solvedData.length,
      title: "Request System Modification",
      status: "Pending",
      date: "09 AUG 2024",
      time: "02 : 45 : 25 PM",
    })
  );

  // Combine both recruiters and candidates data and reverse to display the most recent first (.reverse())
  const data = [...solvedData, ...pendingData];

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
    <div className="p-6 bg-white rounded-xl">
      {/* Page Title */}
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-[#001571] text-xl font-bold mb-6">
          Help & Contact
        </h2>
        <button
          className="bg-[#001571] text-white px-8 py-2 rounded-lg font-medium mb-6"
          onClick={() => setShowAddInquire(true)}
        >
          + Inquire New
        </button>
      </div>

      <h1 className="text-xl font-bold text-[#001571] mb-4">My Inquiries</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="text-left text-sm font-medium text-[#8A93BE]">
              <th className="py-3 px-6 items-center w-1/4">Inquire Title</th>
              <th className="py-3 px-6 items-center w-1/5">Date</th>
              <th className="py-3 px-6 items-center w-1/5">Time</th>
              <th className="py-3 px-6 items-center w-1/5">Status</th>
              <th className="py-3 px-6 items-center w-1/5">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 font-semibold">
            {displayedInquires.map((item) => (
              <tr
                key={item.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="py-2 px-6 items-center">{item.title}</td>
                <td className="py-4 px-6 items-center">{item.date}</td>
                <td className="py-4 px-6 items-center">{item.time}</td>
                <td className="py-4 px-6 items-center">{item.status}</td>
                <td className="py-4 px-6 ">
                  <div className="flex justify-start">
                    <button
                      className="flex items-center bg-[#001571] text-white px-4 py-2 rounded-md"
                      onClick={() => setShowViewInquire(true)}
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
      {/* View Inquire Popup */}
      {showViewInquire && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
            <ViewInquireForm onClose={() => setShowViewInquire(false)} />
          </div>
        </div>
      )}

      {/* View Inquire Popup */}
      {showAddInquire && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
            <AddInquireForm onClose={() => setShowAddInquire(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
