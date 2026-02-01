import Image from "next/image";
import Link from "next/link";
import React from "react";
import CircleProgress from "../CircleProgress";
import { useAuthContext } from "@/app/context/AuthContext";
import { FaHeart } from "react-icons/fa";
import { imageLink } from "@/utils/constants";
import { MovieType } from "@/types/movie/movie.type";

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

  const handleClick = () => {
    if (isAuthenticated && user) {
      handleAddFavorite(e.id, user._id);
    }
  };

  return (
    <div
      className="text-center flex flex-col items-center md:w-[20%] w-[80%] rounded-lg hover:scale-105 bg-gray-700 hover:bg-gray-800 cursor-pointer"
      key={e.id}
    >
      <Link className="relative h-[400px] w-full" href={`movie/${e.id}`}>
        <Image
          className="rounded-tl-lg rounded-tr-lg object-cover"
          fill
          src={imageLink + e.poster_path}
          alt={e.title}
        />
      </Link>
      <span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden w-52 my-5">
        {e.title}
      </span>
      <span>{e.release_date}</span>
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
