import React from 'react'
import SideNav from './includes/SideNav'
import NavBar from '@/components/NavBar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='mb-5 mt-20'>
            <NavBar />
            <SideNav/>
            <div className='lg:ps-[22%]'>
                {children}
            </div>
        </div>
    )
}

