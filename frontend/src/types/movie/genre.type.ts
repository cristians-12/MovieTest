export interface GenreType {
    id: number;
    name: string
}

export interface GetGenresResponse {
    genres: GenreType[]
}