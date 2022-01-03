import React from 'react'
import newProject from './../images/New Project.svg'
import logo from './../images/motivado_logo.png'

export default function Landing() {
    return (
        <div className="container flex flex-col md:flex-row md:content-center md:justify-center space-x-14">
            <img src={newProject} alt="Motivado" className="xl:w-[53%] xl:h-[53%] md:w-[60%] md:h-[60%] w-[90%] h-[90%] hidden md:contents" />
            <p className='hidden md:contents'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className='flex flex-col justify-center items-center space-y-4'>
                <img src={logo} alt="Motivato" className='w-[14rem] h-[14rem]' />
                <h1 className='text-6xl md:text-7xl font-bold'>Motivado</h1>
                <p className='text-lg text-gray-500 font-light text-center'>" Today is your opportunity to build the tomorrow you want "</p>
            </div>
        </div>
    )
}
