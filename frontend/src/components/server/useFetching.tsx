export async function fetchMovie(id: number) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`
        }
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error('Hubo un error: ', error);
        return null;
    }
}