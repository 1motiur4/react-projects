import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="cocktail db logo" className='logo'></img>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <h2>navbar component</h2>
    </nav>
  )
}

export default Navbar
