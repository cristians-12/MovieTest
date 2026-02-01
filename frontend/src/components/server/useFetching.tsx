export async function fetchMovie(id: number, language: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`
        }
    };

    let url = `https://api.themoviedb.org/3/movie/${id}?`;

    if (language) {
        url += `&language=${language}`;
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error: ', error);
        return null;
    }
}