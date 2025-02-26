import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AllCandidates() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = 15;

  const candidates = Array.from(
    { length: rowsPerPage * totalPages },
    (_, index) => ({
      id: index + 1,
      name: "Codezela Technologies",
      email: "info@codezela.com",
      phone: "011 234 4857",
      logo:"/images/codezelalogo.png",
    })
  );

  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const displayedCandidates = candidates.slice(
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
              ? "bg-red-500 text-white"
              : "bg-red-200 text-gray-500"
          }`}
          disabled={selectedRows.length === 0}
        >
          <div className="flex space-x-2">
            <Image src="/images/trash.png" alt="bin" width={25} height={20} />
            <p className="text-white">Delete</p>
          </div>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead className="text-md text-[#8A93BE]">
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked ? candidates.map((r) => r.id) : []
                    )
                  }
                  checked={selectedRows.length === candidates.length}
                />
              </th>

              <th  className="px-4 py-2 text-center w-1/4">Candidate Name</th>
              <th  className="px-4 py-2 text-center w-1/4">Email</th>
              <th  className="px-4 py-2 text-center w-1/4">Phone</th>
              <th  className="px-4 py-2 text-center w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedCandidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(candidate.id)}
                    onChange={() => handleCheckboxChange(candidate.id)}
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex">
                  <Image src={candidate.logo} alt="logo" width={40} height={20} className="pr-2"/>
                  {candidate.name} </div></td>
                 
                <td className="px-4 py-2 text-center">{candidate.email}</td>
                <td className="px-4 py-2 text-center">{candidate.phone}</td>
                <td className="px-1 py-2 flex justify-center space-x-2">
                  <Link href="/admin/candidates/editProfile">
                    <button className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm">
                      <div className="flex space-x-2">
                        <Image
                          src="/images/edit.png"
                          alt="edit"
                          width={20}
                          height={20}
                        />
                        <p>Edit Account</p>
                      </div>
                    </button>
                  </Link>{" "}
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
