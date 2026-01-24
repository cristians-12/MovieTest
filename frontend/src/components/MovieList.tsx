import React from "react";
import MovieCard from "./includes/MovieCard";
import { DataFetch, MoviesResponse, MovieType } from "@/types/movie/movie.type";

export default function MovieList({ data }: { data: MoviesResponse }) {
  console.log(data);
  return (
    <main>
      <div className="flex flex-wrap gap-10 justify-center lg:overflow-x-auto lg:py-16">
        {data.results.length > 0
          ? data.results.map((e: MovieType) => <MovieCard key={e.id} e={e} />)
          : data.results.length === 1 && <MovieCard e={data.results[0]} />}
      </div>
    </main>
  );
}
