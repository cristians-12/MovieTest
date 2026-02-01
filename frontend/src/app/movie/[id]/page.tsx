// src/app/movie/[id]/page.tsx
import CircleProgress from "@/components/CircleProgress";
import { fetchMovie } from "@/components/server/useFetching";
import { getMovieVideo } from "@/lib/getMovies";
import { Genre } from "@/types/movie/movie.type";
import { imageLink } from "@/utils/constants";
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
    <div className="pt-12 lg:pt-16">
      <div className="relative lg:overflow-hidden lg:min-h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20 h-[75vh]"></div>

        <div className="lg:flex gap-10 absolute top-0 z-30 px-10 backdrop-blur-md pt-5 w-full">
          <div className="lg:w-[20%] w-[100%]">
            <Image
              width={300}
              height={450}
              className="w-full rounded-lg shadow-lg"
              alt={movie.title}
              src={`${imageLink + movie.poster_path}`}
            />
            <div className="bg-yellow-400 mt-5 text-center text-black font-bold py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition">
              Official Trailer
            </div>
          </div>
          <div className="lg:w-[70%] w-full">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {movie.title}
            </h1>
            <p className="text-gray-400 mb-4">{movie.release_date}</p>
            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">
              Overview:
            </h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            <div className="flex items-center font-extrabold mt-8">
              <CircleProgress score={movie.vote_average} width={150} />
              <span className="ml-4 text-lg">Users Score</span>
            </div>
            <div className="flex justify-center overflow-x-scroll lg:overflow-auto mt-6 space-x-2">
              {/* movie.genres ahora debería existir tras el await de fetchMovie */}
              {movie.genres?.map((e: Genre) => (
                <div
                  key={e.id}
                  className="border border-yellow-500 cursor-pointer px-3 py-1 rounded-lg text-yellow-500 text-sm lg:text-base"
                >
                  {e.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full min-h-[75vh]">
          <Image
            className="object-cover w-full h-[75vh]"
            width={1920}
            height={1080}
            alt="Movie Backdrop"
            src={`${imageLink + movie.backdrop_path}`}
          />
        </div>
      </div>

      {videoKey && (
        <div id="trailer" className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-yellow-500">Official Trailer</h3>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoKey}?rel=0&modestbranding=1`}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <h3 className="text-2xl lg:text-3xl font-bold mt-10">Recommendations:</h3>
    </div>
  );
}