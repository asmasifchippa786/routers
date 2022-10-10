import React from 'react'
import './index.css'


function Contact() {
  return (
    <div 
    className='contact-body'>
      <div className='container'>
        <div className="text-center container">
          <div className="form container" style={{paddingTop:'50px',width : '50%'}}> 
            <div className="inputBx">
              <input type="text" name='' placeholder='Full Name' />
            </div>
            <div className="inputBx">
              <input type="text" name='' placeholder='Email Address' />
            </div>
            <div className="inputBx">
              <input type="text" name='' placeholder='Mobile no.' />
            </div>
            <div className="inputBx">
              <textarea placeholder='Write your message here'></textarea>
            </div>
            <div className="inputBx">
              <input type="submit" name='' value='Send' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
