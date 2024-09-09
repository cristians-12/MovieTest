'use client'
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface MovieContextType {
    url: string;
    setUrl: ()=>void;
    tag:string;
    setTag: ()=>void;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
    const [tag, setTag] = useState<string>('Popular')

    return (
        <MovieContext.Provider value={{ url, setUrl, tag, setTag }}>
            {children}
        </MovieContext.Provider>
    );
};


