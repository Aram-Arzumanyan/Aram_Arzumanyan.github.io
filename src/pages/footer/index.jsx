import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="contEnt">
        <div className="title">
          <h3>Aram Arzumanyan</h3>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="social">
          <h3>SOCIAL</h3>
          <a
            href="https://www.facebook.com/aram.arzumanyan.311"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-facebook2"></span>
          </a>
          <a href="https://www.instagram.com/wrestl1ng__98/" target="_blank">
            <span className="icon-instagram"></span>
          </a>

          <a href="https://web.telegram.org/k/" target="_blank">
            
            <span className="icon-telegram"></span>
          </a>

          <a
            href="https://www.linkedin.com/in/aram-arzumanyan-461903246/"
            target="_blank"
          >
           
            <span className="icon-linkedin"></span>
          </a>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <p>© Copyright 2023. Made by</p>
        <a href="aram-coder@gmail.com"> Aram Arzumanyan</a>
      </div>
    </section>
  );
}
