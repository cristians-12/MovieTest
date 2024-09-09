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
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_KEY}`
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