'use client'
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import RegisterModal from "./RegisterModal";
import useNavbar from "../hooks/navbar/useNavbar";
export default function NavBar() {

    const { handlePop, pop, handlePopular } = useNavbar();

    return (
        <>
            <nav className="flex lg:py-2 lg:px-32 fixed z-40 justify-between items-center w-screen top-0 bg-black">
                <div className="flex gap-10 items-center">
                    <Link href={'/'} className="font-extrabold cursor-pointer">
                        <Image width={200} height={100} alt="logo" src={'/images/logo.png'} />
                    </Link>
                    <div onClick={handlePopular} className="cursor-pointer lg:block hidden">
                        Popular
                    </div>
                    <Link href={'/favorites'} className="cursor-pointer lg:block hidden">
                        Favorites
                    </Link>
                </div>
                <div onClick={handlePop} className="cursor-pointer">
                    <FaRegUserCircle size={40} />
                </div>

            </nav>
            {pop && <RegisterModal handlePop={handlePop} />}
        </>
    )
}