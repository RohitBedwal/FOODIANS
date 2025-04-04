

import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPagination = () => {
    const pages = [];
    const maxVisible = 3; // Number of pages to show before ellipsis
    const totalDisplayed = 5; // Total displayed elements including ellipsis
   
    if (totalPages <= totalDisplayed) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage < maxVisible) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage > totalPages - maxVisible) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...",currentPage-1,currentPage, currentPage+1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className=" h-[60px] mb-[10px] flex items-center justify-center  ">
     <div className=" flex items-center justify-center p-[10px] border-b-[0.1px]">
     <button
        disabled={currentPage === 1}
        onClick={() =>{ onPageChange(currentPage - 1)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className=" font-[amma3] h-[35px] w-[50px] flex items-center justify-center"
      >
       <i className="ri-arrow-left-wide-line"></i> 
      </button>

      {getPagination().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 ">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`font-[amma3] text-[12px] h-[35px] w-[50px] flex items-center justify-center  ${
              currentPage === page ? "border-gray-900 border-b-[2px] " : ""
            }`}
            onClick={() => {onPageChange(page)
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>{ onPageChange(currentPage + 1)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-[amma3] h-[35px] w-[50px] flex items-center justify-center"
        >
         <i className="ri-arrow-right-wide-line"></i> 
      </button>
     </div>
    </div>
  );
};


export default Pagination;
