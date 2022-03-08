import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Roster from '../Components/Roster'
import ImagesOne from '../Components/ImageOne'
import VideoOne from '../Components/VideoOne'
import Schudele from '../Components/Schudele'
import ImageTwo from '../Components/ImageTwo'
import Standings from '../Components/Standings'
const home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <ImagesOne/>
            <Roster/>
            <VideoOne/>
            <Schudele/>
            <ImageTwo/>
            <Standings/>
        </div>
    )
}

export default home
