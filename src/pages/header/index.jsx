import React from "react";
import "./style.scss";
import glav from "../../assets/image/glav.jpg";
import Menu from "../../commponents/menu";

export default function Header() {
  return (
    <section className="section_header">
      <div style={{ display: "flex", alignItems: "center", }}>
        <div
          className="glav"
          style={{ backgroundImage: `url("${glav}")` }}
        ></div>
       <a href="#hom"> <p>ARAM ARZUMANYAN</p></a>
      </div>

      <div className="menu">
        <ul>
          <a href="#hom">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </ul>
      </div>

      <div className="burger"><Menu/></div>
    </section>
  );
}
