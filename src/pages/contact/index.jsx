import React, { useRef, useState } from 'react';
import './style.scss';
import back from '../../assets/image/back.jpg';
import glav2 from '../../assets/image/glav2.jpg';
import usevalidation from '../../customhooks/usevalidation';



export default function Contact() {
  const[error,validate]=usevalidation();
  const [mail,setMail]=useState('');

  const handleMail = (e)=>{
    setMail(e.target.value);
    validate(e.target.value,'email')
  
  }
  let MyRef =useRef()
  return (
    <div data-aos="fade-up"  className='homes' id='contact' style={{ backgroundImage: `url("${back}")` }}>
         <div className="titleContents">
        <h1>CONTACT</h1><br />
        <hr /><br />
        <p>
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div>
<div className='contact_form'>
<div className='imag' style={{backgroundImage:`url('${glav2}')`}}> </div>

<div className='inp_form'>
  <form action="">
    <label htmlFor="">Name</label><br />
    <input type="text"  placeholder='Enter Your Name'/><br /><br /><br />
    <label htmlFor="">Email</label><br />
    <input type="email" ref={MyRef} placeholder='Enter Your Email' onChange={handleMail}  /><br /><br /><br />
    <label htmlFor="">Message</label><br />
    <input type="text" placeholder='Enter Your Message' style={{paddingBottom:'200px'}} />
  </form>
  <button onClick={()=>{
      if(error || mail ===''){
        MyRef.current.style.border = "3px solid red";
      }else{
        MyRef.current.style.border = "";
      }
  }}>Submit</button>
</div>

</div>
    </div>
  )
}
