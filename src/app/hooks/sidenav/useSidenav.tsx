import { MovieContext } from '@/app/context/MovieContext';
import { useContext, useState } from 'react'

const useSidenav = () => {

    const [visible, setVisible] = useState(false);

    const {setTag, setUrl} = useContext(MovieContext)

    const handleVisibility = () => {
        setVisible(!visible);
    }

    const handleTag = (id: number, tag:string) => {
        setTag(tag)
        setUrl(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`)
    }

    return (
        {
            visible,
            handleVisibility,
            handleTag
        }
    )
}

export default useSidenav