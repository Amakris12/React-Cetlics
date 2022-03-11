import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="icon" src="http://assets.stickpng.com/images/58419c6aa6515b1e0ad75a61.png" alt="Celtics logo" />
        <h2 className='title'>The Boston Celtics</h2>
            <a className="nav-link" href="#Roster"><p ><h4>Roster</h4></p></a>
            <a className="nav-link" href=""><p><h4>Standings</h4></p></a>
            <a className="nav-link" href=""><p><h4>Games</h4></p></a>
            <a className="nav-link" href=""><p><h4>Championships</h4></p></a>
            <a className="nav-link" href=""><p><h4>Gallery</h4></p></a>
    </div>
  )
}

export default Navbar