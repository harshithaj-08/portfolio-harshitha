import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { About, Education, Skills, Coursework, Projects, Experience, Interests, Contact } from "./components/Sections";
import { nav } from "./data/content";
export default function App() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (<>
    <a className="skip" href="#about">Skip to content</a>
    <Navbar active={active} />
    <main><Hero /><About /><Education /><Skills /><Coursework /><Projects /><Experience /><Interests /><Contact /></main>
    <Footer />
  </>);
}
