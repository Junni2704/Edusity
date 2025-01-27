import React, { useRef } from 'react'
import './Testimonial.css'
import bckbtn from '../../assets/back-icon.png'
import frntbtn from '../../assets/next-icon.png'
import icon1 from '../../assets/user-1.png'
import icon2 from '../../assets/user-2.png'
import icon3 from '../../assets/user-3.png'
import icon4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        else if(tx < 0){
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
  return (
    <div className='Testimonials container'>
            <img src={bckbtn} alt="" className='bckBtn' onClick={slideBackward} />
            <img src={frntbtn} alt="" className='frntBtn' onClick={slideForward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='sliide'>
                            <div className='userInfo'>
                            <img src={icon1} alt="" />
                            <div>
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                            </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='sliide'>
                            <div className='userInfo'>
                            <img src={icon2} alt="" />
                            <div>
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                            </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='sliide'>
                            <div className='userInfo'>
                            <img src={icon3} alt="" />
                            <div>
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                            </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className='sliide'>
                            <div className='userInfo'>
                            <img src={icon4} alt="" />
                            <div>
                            <h3>Emily Williams</h3>
                            <p>Edusity, USA</p>
                            </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
      
    </div>
  )
}

export default Testimonial
