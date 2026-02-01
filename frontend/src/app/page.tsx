import MainContainer from "@/components/main-container";
import { getMovies, getTags } from "@/lib/getMovies"; // Importa la función
import { cookies } from "next/headers";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ page?: string, query?: string, language?: string, genre?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  const cookieStore = await cookies();

  const currentPage = resolvedSearchParams.page || "1";
  const searchQuery = resolvedSearchParams.query || "";
  const genre = resolvedSearchParams.genre || "";
  const language = cookieStore.get('NEXT_LOCALE')?.value || "es-CO";

  const data = await getMovies(currentPage, searchQuery, language, genre);
  const genresResponse = await getTags(language);

  return <MainContainer
    data={data}
    genres={genresResponse}
  />;
}