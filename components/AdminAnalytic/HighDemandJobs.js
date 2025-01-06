import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HighDemandJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = 15;

  const posts = Array.from({ length: rowsPerPage * totalPages }, (_, index) => ({
    id: index + 1,
    logo: "/images/codezelalogo.png",
    recruiterName: "Codezela Technologies",
    position: "AI Engineer",
    count: "432 Applications",
    date: "20 AUG 2024",
  }));

  const displayedHighDemandPosts = posts.slice(
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
    <>
      <div className="bg-white rounded-xl overflow-y-auto mt-4">
        <p className="font-3xl text-[#001571] font-bold p-6">Analytics</p>
        <div className="p-6">
          <p className="font-semibold mb-5">High Demand Job</p>

          <div>
            <table className="w-full text-left border-collapse">
              <thead className="text-md text-[#8A93BE]">
                <tr>
                  <th className="px-4 py-2">Position</th>
                  <th className="px-4 py-2 text-right">Date Posted</th>
                  <th className="px-4 py-2 text-right">Recruiter Name</th>
                  <th className="px-4 py-2 text-right">Applications</th>
                </tr>
              </thead>
              <tbody>
                {displayedHighDemandPosts.map((post) => (
                  
                  <tr
                    key={post.id}
                    className="border-b text-gray-700 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      <Link
                        href={`/admin/analytics/highDemandJobs/jobPost?id=${post.id}`}
                      >
                        <p className="text-sm font-semibold">
                          {post.position}
                        </p>
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-right text-sm font-semibold">
                      {post.date}
                    </td>
                    <td className="px-4 py-2 text-right text-sm font-semibold">
                      {post.recruiterName}
                    </td>
                    <td className="px-4 py-2 text-right text-sm font-semibold">
                      {post.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 items-center space-x-2">
            <button
              className="px-3 py-1 rounded-lg font-semibold"
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
              className="px-3 py-1 rounded-lg text-gray-600"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
