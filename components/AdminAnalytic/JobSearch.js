import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JobSearch() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = 15;

  const jobs = Array.from(
    { length: rowsPerPage },
    (_, index) => ({
      id: index + 1,
      logo:"/images/codezelalogo.png",
      recruiterName:"Codezela Technologies",
      position:"Software Engineer",
      count:"120 Applicatons",
      date:"25 AUG 2024"
  })
  );

  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const displayedJobSearch = jobs.slice(
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
    <div className="p-4 bg-white rounded-xl">
        <div className="flex-grow mb-8">
          <div className="bg-gray-200 flex items-center pl-8 pr-4 py-4 rounded-lg shadow-sm w-full">
            <Image
              src="/images/search.png"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search Job Posts..."
              className="ml-2 text-gray-800 bg-gray-200 outline-none w-full"
            />
          </div>
        </div>


      {/* Table */}
      <div className="overflow-x-auto w-full">
  <table className="w-full text-left border-collapse">
    <thead className="text-md text-gray-500">
      <tr>
        <th className="px-4 py-2 text-center w-1/4">Position</th>
        <th className="px-4 py-2 text-center w-1/4">Posted Date</th>
        <th className="px-4 py-2 text-center w-1/4">Applications</th>
        <th className="px-4 py-2 text-center w-1/4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {displayedJobSearch.map((job) => (
        <tr
          key={job.id}
          className="border-b text-gray-700 hover:bg-gray-50"
        >
          <td className="px-4 py-2 text-center">{job.position}</td>
          <td className="px-4 py-2 text-center">{job.date}</td>
          <td className="px-4 py-2 text-center">{job.count}</td>
          <td className="px-1 py-2 flex justify-center space-x-2">
          <Link href={`/admin/analytics/editJob?id=${job.id}`}>           <button className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm">
                <div className="flex space-x-2">
                  <Image
                    src="/images/edit.png"
                    alt="edit"
                    width={20}
                    height={20}
                  />
                  <p>Edit Job Post</p>
                </div>
              </button>
            </Link>
            <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm">
              <div className="flex space-x-2">
                <Image
                  src="/images/eye-slash.png"
                  alt="bin"
                  width={20}
                  height={20}
                />
                <p>Restrict</p>
              </div>
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
