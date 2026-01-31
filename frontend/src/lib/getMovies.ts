export async function getMovies(page: string, query: string) {
    const url = query
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=es-MX`
        : `https://api.themoviedb.org/3/movie/popular?page=${page}&language=es-MX`;

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: "application/json",
        },
        next: { revalidate: 60 }
    });

    return res.json();
}