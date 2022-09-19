import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="www.linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="www.github.com" target="_blank"><FaGithub /></a>
        <a href="www.facebook.com" target="_blank"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocial