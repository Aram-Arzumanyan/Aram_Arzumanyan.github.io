import React from 'react';
import './style.scss';

export default function Menu() {
  return (
    <div>
 <input type="checkbox" id="active"/>
    <label for="active" className="menu-btn"><span></span></label>
    <label for="active" className="close"></label>
    <div className="wrapper">
      <ul>
<li><a href="#hom">HOME</a></li>
<li><a href="#about">ABOUT</a></li>
<li><a href="#projects">PROJECTS</a></li>
<li><a href="#contact">CONTACT</a></li>
</ul>
</div>

    </div>
  )
}
