import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt="" className='logo' />
    <ul className='menu'>
        <li><Link to='banner' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Course' smooth={true} offset={-200} duration={500}>Program</Link></li>
        <li><Link to='AboutSec' smooth={true} offset={-200} duration={500}>About Us</Link></li>
        <li><Link to='gal' smooth={true} offset={-150} duration={500}>Campus</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={300} duration={500}><button className='contactBtn'>Contact Us</button></Link></li>
    </ul>
   </nav>
  )
}

export default NavBar
