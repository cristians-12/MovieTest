'use client'
import { createContext, useState } from "react";



interface MovieContextType {
    url: string;
    setUrl: () => void;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {

    const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/movie/popular?language=en-US&page=');

    return (
        <MovieContext.Provider value={{ url, setUrl }}>
            {children}
        </MovieContext.Provider>
    )
}
