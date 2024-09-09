import React from 'react'

const RegisterModal = () => {
  return (
    <div className='fixed flex z-50 w-screen items-center h-screen'>
        <div className='fixed flex items-center top-52 right-40 backdrop-blur-sm w-[55vw] rounded-3xl h-[50vh] border border-white'>
            <div className='flex'>
                <div className='px-5'>
                    Sign Up
                </div>
                <div>
                    Login 
                </div>
            </div>
            <div className='absolute bg-black right-0 w-[50%] top-0 rounded-tr-3xl rounded-br-3xl h-full'>
                <p className='text-[40px] text-center font-bold mt-10'>Welcome to Quickbet Movies! </p>
                <p className='text-center mt-20'>Ready to unlock a universe of cinematic delights?</p>
            </div>
        </div>
    </div>
  )
}

export default RegisterModal