'use client'
import React, { useState } from 'react'
import MovieList from './components/MovieList';
import useFetch from './hooks/useFetch'
import MainLayout from './layouts/MainLayout';

export default function Home() {


  const [page, setPage] = useState(1);
  const { data } = useFetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <MovieList data={data} />
        <div className='flex justify-center gap-5'>
          <div onClick={()=>setPage(1)} className='bg-black p-3'>1</div>
          <div className='bg-black p-3' onClick={()=>setPage(2)}>2</div>
        </div>
      </MainLayout>
    </>
  )
}

