import React from 'react'
import Image from 'next/image';
import { DataFetch } from '../types';
import { imageLink } from '../utils/constants';
import MovieCard from './includes/MovieCard';

export default function MovieList({ data }: { data: DataFetch }) {
    return (
        <main>
            <div className='flex flex-wrap gap-10 justify-center'>
                {data && data.results.map(e => (
                    <MovieCard key={e.id} e={e} />
                ))}
            </div>
        </main>
    )
}
