import React from 'react';
import './style.scss';

export default function ProjectComp(props) {
    const item=props.item
  return (
    <div data-aos="fade-right" className="projectsContent">
    <div
      className="imag"
      style={{ backgroundImage: `url("${item.img}")` }}
    ></div>

    <div className="content2">
      <a href={item.href} target="_blank">
        <button>Project link</button>
      </a>

      <a href={item.resume} download>
        <button>Download CV</button>
      </a>
     
    </div>
  </div>
  )
}
