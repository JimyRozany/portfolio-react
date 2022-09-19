import React from 'react'
import './header.css'
import CTA from './CTA'
import me3 from '../../assets/me3.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Mohamed Gamal</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={me3} alt="me" />
        </div>


        <a href="#contact" target="_blank" className='scroll_down'>Scroll Down</a>

      </div>

      
      
    </header>
    
    
  )
}

export default Header