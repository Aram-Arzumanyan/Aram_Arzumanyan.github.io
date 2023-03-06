import React, { useEffect, useState } from "react";
import InfiniteLoopSlider, { App } from "../../commponents/skils";
import "./style.scss";

export default function About() {

  return (
    <section className="aboutSection" id="about">
      <div data-aos="fade-up" className="tilteAbout">
        <h1>ABOUT ME</h1>
       
        <hr />
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div data-aos="fade-down" className="skils">
        <div className="knowMe">
          <h1>Get to know me!</h1>
          <p>
            I'm a <strong>Frontend Web Developer</strong> building the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the{" "}
            <strong>Projects</strong> section.<br/><br/> I also like sharing content related
            to the stuff that I have learned over the years in{" "}
            <strong>Web Development</strong> so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my{" "}  
            <b> <a
              href="https://www.linkedin.com/in/aram-arzumanyan-461903246/"
              target="_blank"
            >
              Linkedin  
            </a></b>  <br />
                     where I post useful content related to Web Development and
            Programming <br/><br /> I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{" "}
            <strong>contact</strong> me.
          </p>

          <a href="#contact"><button>Contact</button></a>
        </div>
        <div data-aos="fade-up" className="loop">
          <InfiniteLoopSlider /><App />
        </div>
      </div>
    </section>
  );
}
