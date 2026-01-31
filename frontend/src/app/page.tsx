import MainContainer from "@/components/main-container";
import { getMovies } from "@/lib/getMovies"; // Importa la función

export default async function Home({
  searchParams
}: {
  searchParams: { page?: string, query?: string, language?: string, genre?: string }
}) {
  const currentPage = searchParams.page || "1";
  const searchQuery = searchParams.query || "";
  const language = searchParams.language || "es-CO";
  const genre = searchParams.genre || "";

  const data = await getMovies(currentPage, searchQuery, language, genre);

  return <MainContainer data={data} />;
}