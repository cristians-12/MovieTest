'use client';

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginatorProps {
  pages: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <div className="flex justify-center gap-5 items-center mt-10">
        {currentPage > 1 && (
          <div 
            onClick={() => handlePageChange(currentPage - 1)} 
            className="bg-black p-3 cursor-pointer hover:bg-zinc-800 transition-colors"
          >
            <IoIosArrowBack />
          </div>
        )}

        <div className="bg-black py-2 px-4 select-none">
          Página {currentPage} de {pages}
        </div>

        {currentPage < pages && (
          <div 
            onClick={() => handlePageChange(currentPage + 1)} 
            className="bg-black p-3 cursor-pointer hover:bg-zinc-800 transition-colors"
          >
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  );
};

export default Paginator;