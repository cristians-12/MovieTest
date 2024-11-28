import { useState } from 'react'

const usePaginator = () => {
    const [page, setPage] = useState(1);

    const retroceder = () => {
        console.log(page)
        setPage(page - 1)
    }
    const avanzar = () => {
        setPage(page + 1)
    }

    return (
        {
            retroceder,
            avanzar,
            page
        }
    )
}

export default usePaginator