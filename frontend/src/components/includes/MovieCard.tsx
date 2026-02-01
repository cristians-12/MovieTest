import Image from "next/image";
import Link from "next/link";
import React from "react";
import CircleProgress from "../CircleProgress";
import { useAuthContext } from "@/app/context/AuthContext";
import { FaHeart } from "react-icons/fa";
import { imageLink, img_placeholder } from "@/utils/constants";
import { MovieType } from "@/types/movie/movie.type";
import { formatDate } from "@/utils/formatDate";
import Cookies from "js-cookie";

const handleAddFavorite = async (movieId: number, id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/users/${id}/favorites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          movieId: movieId,
        }),
      }
    );
    if (response.ok) {
      console.log("Favorite added successfully");
    } else {
      console.log("Failed to add favorite");
    }
  } catch (error) {
    console.error("Error adding favorite:", error);
  }
};



const MovieCard = ({ e }: { e: MovieType }) => {
  const { isAuthenticated, user } = useAuthContext();

  const language = Cookies.get("NEXT_LOCALE") || "es-CO";

  const handleClick = () => {
    if (isAuthenticated && user) {
      handleAddFavorite(e.id, user._id);
    }
  };

  const posterUrl = e.poster_path ? (imageLink + e.poster_path) : img_placeholder;

  return (
    <div
      className="text-center flex flex-col items-center md:w-[20%] w-[80%] rounded-lg hover:scale-105 bg-gray-700 hover:bg-gray-800 cursor-pointer"
      key={e.id}
    >
      <Link className="relative h-[400px] w-full" href={`movie/${e.id}`}>
        <Image
          className="rounded-tl-lg rounded-tr-lg object-cover"
          fill
          src={posterUrl}
          alt={e.title}
          sizes="(max-width: 768px) 80vw, 20vw"
          placeholder="blur"
          blurDataURL="https://imgs.search.brave.com/8ebB1J_tyZLjCw_HRwRVpfkirqj9WS36-xGU4c4pQvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cGVuaXMtZW5sYXJn/ZW1lbnQtbWFnaWMt/djAtaDJwaHlmdzFt/NmJmMS5qcGc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9OTU2MjY3/YTBiMzI3YzIzNTcx/NWM1ZGQzMmZhMmU4/MTU0YmNmOWQzYQ"
        />
      </Link>
      <span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-52 my-5">
        {e.title}
      </span>
      <span>{formatDate(e.release_date, language)}</span>
      <div className="flex items-center gap-10">
        <CircleProgress width={50} score={e.vote_average} />
        {isAuthenticated && user ? (
          <div onClick={handleClick}>
            <FaHeart
              size={35}
              fill={`${user?.favorites.includes(e.id) ? "red" : "white"}`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieCard;
