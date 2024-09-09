'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import RegisterModal from "./RegisterModal";
export default function NavBar() {

    const [pop, setPop] = useState(false)

    const handlePop = ()=>{
        setPop(!pop)
    }

    return (
        <>
            <nav className="flex w-full lg:py-2 lg:px-32 fixed z-20 justify-between items-center w-screen top-0 bg-black">
                <div className="flex gap-10 items-center">
                    <Link href={'/'} className="font-extrabold cursor-pointer">
                        <Image width={200} height={100} alt="logo" src={'/images/logo.png'} />
                    </Link>
                    <div className="cursor-pointer lg:block hidden">
                        Popular
                    </div>
                    <div className="cursor-pointer lg:block hidden">
                        Favorites
                    </div>
                </div>
                <div onClick={handlePop} className="cursor-pointer">
                    <FaRegUserCircle size={40} />
                </div>
                
            </nav>
            {pop && <RegisterModal/>}
        </>
    )
}