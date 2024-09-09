'use client'
import React from 'react'
import MovieList from './components/MovieList';
import useFetch from './hooks/useFetch'
import MainLayout from './layouts/MainLayout';

export default function Home() {
  const { data } = useFetch();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <MovieList data={data} />
      </MainLayout>
    </>
  )
}

