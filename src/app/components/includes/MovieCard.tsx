import { Movie } from '@/app/types'
import { imageLink } from '@/app/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CircleProgress from '../CircleProgress'

const MovieCard = ({ e }: { e: Movie }) => {
    return (
        <Link href={`movie/${e.id}`} className='text-center flex flex-col items-center w-fit rounded-lg hover:scale-105 bg-gray-700 hover:bg-gray-800 cursor-pointer' key={e.id}>
            <figure>
                <Image className='rounded-tl-lg rounded-tr-lg' width={300} height={200} src={imageLink + e.poster_path} alt="Poster image" />
            </figure>
            <span className='font-bold whitespace-nowrap text-ellipsis overflow-hidden w-52 my-5'>{e.title}</span>
            <span>{e.release_date}</span>
            <CircleProgress width={50} score={e.vote_average}/>
        </Link>
    )
}

export default MovieCard