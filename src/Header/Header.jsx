import React from 'react'
import './Header.css'
// import '../App.css'

const Header = () => {
  return (
    <div className='header flex flex-col'  id='header'>
       <div className="container flex">
        <div className="header-content">
            <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>web design, branding, graphic </h2>
            <h1 className='text-white fw-6 header-title'>Hello i'm <span className='text-brown'>
              Web & Graphic Designer  </span> Living Kyiv Ukraine </h1>
              <div className='btn-groups flex'>
                
              </div>
        </div>
       </div>
    </div>
  )
}

export default Header
