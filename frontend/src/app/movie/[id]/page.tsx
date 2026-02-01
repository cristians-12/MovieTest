// src/app/movie/[id]/page.tsx
import CircleProgress from "@/components/CircleProgress";
import { fetchMovie } from "@/components/server/useFetching";
import { getMovieVideo } from "@/lib/getMovies";
import { Genre } from "@/types/movie/movie.type";
import { imageLink } from "@/utils/constants";
import { formatDate } from "@/utils/formatDate";
import { cookies } from "next/headers";
import Image from "next/image";

// 1. Las interfaces ahora deben reflejar que son Promesas
interface MoviePageProps {
  params: Promise<{
    id: string; // Next.js entrega los params como string por defecto
  }>;
  searchParams: Promise<{
    page?: string;
    query?: string;
    language?: string;
    genre?: string
  }>;
}

export default async function MoviePage({
  searchParams,
  params
}: MoviePageProps) {

  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const cookieStore = await cookies();

  const language = cookieStore.get('NEXT_LOCALE')?.value || "es-CO";

  const movie = await fetchMovie(Number(resolvedParams.id), language);

  let videoKey = await getMovieVideo(Number(resolvedParams.id), language);

  if (!videoKey && language !== "en-US") {
    videoKey = await getMovieVideo(Number(resolvedParams.id), "en-US");
  }

  console.log(resolvedSearchParams);

  if (!movie) {
    return <div>No encontramos ninguna película.</div>;
  }

  return (
    <div className="pt-12 lg:pt-16 min-h-screen text-white">
      {/* SECCIÓN HERO (CONTENEDOR RELATIVO) */}
      <div className="relative w-full overflow-hidden flex flex-col justify-end">

        {/* FONDO (IMAGEN CON GRADIENTE) */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-20"></div>
          <Image
            className="object-cover w-full h-full opacity-40 lg:opacity-100 blur-xl scale-110"
            width={1920}
            height={1080}
            alt="Movie Backdrop"
            src={`${imageLink + movie.backdrop_path}`}
            priority
          />
        </div>

        <div className="relative z-30 px-6 lg:px-10 py-10 lg:flex gap-10 items-start">
          <div className="lg:w-[25%] w-full mb-6 lg:mb-0">
            <Image
              width={300}
              height={450}
              className="w-full rounded-lg shadow-2xl border border-white/10"
              alt={movie.title}
              src={`${imageLink + movie.poster_path}`}
            />
            <a
              href="#trailer"
              className="bg-yellow-400 mt-5 block text-center text-black font-bold py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition"
            >
              Official Trailer
            </a>
          </div>

          <div className="lg:w-[70%] w-full">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2">
              {movie.title}
            </h1>
            <p className="text-yellow-400 mb-6 text-2xl">{formatDate(movie.release_date, language)}</p>

            <h2 className="text-xl lg:text-2xl font-bold mb-3">Overview:</h2>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {movie.overview}
            </p>

            <div className="flex items-center font-extrabold mt-8">
              <CircleProgress score={movie.vote_average} width={80} />
              <span className="ml-4 text-lg">Users Score</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {movie.genres?.map((e: Genre) => (
                <div
                  key={e.id}
                  className="border border-yellow-500 px-3 py-1 rounded-lg text-yellow-500 text-xs lg:text-sm"
                >
                  {e.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="md:px-6 lg:px-10 pb-20">
        {videoKey && (
          <div id="trailer" className="md:mt-5 scroll-mt-20">
            {/* <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-yellow-500">Official Trailer</h3> */}
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1`}
                title={`${movie.title} Trailer`}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

              ></iframe>
            </div>
          </div>
        )}

        <h3 className="text-2xl lg:text-3xl font-bold mt-10 border-t border-white/10 pt-10">
          Recommendations:
        </h3>
      </div>
    </div>
  );
}