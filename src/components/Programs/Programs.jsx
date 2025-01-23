import React from 'react'
import './Programs.css'
import prog1 from '/Users/junaidahmed/vite-project/src/assets/program-1.png'
import prog2 from '/Users/junaidahmed/vite-project/src/assets/program-2.png'
import prog3 from '/Users/junaidahmed/vite-project/src/assets/program-3.png'
import icon1 from '/Users/junaidahmed/vite-project/src/assets/program-icon-1.png'
import icon2 from '/Users/junaidahmed/vite-project/src/assets/program-icon-2.png'
import icon3 from '/Users/junaidahmed/vite-project/src/assets/program-icon-3.png'

function Programs() {
  return (
    <div className='courseProg container'>
      <div className='programs'>
      <div className='Prog'>
        <img src={prog1} alt="" />
        <div className='caption'>
            <img src={icon1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='Prog'>
        <img src={prog2} alt="" />
        <div className='caption'>
            <img src={icon2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className='Prog'>
        <img src={prog3} alt="" />
        <div className='caption'>
            <img src={icon3} alt="" />
            <p>Post Graduation Degree</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Programs
