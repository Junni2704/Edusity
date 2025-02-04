import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Title from './components/Title/Title'
import Gallery from './components/Gallery/Gallery'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Hero/>
        <Title Subtitle='WHAT WE OFFER' title='Our Programs'></Title>
        <Programs></Programs>
        <About></About>
        <Title Subtitle='GALLERY' title='Campus Photos'></Title>
        <Gallery></Gallery>
        <Title Subtitle='TESTIMONIALS' title='What Student Says'></Title>
        <Testimonial></Testimonial>
        <Title Subtitle='CONTACT US' title='Get In Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default App
