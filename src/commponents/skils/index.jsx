import React from "react";
import "./style.scss";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "React",
  "Sass",
  "Bootstrap",
  "SVG",
  "animation",
  "Redux (toolkit)",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export default function InfiniteLoopSlider({
  children,
  duration,
  reverse = false,
}) {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
}

export function Tag({ text }) {
  return (
    <div className="tag">
      <span>#</span>
      {text}
    </div>
  );
}
export function App() {
  return (
    <div className="app">
      <header className="header">
      <marquee direction="left" scrollamount="8" style={{width:'150%'}}> <h1>My skills</h1></marquee>
      </header>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );
}
