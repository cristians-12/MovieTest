import { Dispatch, SetStateAction } from "react";
export interface AuthContextType {
  id: string;
  // token: string;
  favorites: number[];
  setFavorites: Dispatch<SetStateAction<number[]>>;
  setId: Dispatch<SetStateAction<string>>;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  isAuthenticated: boolean;
  logOut: () => void;
  loginUser: (email: string, pass: string) => void;
  checkOutUser: () => void;
}

export interface User {
  _id: string;
  favorites: number[];
}
