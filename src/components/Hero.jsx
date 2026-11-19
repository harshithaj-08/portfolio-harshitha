import { profile } from "../data/content";
import { Github, Linkedin, Download } from "./Icons";
const Social = ({ href, label, children }) =>
  href ? <a className="icon-btn" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a> : null;
// Abstract data-viz composition built from SVG: no photo, no external assets.
function DataArt() {
  const pts = [[58,190],[108,150],[158,160],[208,112],[258,124],[308,70]];
  return (
    <div className="art" aria-hidden="true">
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      <div className="glass g-chart">
        <svg viewBox="0 0 380 250">
          {[50,100,150,200].map((y) => <line key={y} x1="20" x2="360" y1={y} y2={y} className="grid" />)}
          {[[45,70],[95,110],[145,85],[195,140],[245,120],[295,165]].map(([x,h]) => <rect key={x} x={x} y={225-h} width="26" height={h} rx="8" className="bar" />)}
          <polyline points={pts.map((p) => p.join(",")).join(" ")} className="line" />
          {pts.map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" className="dot" />)}
        </svg>
      </div>
      <div className="glass chip c1">import pandas as pd</div>
      <div className="glass chip c2">model.fit(X, y)</div>
      <div className="glass chip c3">{'{ "type": "GeoJSON" }'}</div>
      <div className="glass ring"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" className="ring-bg"/><circle cx="40" cy="40" r="30" className="ring-fg"/></svg></div>
    </div>
  );
}
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="hello">Hello, I'm</p>
          <h1><span>Harshitha</span><span>Jadhav</span></h1>
          <p className="role">{profile.title}</p>
          <p className="tag">“{profile.tagline}”</p>
          <div className="row">
            <a className="btn btn-dark" href="#projects">Explore My Work</a>
            <a className="btn btn-ghost" href={profile.resume} download><Download /> Download Resume</a>
          </div>
          <div className="row socials">
            <Social href={profile.github} label="GitHub"><Github /></Social>
            <Social href={profile.linkedin} label="LinkedIn"><Linkedin /></Social>
          </div>
        </div>
        <DataArt />
      </div>
    </section>
  );
}
