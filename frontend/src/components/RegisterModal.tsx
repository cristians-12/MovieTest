import Image from 'next/image'
import React, { useState } from 'react'
import { MdLocalMovies } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import useRegister from '@/app/hooks/auth/useRegister';

interface RegisterModalProps {
    handlePop: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ handlePop }) => {

    const [active, setActive] = useState(false)
    const { passMatch, handlePass, handleConfirmPass, handlePassMatch, handleEmail, handleLogin } = useRegister()

    return (
        <div className='fixed flex z-50 w-screen h-screen'>
            <div className='fixed lg:ps-32 flex flex-col lg:flex-row lg:top-52 lg:right-40 backdrop-blur-sm lg:w-[70vw] h-[80vh] w-screen rounded-3xl lg:h-[65vh] border border-white'>
                <div className='h-full lg:w-[35%] flex flex-col items-center text-black'>
                    <div className='flex bg-gray-500 rounded-md  mt-10 font-bold'>
                        <div onClick={() => setActive(!active)} className={`px-7 py-3 rounded-md cursor-pointer  ${active ? 'bg-[#F0B90B]' : ''}`}>
                            Registrate
                        </div>
                        <div onClick={() => setActive(!active)} className={`px-7 py-3 rounded-md cursor-pointer  ${!active ? 'bg-[#F0B90B]' : ''}`} >
                            Iniciar sesion
                        </div>
                    </div>
                    <div className='w-full mt-20'>
                        {
                            active ? (
                                <div>
                                    <input onChange={handleEmail} type="email" className='w-full px-2 py-3 rounded-lg' placeholder='Email' />
                                    <input onChange={handlePass} type="text" className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Password' />
                                    <input onChange={handleConfirmPass} type="text" className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Confirm password' />
                                    <div onClick={handlePassMatch} className='bg-[#F0B90B] flex justify-center items-center gap-3 text-center mt-6 text-black font-bold py-3 rounded-md cursor-pointer hover:bg-orange-400'>
                                        Register me!
                                        <MdLocalMovies />
                                    </div>
                                    {passMatch && <h6 className='text-red-600 mt-5 font-bold text-center'>Password must match</h6>}
                                </div>
                            ) :

                                (
                                    <div>
                                        <input type="email" onChange={handleEmail} className='w-full px-2 py-3 rounded-lg' placeholder='Email' />
                                        <input type="email" onChange={handlePass} className='w-full mt-2 px-2 py-3 rounded-lg' placeholder='Password' />
                                        <div onClick={handleLogin} className='bg-[#F0B90B] flex justify-center items-center gap-3 text-center mt-6 text-black font-bold py-3 rounded-md cursor-pointer hover:bg-orange-400'>
                                            Continuar
                                            <MdLocalMovies />
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>

                <div className='lg:absolute lg:px-10 flex flex-col items-center justify-center bg-black right-0 h-full rounded-b-3xl lg:w-[50%] top-0 rounded-tr-3xl rounded-br-3xl'>
                    <div className='flex'>
                        <p className='text-[40px] text-center font-bold mt-10'>🎥 Welcome to Quickbet Movies! </p>
                        <div className='cursor-pointer' onClick={handlePop}>
                            <IoMdClose className='absolute lg:block top-5 right-5 ' size={40} />
                        </div>
                    </div>
                    <p className='text-center mt-10 mb-10'>Ready to unlock a universe of cinematic delights?</p>
                    <Image className='hidden lg:block' width={200} height={100} alt='svg' src={'/images/register.svg'} />
                </div>
            </div>
        </div>
    )
}

export default RegisterModal