'use server'

import { getMovies } from "./getMovies";

// Esta función envuelve a getMovies para que se ejecute SOLO en el servidor
export async function searchMoviesAction(query: string, language: string = "es-CO") {
  try {
    const data = await getMovies("1", query, language, "");
    return { success: true, data };
  } catch (error) {
    console.error("Error en el Server Action:", error);
    return { success: false, error: "No se pudieron cargar las películas" };
  }
}