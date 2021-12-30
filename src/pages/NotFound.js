import React from 'react'
import { Link } from 'react-router-dom'
import image404 from '../images/404 Not Found.svg'

export default function NotFound() {
    return (
        <div className="container flex justify-center content-center xl:flex-row flex-col space-x-7 h-[85vh]">
            <div className="flex justify-center items-center text-center">
                <img src={image404} alt="404 Not Found" className="xl:w-[97%] xl:h-[97%] md:w-[60%] md:h-[60%] w-[90%] h-[90%]" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="text-4xl font-bold">404 Not Found</h1>
                <div className="text-xl text-center">
                    The page you are looking for does not exist...
                </div>
                <Link to="/" className="btn btn-primary">
                    Go to Homepage
                </Link>
            </div>
        </div>
    )
}
