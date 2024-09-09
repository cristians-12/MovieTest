import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface MovieContextType {
    url: string;
    setUrl: Dispatch<SetStateAction<string>>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [url, setUrl] = useState<string>('');

    return (
        <MovieContext.Provider value={{ url, setUrl }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovieContext debe ser usado dentro de MovieProvider');
    }
    return context;
};
