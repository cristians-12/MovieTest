'use client'

import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Movie } from "../types";
import MovieCard from "../components/includes/MovieCard";

const fetchFavorites = async (favoriteIds: number[]): Promise<Movie[]> => {
    const favoritesData: Movie[] = [];

    for (const id of favoriteIds) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?&language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_KEY}`
            }
        });

        const movie = await response.json();
        favoritesData.push(movie);
    }
    // console.log(favoritesData)
    return favoritesData;
}

export default function Favorites() {
    const { user, checkOutUser } = useAuthContext();
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await checkOutUser();
                if (user && user.favorites.length > 0) {
                    const movies = await fetchFavorites(user.favorites);
                    setFavoriteMovies(movies);
                }
            } catch (error) {
                console.error("Failed to fetch favorites:", error);
            }
        };

        const intervalId = setInterval(() => {
            fetchData();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className="px-10">
            <h1 className="mt-20 text-[40px] font-bold">Your favorites</h1>
            <div className="flex justify-around flex-wrap">
                {favoriteMovies.map(e => (
                    <MovieCard key={e.id} e={e} />
                ))}
            </div>
        </div>
    );
}
