import React from 'react'
import './Gallery.css'
import img1 from '/Users/junaidahmed/vite-project/src/assets/gallery-1.png'
import img2 from '/Users/junaidahmed/vite-project/src/assets/gallery-2.png'
import img3 from '/Users/junaidahmed/vite-project/src/assets/gallery-3.png'
import img4 from '/Users/junaidahmed/vite-project/src/assets/gallery-4.png'

const Gallery = () => {
  return (
    <div className='gal container'>
        <div className='galImg'>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         <img src={img4} alt="" />
      </div>
      <div className='btn'>
        <button>See More Here</button>
      </div>
    </div>
  )
}

export default Gallery
