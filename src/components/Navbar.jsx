import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";
import { Menu, Close } from "./Icons";
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <header className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
      <div className="wrap nav-in">
        <a href="#home" className="logo" aria-label="Home">HJ<span>.</span></a>
        <nav id="menu" className={open ? "open" : ""} aria-label="Primary">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
               className={active === id ? "on" : ""} aria-current={active === id ? "true" : undefined}>{label}</a>
          ))}
          <a className="btn btn-dark btn-sm" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
