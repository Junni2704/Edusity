import React from 'react'
import './Contact.css'
import icon from '../../assets/msg-icon.png'
import icon1 from '../../assets/mail-icon.png'
import icon2 from '../../assets/phone-icon.png'
import icon3 from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "eb84ae53-fb3c-4b2b-82ea-18b6812f1c81");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


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
        <form onSubmit={onSubmit}>
            <label>Enter Your Name</label>
            <input type='text' name='text' placeholder='Enter Your Name'></input>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Phone Number'></input>
            <label>Phone Number</label>
            <input type='text' name='email' placeholder='Enter Your Email Address'></input>
            <label>Write Your Message Here</label>
            <textarea type='message' rows="6" placeholder='Enter Your Message Here'></textarea>
            <button type='submit' className='btn1'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
