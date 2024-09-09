import CircleProgress from "@/app/components/CircleProgress";
import { fetchMovie } from "@/app/components/server/useFetching";
import { imageLink } from "@/app/utils/constants";
import Image from "next/image";

interface MoviePageProps {
    params: {
        id: number;
    }
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie = await fetchMovie(params.id);

    if (!movie) {
        return (
            <div>
                No encontramos ninguna película.
            </div>
        )
    }

    return (
        <div className="pt-[3.5%]">
            <div className="relative overflow-y-hidden h-[65vh]">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>

                <div className="flex gap-10 h-full absolute top-0 z-30 px-10 backdrop-blur-md pt-5 w-full">
                    <div className="w-[20%]">
                        <Image width={300} className="w-full" alt="Movie Image" height={300} src={`${imageLink + movie.poster_path}`} />
                        <div className="bg-yellow-400 mt-5 text-center text-black font-bold py-2 rounded-lg cursor-pointer">
                            Official trailer
                        </div>
                    </div>
                    <div className="w-[70%]">
                        <h1 className="text-[40px] font-bold">{movie.title}</h1>
                        <div>
                            <p>
                                {movie.release_date}
                            </p>
                        </div>
                        <h2 className="text-[25px] font-bold my-10">Overview:</h2>
                        <p>{movie.overview}</p>
                        <div className="flex items-center font-extrabold">
                            <CircleProgress score={movie.vote_average} width={150} />
                            <span>Users Score</span>
                        </div>

                        <div className="flex justify-center">
                            {
                                movie.genres.map(e => (
                                    <div key={e.id} className="mr-2 border border-yellow-500 px-3 py-1 rounded-lg text-yellow-500">{e.name}</div>
                                ))
                            }
                        </div>

                    </div>
                </div>

                <div className="absolute z-10 w-full ">
                    <Image className="object-contain w-full" width={300} alt="Movie Image" height={300} src={`${imageLink + movie.backdrop_path}`} />
                </div>
            </div>
        </div>
    );
}
