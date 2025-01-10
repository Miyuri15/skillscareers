import Image from "next/image";
import { useState } from "react";

export default function RestrictedJobPosts() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = 15;

  const jobPosts = Array.from(
    { length: rowsPerPage * totalPages },
    (_, index) => ({
      id: index + 1,
      Recruitername: "Codezela Technologies",
      postedDate: "25 AUG 2024",
      position:"Software Engineer",
    })
  );

  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const displayedJobPosts = jobPosts.slice(
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
    <div className="p-4">
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedRows.length > 0
              ? "bg-blue-900 text-white"
              : "bg-[#E6E8F1] text-gray-500"
          }`}
          disabled={selectedRows.length === 0}
        >
                    <div className="flex space-x-2">
                      <Image
                        src="/images/CheckBox.png"
                        alt="bin"
                        width={15}
                        height={10}
                      />
                      <p className="text-white">Select More</p>
                    </div>
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedRows.length > 0
              ? "bg-blue-900 text-white"
              : "bg-[#E6E8F1] text-gray-500"
          }`}
          disabled={selectedRows.length === 0}
        >
                    <div className="flex space-x-2">
                      <Image
                        src="/images/eye.png"
                        alt="bin"
                        width={20}
                        height={20}
                      />
                      <p className="text-white">Unrestricted</p>
                    </div>
        </button>

        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedRows.length > 0
              ? "bg-red-500 text-white"
              : "bg-red-200 text-gray-500"
          }`}
          disabled={selectedRows.length === 0}
        >
                    <div className="flex space-x-2">
                      <Image
                        src="/images/trash.png"
                        alt="bin"
                        width={25}
                        height={20}
                      />
                      <p className="text-white">Delete</p>
                    </div>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="text-md text-[#8A93BE]">
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked ? jobPosts.map((r) => r.id) : []
                    )
                  }
                  checked={selectedRows.length === jobPosts.length}
                />
              </th>
              <th className="px-4 py-2 text-center w-1/4">Position </th>
              <th className="px-4 py-2 text-center w-1/4">Recruiter Name</th>
              <th className="px-4 py-2 text-center w-1/4">Posted Date</th>
              <th className="px-4 py-2 text-center w-1/4 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedJobPosts.map((jobPost) => (
              <tr
                key={jobPost.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(jobPost.id)}
                    onChange={() => handleCheckboxChange(jobPost.id)}
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  {jobPost.position}</td>
                <td className="px-4 py-2 text-center">{jobPost.Recruitername}</td>
                <td className="px-4 py-2 text-center">{jobPost.postedDate}</td>
                <td className="px-1 py-2 flex space-x-2 justify-center">
                  <button className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm">
                    <div className="flex space-x-2">
                      <Image
                        src="/images/eye.png"
                        alt="bin"
                        width={20}
                        height={20}
                      />
                      <p>Unrestricted</p>
                    </div>
                  </button>
                  <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm">
                    <div className="flex space-x-2">
                      <Image
                        src="/images/trash.png"
                        alt="bin"
                        width={20}
                        height={20}
                      />
                      <p>Delete</p>
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
