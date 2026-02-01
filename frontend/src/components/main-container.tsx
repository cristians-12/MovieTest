'use client';

import MainLayout from "@/app/layouts/MainLayout";
import Paginator from "./Paginator";
import MovieList from "./MovieList";
import { MoviesResponse } from "@/types/movie/movie.type";
import { GetGenresResponse } from "@/types/movie/genre.type";

interface Props {
    data: MoviesResponse;
    genres: GetGenresResponse;
}

export default function MainContainer({ data, genres }: Props) {
    return (
        <MainLayout genres={genres}>
            <Paginator pages={data.total_pages} />
            {/* <h1 className="text-[40px] my-10">Resultados para {genre.tag}</h1> */}
            <MovieList data={data} />
            <Paginator pages={data.total_pages} />
        </MainLayout>
    )
}