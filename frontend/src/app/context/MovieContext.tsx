"use client";
import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";

interface MovieContextType {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Debes usar el useMovieContext dentro del proveedor");
  }
  return context;
};

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [url, setUrl] = useState<string>(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  const [tag, setTag] = useState<string>("Popular");

  return (
    <MovieContext.Provider value={{ url, setUrl, tag, setTag }}>
      {children}
    </MovieContext.Provider>
  );
};
