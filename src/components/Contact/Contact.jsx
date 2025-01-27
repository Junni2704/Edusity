import React from 'react'
import './Contact.css'
import icon from '../../assets/msg-icon.png'
import icon1 from '../../assets/mail-icon.png'
import icon2 from '../../assets/phone-icon.png'
import icon3 from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact container'>
      <div className='left_cont'>
        <div className='cont_head'>
            <h3>Send us a message</h3>
            <img src={icon} alt="" />
        </div>
        <p className='cont_para'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

        <ul>
            <li><img src={icon1} alt="" />abc@xyz.com</li>
            <li><img src={icon2} alt="" />+1 123-456-7890</li>
            <li><img src={icon3} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
       
      </div>
      <div className='rgt_cont'>
        <form>
            <label>Enter Your Name</label>
            <input type='text' name='text' placeholder='Enter Your Name'></input>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Phone Number'></input>
            <label>Phone Number</label>
            <input type='text' name='email' placeholder='Enter Your Email Address'></input>
            <label>Write Your Message Here</label>
            <textarea type='message' rows="6" placeholder='Enter Your Message Here'></textarea>
            <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
