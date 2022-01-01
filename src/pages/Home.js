import React from 'react'
import { 
    Landing, 
    // Footer, 
    Contributors 
} from '../components'

export default function Home() {
    return (
        <div className='container'>
            <Landing />
            <div className="container">
                <Contributors />
                {/* <Footer /> */}
            </div>
            
        </div>
    )
}
