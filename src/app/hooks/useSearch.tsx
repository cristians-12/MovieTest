import { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext';

const useSearch = () => {
    const [query, setQuery] = useState()
    const { setUrl } = useContext(MovieContext);

    const handleSearch = (e) => {
        setUrl(`https://api.themoviedb.org/3/search/movie?query=${query}`)
    }
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
  return (
    {
        handleQuery,
        handleSearch
    }
  )
}

export default useSearch