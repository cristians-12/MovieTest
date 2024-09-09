import Image from 'next/image'
import React, { useState } from 'react'
import { MdLocalMovies } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface RegisterModalProps {
    handlePop: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ handlePop }) => {

    const [active, setActive] = useState(false)

    return (
        <div className='fixed flex z-50 w-screen h-screen'>
            <div className='fixed ps-32 flex top-52 right-40 backdrop-blur-sm w-[55vw] rounded-3xl h-[50vh] border border-white'>
                <div className='h-full w-[35%] flex flex-col items-center'>
                    <div className='flex bg-gray-500 rounded-md  mt-10 font-bold'>
                        <div onClick={() => setActive(!active)} className={`px-7 py-3 rounded-md cursor-pointer  ${active ? 'bg-[#F0B90B]' : ''}`}>
                            Sign Up
                        </div>
                        <div onClick={() => setActive(!active)} className={`px-7 py-3 rounded-md cursor-pointer  ${!active ? 'bg-[#F0B90B]' : ''}`} >
                            Login
                        </div>
                    </div>
                    <div className='w-full mt-20'>
                        {
                            active ? (
                                <div>
                                    <input type="email" className='w-full px-2 py-3 rounded-lg' placeholder='Email' />
                                    <input type="email" className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Password' />
                                    <input type="email" className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Confirm password' />
                                    <div className='bg-[#F0B90B] flex justify-center items-center gap-3 text-center mt-6 text-black font-bold py-3 rounded-md cursor-pointer hover:bg-orange-400'>
                                        Register me!
                                        <MdLocalMovies />
                                    </div>
                                </div>
                            ) :

                                (
                                    <div>
                                        <input type="email" className='w-full px-2 py-3 rounded-lg' placeholder='Email' />
                                        <input type="email" className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Password' />
                                        <div className='bg-[#F0B90B] flex justify-center items-center gap-3 text-center mt-6 text-black font-bold py-3 rounded-md cursor-pointer hover:bg-orange-400'>
                                            Continue
                                            <MdLocalMovies />
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>

                <div className='absolute px-10 flex flex-col items-center justify-center bg-black right-0 w-[50%] top-0 rounded-tr-3xl rounded-br-3xl h-full'>
                    <div className='flex'>
                        <p className='text-[40px] text-center font-bold mt-10'>🎥 Welcome to Quickbet Movies! </p>
                        <div className='cursor-pointer' onClick={handlePop}>
                            <IoMdClose size={40} />
                        </div>
                    </div>
                    <p className='text-center mt-10 mb-10'>Ready to unlock a universe of cinematic delights?</p>
                    <Image width={200} height={100} alt='svg' src={'/images/register.svg'} />
                </div>
            </div>
        </div>
    )
}

export default RegisterModal