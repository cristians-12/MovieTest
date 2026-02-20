"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import RegisterModal from "./RegisterModal";
import { useAuthContext } from "@/app/context/AuthContext";
import useNavbar from "@/app/hooks/navbar/useNavbar";
import { useRouter, useSearchParams } from "next/navigation";
import { changeLanguage } from "@/utils/language";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

export default function NavBar() {
  const { handlePop, pop, handlePopular } = useNavbar();

  const { isAuthenticated, logOut, user } = useAuthContext();

  const [currentLang, setCurrentLang] = useState("es-CO");
  useEffect(() => {
    const savedLang = Cookies.get('NEXT_LOCALE');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguage = (lang: string) => {
    // const params = new URLSearchParams(searchParams.toString());
    changeLanguage(lang);
  };


  return (
    <>
      <header className="flex lg:py-2 lg:px-32 fixed z-40 justify-between items-center w-screen top-0 bg-black">
        <div className="flex gap-10 items-center">
          <Link href={"/"} className="font-extrabold cursor-pointer">
            <Image
              width={200}
              height={100}
              alt="logo"
              src={"/images/logo.png"}
            />
          </Link>

          {isAuthenticated ? (
            <Link
              href={"/favorites"}
              className="cursor-pointer lg:block hidden"
            >
              Favorites
            </Link>
          ) : null}
        </div>
        <div className="cursor-pointer flex gap-2">
          {isAuthenticated ? (
            <div className="flex gap-5">
              <Link href={`/profile/${user?._id}`} className="font-bold">
                Profile
              </Link>
              <div onClick={logOut}>Logout</div>
            </div>
          ) : (
            <div onClick={handlePop}>
              <FaRegUserCircle size={40} />
            </div>
          )}
          <select
            className="bg-yellow-400 text-white font-bold py-1 px-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-300 transition-all cursor-pointer text-sm"
            name="languages"
            id="language-select"
            value={currentLang}
            onChange={(e) => handleLanguage(e.target.value)}
          >
            <option value="es-CO">Español</option>
            <option value="en-US">English</option>
            <option value="pt-BR">Português</option>
            <option value="fr-FR">Français</option>
            <option value="it-IT">Italiano</option>
            <option value="de-DE">Deutsch</option>
            <option value="ja-JP">日本語</option>
            <option value="ko-KR">한국어</option>
            <option value="zh-CN">中文</option>
          </select>
        </div>


      </header>
      {pop && <RegisterModal handlePop={handlePop} />}
    </>
  );
}
