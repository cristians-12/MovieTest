import { Movie } from "@/types/movie/movie.type";
import { create } from "zustand";

type Usuario = {
  nombre: string;
  setNombre: (valor: string) => void;
  favoritos: Movie[];
  setFavoritos: (valor: Movie) => void;
};

const useUsuarioStore = create<Usuario>()((set) => ({
  favoritos: [],
  nombre: "Ivan",
  setNombre: (valor) => set(() => ({ nombre: valor })),
  setFavoritos: (valor) =>
    set((state) => ({ favoritos: [...state.favoritos, valor] })),
}));

export default useUsuarioStore;
