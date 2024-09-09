import React from 'react'
import { DataFetch } from '../types';
import MovieCard from './includes/MovieCard';

export default function MovieList({ data }: { data: DataFetch }) {
    return (
        <main>
            <div className='flex flex-wrap gap-10 justify-center lg:overflow-x-auto lg:pb-20'>
                {data.results.length > 1 ? data.results.map(e => (
                    <MovieCard key={e.id} e={e} />
                )) : (
                    data.results.length === 1 && <MovieCard e={data.results[0]} />
                )}
            </div>
        </main>
    )
}
