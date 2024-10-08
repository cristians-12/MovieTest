import { useMovieContext } from "@/app/context/MovieContext"
import { useState } from "react"

const useNavbar = () => {

    const [pop, setPop] = useState(false)
    const {setUrl, setTag} = useMovieContext()

    const handlePop = () => {
        setPop(!pop)
    }
    const handlePopular = ()=>{
        setUrl('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
        setTag('Results for popular')
    }

    return (
        {
            handlePop,
            pop, 
            handlePopular
        }
    )
}

export default useNavbar