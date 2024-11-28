"use client";
import React from "react";
import useFetch from "./hooks/useFetch";
import MainLayout from "./layouts/MainLayout";
import Paginator from "@/components/Paginator";
import MovieList from "@/components/MovieList";
import useAppStore from "@/store/appStore";

export default function Home() {
  const { page, url, genre } = useAppStore();
  const { data } = useFetch(`${url}&page=${page}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout>
        <Paginator pages={data.total_pages} />
        <h1 className="text-[40px] my-10">Resultados para {genre.tag}</h1>
        <MovieList data={data} />
        <Paginator pages={data.total_pages} />
      </MainLayout>
    </>
  );
}
