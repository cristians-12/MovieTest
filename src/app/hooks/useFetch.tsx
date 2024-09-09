'use client';
import { useState, useEffect } from 'react';
import { DataFetch } from '../types';

const useFetch = () => {
  const [data, setData] = useState<DataFetch>();
  const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzU5ZjZmZDVkM2VjZTc1NDFjNzkxYWI2NTNmMTE3NyIsIm5iZiI6MTcyNTg0ODYxNy42ODc1MTIsInN1YiI6IjY2ZGU1OTA0ZGEzNDg2MWI2MGVlNWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ztg2t14JG73PMqAwgAPAAZqGKUMbXt8L85G-4qG0UO4'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => setError(err));
  }, []); 

  return { data, error };
};

export default useFetch;