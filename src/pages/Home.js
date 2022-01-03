import React from 'react'
import { 
    Landing, 
    DevFooter, 
    // Contributors 
    Teams
} from '../components'

export default function Home() {
    return (
        <>
            <Landing />
            <br />
            <Teams />
            <DevFooter />
        </>
    )
}
