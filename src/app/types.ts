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
  vote_average:number;
}

export interface Tags {
  id: number;
  tag: string;
}


