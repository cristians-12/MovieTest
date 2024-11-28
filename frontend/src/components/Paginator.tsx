import useAppStore from "@/store/appStore";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginatorProps {
  pages: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pages }) => {
  const { page, nextPage, prevPage } = useAppStore();

  return (
    <div>
      <div className="flex justify-center gap-5 items-center mt-10">
        {page != 1 ? (
          <div onClick={prevPage} className="bg-black p-3 cursor-pointer">
            <IoIosArrowBack />
          </div>
        ) : null}
        <div className="bg-black py-2 px-4">{page}</div>
        {pages != 1 ? (
          <div onClick={nextPage} className="bg-black p-3 cursor-pointer">
            <IoIosArrowForward />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Paginator;
