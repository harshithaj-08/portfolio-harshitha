import { profile } from "../data/content";
import { Github, Linkedin, Mail, Up } from "./Icons";
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap foot-in">
      <div><p className="fname">Designed &amp; Developed by Harshitha Jadhav</p><p className="muted">{profile.tagline}</p></div>
      <div className="row">
        {profile.github && <a className="icon-btn" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>}
        {profile.linkedin && <a className="icon-btn" href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>}
        <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        <a className="icon-btn" href="#home" aria-label="Back to top"><Up /></a>
      </div>
    </div></footer>
  );
}
