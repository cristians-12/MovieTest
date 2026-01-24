'use client';

import MainLayout from "@/app/layouts/MainLayout";
import Paginator from "./Paginator";
import MovieList from "./MovieList";

export default function MainContainer({ data, genre }) {

    return (
        <MainLayout>
            <Paginator pages={data.total_pages} />
            {/* <h1 className="text-[40px] my-10">Resultados para {genre.tag}</h1> */}
            <MovieList data={data} />
            <Paginator pages={data.total_pages} />
        </MainLayout>
    )
}