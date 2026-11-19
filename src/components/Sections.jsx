import Section from "./Section";
import * as C from "../data/content";
import { skillIcons, Github, Linkedin, Mail, Pin, External } from "./Icons";

export const About = () => (
  <Section id="about" title="About Me">
    <div className="about">
      <div className="prose">{C.about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
      <dl className="stats">{C.stats.map(([n, l]) => <div key={l} className="stat"><dd>{n}</dd><dt>{l}</dt></div>)}</dl>
    </div>
  </Section>
);

export const Education = () => (
  <Section id="education" title="Education" tone="tint-sage">
    <ol className="timeline">
      {C.education.map((e) => (
        <li key={e.school}>
          <h3>{e.school}</h3><p className="deg">{e.degree}</p>
          <p className="meta">{[e.period, e.score, e.note].filter(Boolean).join("  |  ")}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export const Skills = () => (
  <Section id="skills" title="Technical Skills">
    <div className="grid g3">
      {C.skills.map(([name, icon, items]) => { const I = skillIcons[icon]; return (
        <article key={name} className="card">
          <span className="ico"><I /></span><h3>{name}</h3>
          <ul className="tags">{items.map((s) => <li key={s}>{s}</li>)}</ul>
        </article>); })}
    </div>
  </Section>
);

export const Coursework = () => (
  <Section id="coursework" title="Relevant Coursework" tone="tint-peach">
    <ul className="grid g3 plain">{C.coursework.map((c) => <li key={c} className="card slim">{c}</li>)}</ul>
  </Section>
);

export const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="projects">
      {C.projects.map((p) => (
        <article key={p.title} className="card project">
          <header>
            <p className="cat">{p.category}</p>
            {p.status && <span className="status"><i /> {p.status}</span>}
          </header>
          <h3>{p.title}</h3>
          <p className="desc">{p.description}</p>
          <ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <ul className="tags small">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="row">
            {p.github ? <a className="btn btn-dark btn-sm" href={p.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              : <span className="btn btn-sm btn-off" title="Add your repository URL in src/data/content.js"><Github /> GitHub link soon</span>}
            {p.demo && <a className="btn btn-ghost btn-sm" href={p.demo} target="_blank" rel="noreferrer"><External /> Live Demo</a>}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" title="Certifications & Virtual Experience" tone="tint-lav">
    <div className="grid g3">
      {C.certifications.map((c) => (
        <article key={c.title} className="card"><p className="meta">{c.meta}</p><h3>{c.title}</h3>{c.text && <p className="desc">{c.text}</p>}</article>
      ))}
    </div>
    <h3 className="sub">Activities &amp; Leadership</h3>
    <ol className="timeline">
      {C.activities.map(([r, o]) => <li key={r + o}><h3>{r}</h3><p className="meta">{o}</p></li>)}
    </ol>
  </Section>
);

export const Interests = () => (
  <Section id="interests" title="Areas of Interest">
    <ul className="pills">{C.interests.map((i) => <li key={i}>{i}</li>)}</ul>
  </Section>
);

export const Contact = () => (
  <Section id="contact" title="Let's Connect" tone="tint-blush">
    <p className="lead">Have an opportunity, collaboration, or interesting idea? I'd love to connect and explore possibilities.</p>
    <ul className="contact-list">
      <li><Mail /><a href={`mailto:${C.profile.email}`}>{C.profile.email}</a></li>
      <li><Pin />{C.profile.location}</li>
      <li><Linkedin />{C.profile.linkedin ? <a href={C.profile.linkedin} target="_blank" rel="noreferrer">Harshitha Jadhav</a> : "Harshitha Jadhav"}</li>
      <li><Github />{C.profile.github ? <a href={C.profile.github} target="_blank" rel="noreferrer">GitHub profile</a> : <span className="muted">Add your GitHub URL in src/data/content.js</span>}</li>
    </ul>
    <div className="row">
      <a className="btn btn-dark" href={`mailto:${C.profile.email}`}><Mail /> Email Me</a>
      {C.profile.linkedin && <a className="btn btn-ghost" href={C.profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>}
      {C.profile.github && <a className="btn btn-ghost" href={C.profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>}
    </div>
  </Section>
);
