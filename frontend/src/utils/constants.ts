import { Genre } from "@/types/movie/movie.type";


export const imageLink: string = "https://image.tmdb.org/t/p/w500/";
export const parametersUrl: string = "movie/popular?language=en-US&page=";

export const tags: Genre[] = [
  { id: 28, tag: "Action" },
  { id: 12, tag: "Adventure" },
  { id: 16, tag: "Animation" },
  { id: 35, tag: "Comedy" },
  { id: 80, tag: "Crime" },
  { id: 99, tag: "Documental" },
  { id: 18, tag: "Drama" },
  { id: 14, tag: "Fantasy" },
  { id: 27, tag: "Terror" },
  { id: 878, tag: "Sci-fi" },
];

export const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    // email: email,
    // password: pass,
  }),
};

export const headersFetch = {
  headers: {
    "Content-Type": "application/json",
  },
};
