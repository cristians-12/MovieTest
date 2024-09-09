export interface DataFetch {
  pages: number;
  results: Movie[];
  total_pages:number;
}

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
}


