import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Roster from '../Components/Roster'
import ImagesOne from '../Components/ImageOne'
import VideoOne from '../Components/VideoOne'
import Schudele from '../Components/Schudele'
import ImageTwo from '../Components/ImageTwo'
import Standings from '../Components/Standings'
import ImageThree from '../Components/ImageThree'
import Championships from '../Components/Championships'
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
            <ImageThree/>
            <Championships/>
        </div>
    )
}

export default home
