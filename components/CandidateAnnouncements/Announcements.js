import { useState } from "react";

export default function Announcements(){
      const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 3;
      const totalPages = 15;
    
    const announcements=Array.from(
        { length: rowsPerPage * totalPages },
        (_, index) => ({
          id: index + 1,     
            title:"Join Our Upcoming Networking Event",
            desc:"Discover the top five skills every professional needs to succeed in today’s digital-first workplace. From mastering digital tools to improving collaboration, learn how to stay ahead in your career!",
            date:"08 JAN 2024",
        })
    );
  
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
        
    return<>
    <div className="bg-white p-6 max-h-screen rounded-xl">
    <h1 className="text-xl font-bold text-[#001571] mb-4">
        Announcements
      </h1>
      <div className="overflow-x-auto ">
    {displayedAnnouncements.map((announcement)=>(
        <div key={announcement.id}
        className="bg-[#E6E8F1] rounded-2xl p-5 mb-5">
        <p className="font-semibold mb-4">{announcement.title}</p>
        <p className="text-left mb-5 text-md">{announcement.desc}</p>
        <p className="text-sm font-semibold">{announcement.date}</p>
        </div>
    ))}
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
    </>
}