import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Mohammad Farman</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='' target='_blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/farman2308/' target='_blank'><AiFillInstagram/></a>
      </div>

      <div className='copyright'>
        <small>&copy; Mohammad Farman, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer