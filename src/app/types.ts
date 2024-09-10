import { Dispatch, SetStateAction } from "react";

export interface DataFetch {
  pages: number;
  results: Movie[];
  total_pages: number;
}

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface Tags {
  id: number;
  tag: string;
}

export interface AuthContextType {
  id: string;
  // token: string;
  favorites: number[];
  setFavorites: Dispatch<SetStateAction<number[]>>;
  setId: Dispatch<SetStateAction<string>>;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  isAuthenticated: boolean;
  logOut: ()=>void;
  loginUser: (email:string, pass:string)=>void;
  checkOutUser:()=>void;
}

export interface User {
  _id: string;
  favorites: number[];
}
