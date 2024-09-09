import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function SideNav() {
    return (
        <div className='fixed left-0 bg-gray-900 w-[20vw] z-20 px-5 top-[7%] py-10 h-full'>
            <p className='text-[1.1vw]'>Search</p>
            <div className='mt-5 relative'>
                <input type="text" className='w-full bg-gray-950 py-3 px-3' placeholder='keywords' />
                <FaSearch className='absolute top-4 right-5'/>
            </div>
            <p className='mt-5 text-[1.1vw]'>
                Genres
            </p>
            
        </div>
    )
}