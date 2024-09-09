import { useState } from 'react'
import { useMovieContext } from '../context/MovieContext';

const useSearch = () => {
    const [query, setQuery] = useState()
    const { setUrl, setTag } = useMovieContext();

    const handleSearch = () => {
        setUrl(`https://api.themoviedb.org/3/search/movie?query=${query}`)
        setTag(query)
    }
    const handleQuery = (e:React.KeyboardEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleKeydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
      if(e.key == 'Enter'){
        handleSearch()
      }
    }

  return (
    {
        handleQuery,
        handleSearch,
        handleKeydown
    }
  )
}

export default useSearch