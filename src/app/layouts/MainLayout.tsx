import React from 'react'
import NavBar from '../components/NavBar'
import SideNav from './includes/SideNav'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='mb-5 mt-20'>
            <NavBar />
            <SideNav/>
            <div className='ps-[22%]'>
                {children}
            </div>
        </div>
    )
}

