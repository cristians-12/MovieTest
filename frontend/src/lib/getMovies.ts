export async function getMovies(page: string, query: string, language: string, genre: string) {
    let url = `${process.env.BASE_URL}/discover/movie?page=${page}&language=${language}`;

    if (query) {
        url = `${process.env.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=${language}`;
    } else if (genre) {
        url += `&with_genres=${genre}`;
    } else {
        url = `${process.env.BASE_URL}/movie/popular?page=${page}&language=${language}`;
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

export async function getTags(language: string) {
    let url = `${process.env.BASE_URL}/genre/movie/list?language=${language}`;


    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: "application/json",
        },
        next: { revalidate: 60 }
    });

    console.log('genres', res);

    return res.json();
}

export async function getMovieVideo(movie_id: number, language: string) {
    const url = `${process.env.BASE_URL}/movie/${movie_id}/videos?language=${language}`;

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: "application/json",
        },
        next: { revalidate: 60 }
    });

    const data = await res.json();

    if (data.results && data.results.length > 0) {
        const trailer = data.results.find(
            (vid: any) => vid.type === "Trailer" && vid.site === "YouTube" && vid.official === true
        ) || data.results.find((vid: any) => vid.type === "Trailer");

        return trailer ? trailer.key : null;
    }
    return null;
}