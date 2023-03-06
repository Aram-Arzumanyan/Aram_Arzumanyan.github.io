import React, { useState } from "react";
import "./style.scss";
import dope1 from "../../assets/image/dope.jpg";
import dope2 from "../../assets/image/simple.jpg";
import dope3 from "../../assets/image/showcase.jpg";
import resume from "../../assets/image/Resume.pdf";
import crown from '../../assets/image/crown.jpeg'
import ProjectComp from "../../commponents/projectCOMP";

export default function Projects() {
  const [proj, setProj] = useState([
    {
      id:4,
      img:crown,
      href:'https://fc-rest.netlify.app/'
    },
    {
      id: 1,
      img: dope1,
      href: "https://aram-arzumanyan-github-io.vercel.app/",
      resume: resume,
    },
    {
      id: 2,
      img: dope2,
      href: "https://aram-arzumanyan-github-io-k5dm.vercel.app/",
      resume: resume,
    },
    {
      id: 3,
      img: dope3,
      href: "https://aram-arzumanyan-github-io-k5dm.vercel.app/",
      resume: resume,
    },
   
  ]);
  return (
    <section className="projectSection" id="projects">
      <div data-aos="fade-up" className="tilteProject">
        <h1>PROJECTS</h1>
        <hr />
        <p>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study Software
          Screenshot
        </p>
      </div>
      {proj.map(el=><ProjectComp key={el.id} item={el}/>)}
    </section>
  );
}
