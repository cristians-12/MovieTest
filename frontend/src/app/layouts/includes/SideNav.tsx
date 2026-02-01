import useSidenav from "@/app/hooks/sidenav/useSidenav";
import useSearch from "@/app/hooks/useSearch";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { tags } from "@/utils/constants";
import { useState } from "react";

export default function SideNav() {
  const { handleQuery, handleSearch, handleKeydown } = useSearch();
  const { visible, handleVisibility, handleTag } = useSidenav();



  return (
    <>
      <div
        className={`fixed left-0 bg-gray-900 lg:w-[20vw] w-full ${visible ? null : "hidden"
          } lg:block z-20 px-5 lg:top-[7%] top-[6%] py-10 h-full`}
      >
        <div className="flex justify-between">
          <p className="lg:text-[1.1vw]">Search</p>
          <div onClick={handleVisibility} className="lg:hidden">
            <IoMdClose size={40} />
          </div>
        </div>
        <div className="mt-5 relative">
          <input
            onChange={handleQuery}
            onKeyDown={handleKeydown}
            type="text"
            className="w-full bg-gray-950 py-3 px-3"
            placeholder="keywords"
          />
          <FaSearch
            onClick={handleSearch}
            className="absolute top-4 right-5 cursor-pointer"
          />
        </div>
        <p className="mt-5 lg:text-[1.1vw]">Genres</p>
        <div className="bg-gray-900">
          {tags.map((e, index) => (
            <div
              onClick={() => handleTag(e)}
              className="cursor-pointer w-full hover:bg-slate-600 p-3"
              key={index}
            >
              {e.tag}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={handleVisibility}
        className="lg:hidden fixed bottom-5 bg-gray-900 px-5 py-5 rounded-full left-5"
      >
        <FaBarsStaggered />
      </div>
    </>
  );
}
