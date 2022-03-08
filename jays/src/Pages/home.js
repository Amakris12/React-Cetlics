import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Roster from '../Components/Roster'
import ImagesOne from '../Components/ImageOne'
const home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <ImagesOne/>
            <Roster/>
        </div>
    )
}

export default home
