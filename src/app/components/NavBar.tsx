import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
export default function NavBar() {
    return (
        <>
            <nav className="flex lg:py-2 lg:px-32 fixed z-20 justify-between items-center w-screen top-0 bg-black">
                <div className="flex gap-10 items-center">
                    <Link href={'/'} className="font-extrabold cursor-pointer">
                        <Image width={200} height={100} alt="logo" src={'/images/logo.png'} />
                    </Link>
                    <div className="cursor-pointer">
                        Popular
                    </div>
                    <div className="cursor-pointer">
                        Favorites
                    </div>
                </div>
                <FaRegUserCircle size={40} />
            </nav>
        </>
    )
}