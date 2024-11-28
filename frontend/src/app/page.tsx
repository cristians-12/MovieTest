'use client'
import React from 'react'
import MovieList from './components/MovieList';
import useFetch from './hooks/useFetch'
import MainLayout from './layouts/MainLayout';
import Paginator from './components/Paginator';
import usePaginator from './hooks/usePaginator';
import { useMovieContext } from './context/MovieContext';

export default function Home() {
  const { page, avanzar, retroceder } = usePaginator();

  const { url, tag } = useMovieContext()

  const { data } = useFetch(`${url}&page=${page}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <Paginator pages={data.total_pages} page={page} avanzar={avanzar} retroceder={retroceder} />
        <h1 className='text-[40px] my-10'>{tag}</h1>
        <MovieList data={data} />
        <Paginator page={page} pages={data.total_pages} avanzar={avanzar} retroceder={retroceder} />
      </MainLayout>
    </>
  )
}

