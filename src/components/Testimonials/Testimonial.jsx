import React from 'react'
import './Testimonial.css'
import bckbtn from '../../assets/back-icon.png'
import frntbtn from '../../assets/next-icon.png'
import icon1 from '../../assets/user-1.png'
import icon2 from '../../assets/user-2.png'
import icon3 from '../../assets/user-3.png'
import icon4 from '../../assets/user-4.png'

const Testimonial = () => {
  return (
    <div className='Testimonials container'>
            <img src={bckbtn} alt="" className='bckBtn' />
            <img src={frntbtn} alt="" className='frntBtn' />
      {/* <ul>
        <li>
            <div className='tesInfo'>
                <div className='tesImg'>
                <img src={icon1} alt="" />
                </div>
                <div className='tesText'>
                <h3>Emily Williams</h3>
                <p>Edusity, USA</p>
                </div>
            </div>
            <div className='reviews'>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
        </li>
        <li>
            <div className='tesInfo'>
                <div className='tesImg'>
                <img src={icon2} alt="" />
                </div>
                <div className='tesText'>
                <h3>Emily Williams</h3>
                <p>Edusity, USA</p>
                </div>
            </div>
            <div className='reviews'>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
        </li>
        <li>
            <div className='tesInfo'>
                <div className='tesImg'>
                <img src={icon2} alt="" />
                </div>
                <div className='tesText'>
                <h3>Emily Williams</h3>
                <p>Edusity, USA</p>
                </div>
            </div>
            <div className='reviews'>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
        </li>
        <li>
            <div className='tesInfo'>
                <div className='tesImg'>
                <img src={icon2} alt="" />
                </div>
                <div className='tesText'>
                <h3>Emily Williams</h3>
                <p>Edusity, USA</p>
                </div>
            </div>
            <div className='reviews'>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
        </li>
      </ul>         */}
    </div>
  )
}

export default Testimonial
