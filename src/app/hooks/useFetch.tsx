'use client';
import { useState, useEffect } from 'react';
import { DataFetch } from '../types';
import { Url } from 'next/dist/shared/lib/router/router';

const useFetch = (url: string) => {
    const [data, setData] = useState<DataFetch>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzU5ZjZmZDVkM2VjZTc1NDFjNzkxYWI2NTNmMTE3NyIsIm5iZiI6MTcyNTg0ODYxNy42ODc1MTIsInN1YiI6IjY2ZGU1OTA0ZGEzNDg2MWI2MGVlNWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ztg2t14JG73PMqAwgAPAAZqGKUMbXt8L85G-4qG0UO4'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => setError(err));
    }, [url]);

    return { data, error };
};

export default useFetch;