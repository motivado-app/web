import React from 'react'
import newProject from './../images/Project.webp'
import logo from './../images/motivado_logo.png'

export default function Landing(){
    return (
        <div className='md:flex space-x-9 space-y-8'>
            <img src={newProject} alt="Motivado" className='md:w-[49%] md:h-[49%]' />
            <div className='flex flex-col justify-center items-center md:space-y-4 text-center md:gap-x-6'>
                <img src={logo} alt="Motivado" className='md:w-[13rem] md:h-[13rem] w-[11rem] h-[11rem]' />
                <h1 className='text-6xl md:text-7xl font-bold'>Motivado</h1>
                <p className='text-lg text-gray-500 font-light'>
                    " Today is your opportunity to build the tomorrow you want "
                </p>
            </div>
        </div>
    )
}
