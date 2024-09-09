import { Movie } from '@/app/types'
import { imageLink } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({ e }: { e: Movie }) => {
    return (
        <div className='text-center flex flex-col items-center w-fit rounded-lg hover:scale-105 hover:bg-gray-800 ' key={e.id}>
            <figure>
                <Image width={300} height={200} src={imageLink + e.poster_path} alt="Poster image" />
            </figure>
            <span className='font-bold whitespace-nowrap text-ellipsis overflow-hidden w-52'>{e.title}</span>
            <span>{e.release_date}</span>
        </div>
    )
}

export default MovieCard