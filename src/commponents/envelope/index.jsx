import React,{ useEffect, useRef, useState } from 'react';
import './style.scss';


export default function Envelope() {
	const [scrol,setScrol]=useState(0)
	
	window.onscroll=()=>{
		setScrol(Math.floor(window.scrollY))
	}
	useEffect(() => {
	  if(scrol<=380|| scrol>=4000){
		MyRef.current.style.visibility='hidden'
	  }else{
		MyRef.current.style.visibility='visible'
	  }

	}, [scrol])
	
	let MyRef=useRef()

  return (

    <div ref={MyRef}>
  <div id="bg"></div>
<div className="contact">
	<div className="envelope">
		<div className="top">
			<div className="outer"><div className="inner"></div></div>
		</div>
		<div className="bottom"></div>
		<div className="left"></div>
		<div className="right"></div>
		<div className="cover"></div>
		<div className="paper">
			<a className="call" href="tel:+37497025990"><div className="i"></div>094-025-990</a>
			<a className="mail" href="mailto:aram-coder@gmail.com">aram-coder@gmail.com</a>
		</div>
	</div>
</div>

  </div>

  )
}



