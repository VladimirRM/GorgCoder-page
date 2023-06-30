import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes}  from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="navbar-content">
                <div className='brand-and-toggler flex flex-sb'>
                    <Link  to='/' className='navbar-brand text-uppercase fw-7 text-white ls-2 fs-22'>
                        Volodymyr
                    </Link>
                    <button type='button' className='navbar-open-btn text-white'>
                        <FaBars size={30} />
                    </button>

                        <div className='navbar-collapse'>
                            <button  className='navbar-close-btn text-white'type='button' >
                              <FaTimes size={30}/>
                            </button>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to='/'  className='nav-link text-white ls-1 
                                    text-uppercase fw-6 fs-22'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/'  className='nav-link text-white ls-1 
                                    text-uppercase fw-6 fs-22'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/'  className='nav-link text-white ls-1 
                                    text-uppercase fw-6 fs-22'>Home</Link>
                                </li>
                            </ul>
                        </div>
                </div>

            </div>
        </div>
      
    </nav>
  )
}

export default Navbar
