export async function getMovies(page: string, query: string, language: string, genre: string) {
    let url = `https://api.themoviedb.org/3/discover/movie?page=${page}&language=${language}`;

    if (query) {
        url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=${language}`;
    } else if (genre) {
        url += `&with_genres=${genre}`;
    } else {
        url = `https://api.themoviedb.org/3/movie/popular?page=${page}&language=${language}`;
    }

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: "application/json",
        },
        next: { revalidate: 60 }
    });

    return res.json();
}