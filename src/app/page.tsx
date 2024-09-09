'use client'
import React, { useEffect, useState } from 'react'
import MovieList from './components/MovieList';
import useFetch from './hooks/useFetch'
import MainLayout from './layouts/MainLayout';
import Paginator from './components/Paginator';
import usePaginator from './hooks/usePaginator';
import { parametersUrl } from './utils/constants';

export default function Home() {
  const { page, avanzar, retroceder } = usePaginator();
  const { data } = useFetch(`https://api.themoviedb.org/3/${parametersUrl}${page}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
      <Paginator page={page} avanzar={avanzar} retroceder={retroceder} />
        <h1 className='text-[40px] my-10'>Popular</h1>
        <MovieList data={data} />
        <Paginator page={page} avanzar={avanzar} retroceder={retroceder} />
      </MainLayout>
    </>
  )
}

