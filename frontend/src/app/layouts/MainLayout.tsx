import React from 'react'
import SideNav from './includes/SideNav'
import NavBar from '@/components/NavBar'
import { GetGenresResponse } from '@/types/movie/genre.type';

interface Props {
    children: React.ReactNode;
    genres: GetGenresResponse;
}

export default function MainLayout({ children, genres }: Props) {
    return (
        <div className='mb-5 mt-20'>
            <NavBar />
            <SideNav
                genres={genres.genres}
            />
            <div className='lg:ps-[22%]'>
                {children}
            </div>
        </div>
    )
}

