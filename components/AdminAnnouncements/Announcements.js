import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import EditAnnouncement from "./EditAnnouncement";
import AddAnnouncement from "./AddAnnouncement";

export default function AllAnnouncements() {
    const[showAnnouncementEditForm , setShowAnnouncementEditForm]= useState(false);
    const[showAddAnnouncementForm, setShowAddAnnouncementForm] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = 15;

  const announcements = Array.from(
    { length: rowsPerPage * totalPages },
    (_, index) => ({
      id: index + 1,
      desc: "Join Our Upcoming Networking Event",
      date: "25 AUG 2024",
    })
  );

  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const displayedAnnouncements = announcements.slice(
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
    <>
    <div className="flex flex-col p-6 bg-white rounded-xl">
    {/* Page Title */}
      <div className="flex flex-row items-center justify-between ">
        <h2 className="text-[#001571] text-xl font-bold mb-6">Announcements</h2>
        <button
          className="bg-[#001571] text-white px-4 py-2 rounded-lg font-medium mb-6"
          onClick={() => setShowAddAnnouncementForm(true)}
        >
          + Add New
        </button>
      </div>

    
    <div className="p-4">
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-8">
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
          <thead className="text-md text-gray-500">
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked ? announcements.map((r) => r.id) : []
                    )
                  }
                  checked={selectedRows.length === announcements.length}
                />
              </th>

              <th className="px-4 py-2 items-center w-1/3">Title</th>
              <th className="px-4 py-2 items-center w-1/3">Date Posted</th>
              <th className="px-4 py-2 items-center ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedAnnouncements.map((announcement) => (
              <tr
                key={announcement.id}
                className="border-b text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(announcement.id)}
                    onChange={() => handleCheckboxChange(announcement.id)}
                  />
                </td>
                <td className="px-4 py-2 items-center">
                  {announcement.desc}</td>
                 
                <td className="px-4 py-2 items-center">{announcement.date}</td>
                <td className="px-1 py-2 flex justify-center space-x-2 ">
                  <Link href="#">
                    <button className="bg-[#001571] text-white px-5 py-2 rounded-lg text-sm"
                                  onClick={() => setShowAnnouncementEditForm(true)}
>

                      <div className="flex space-x-2">
                        <Image
                          src="/images/edit.png"
                          alt="edit"
                          width={20}
                          height={20}
                        />
                        <p>Edit Announcement</p>
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

      
              {/* Edit Announcement Popup */}
              {showAnnouncementEditForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                    <EditAnnouncement onClose={() => setShowAnnouncementEditForm(false)} />
                  </div>
                </div>
              )}
                            {/* Add Announcement Popup */}
                            {showAddAnnouncementForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="relative bg-white shadow-lg rounded-lg px-4 sm:px-6 w-full max-w-4xl">
                    <AddAnnouncement onClose={() => setShowAddAnnouncementForm(false)} />
                  </div>
                </div>
              )}

      

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
    </div>
    </>
  );
  
}
