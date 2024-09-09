import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import usePaginator from '../hooks/usePaginator';


interface PaginatorProps {
    page: number;
    avanzar: ()=>void;
    retroceder: ()=>void;
}

const Paginator: React.FC<PaginatorProps> = ({page, avanzar, retroceder}) => {

    // const { avanzar, retroceder, page } = usePaginator()

    return (
        <div>
            <div className='flex justify-center gap-5 items-center mt-10'>
                {page != 1 ? (
                    <div onClick={retroceder} className='bg-black p-3 cursor-pointer'><IoIosArrowBack /></div>
                ) :
                    null}
                <div className='bg-black py-2 px-4'>{page}</div>
                <div onClick={avanzar} className='bg-black p-3 cursor-pointer'>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default Paginator