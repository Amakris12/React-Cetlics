import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar-section">
            <a className="nav-link" href=""><li ><h4>Roster</h4></li></a>
            <a className="nav-link" href=""><li><h4>Standings</h4></li></a>
            <a className="nav-link" href=""><li><h4>Games</h4></li></a>
            <a className="nav-link" href=""><li><h4>Championships</h4></li></a>
            <a className="nav-link" href=""><li><h4>Gallery</h4></li></a>
        </ul>
    </div>
  )
}

export default Navbar