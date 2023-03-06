import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import back from "../../assets/image/back.jpg";

export default function Home() {
  const[scrol,setScrol]=useState(0)
  window.onscroll=()=>{ 
    setScrol(Math.floor(window.scrollY)) 
   
     } 
    useEffect(()=>{ 
      if(scrol==0){
        MyRef.current.style.opacity='1'
      }
     if(scrol>=100){
MyRef.current.style.opacity='0.8'
     }if(scrol>=250){
      MyRef.current.style.opacity='0.5'
     }
     if(scrol>=500){
      MyRef.current.style.opacity='0.3'
     }
  
    },[scrol]);
    let MyRef=useRef()
  return (
    <div data-aos="fade-up" ref={MyRef} id='hom' className="home" style={{ backgroundImage: `url("${back}")` }}>
      <div className="iconsSite">
        
       <a className="icon-facebook2" href="https://www.facebook.com/aram.arzumanyan.311" target="_blank" rel="noopener noreferrer"></a>
          <a className="icon-instagram" href="https://www.instagram.com/wrestl1ng__98/" target='_blank'></a>
          <a className="icon-linkedin" href="https://www.linkedin.com/in/aram-arzumanyan-461903246/" target='_blank'></a>
          <a className='icon-envelop' href="https://e.mail.ru/inbox/?back=1" target='_blank'></a>
          <a className="icon-telegram" href="https://web.telegram.org/k/" target='_blank' />
        
      </div>
      <div className="titleContent">
        <h1>HEY, I'M ARAM ARZUMANYAN</h1>
        <br />
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <br />
      <a href="#projects">  <button>PROJECTS</button></a>
      </div>
    </div>
  );
}
