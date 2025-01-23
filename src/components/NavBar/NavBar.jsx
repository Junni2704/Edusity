import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt="" className='logo' />
    <ul className='menu'>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='contactBtn'>Contact Us</button></li>
    </ul>
   </nav>
  )
}

export default NavBar
