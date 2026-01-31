import { Genre } from "@/types/movie/movie.type";
import { create } from "zustand";

interface App {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  initialPage: () => void;
  genre: Genre;
  changeGenre: (newGenre: Genre) => void;
  url: string;
  changeUrl: (newUrl: string) => void;
}

const useAppStore = create<App>()((set) => ({
  page: 1,
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
  initialPage: () => set(() => ({ page: 1 })),
  genre: { id: 10, tag: "popular" },
  changeGenre: (newGenre) => set(() => ({ genre: newGenre })),
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US",
  changeUrl: (newUrl: string) => set(() => ({ url: newUrl })),
}));

export default useAppStore;
