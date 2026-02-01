import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa'
import {
  SiMongodb,
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiDocker,
  SiFirebase,
  SiArduino,
  SiAndroid,
  SiC,
} from 'react-icons/si'

import config from '../config.json'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

/* ================= TECH ICON MAP ================= */
const techIcons = {
  react: <FaReact />,
  nextjs: <SiNextdotjs />,
  node: <FaNodeJs />,
  nodejs: <FaNodeJs />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  python: <FaPython />,
  java: <FaJava />,
   C: <SiC />,
  fastapi: <SiFastapi />,
  flask: <SiFastapi />,
  mongodb: <SiMongodb />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  docker: <SiDocker />,
  firebase: <SiFirebase />,
  gemini: <FaPython />, // placeholder
  "gemini ai": <FaPython />,
  android: <SiAndroid />,
  "android studio": <SiAndroid />,
  arduino: <SiArduino />,
}

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )

      projectsRef.current.forEach(card => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}
              ref={el => (projectsRef.current[index] = el)}
            >
              {/* NUMBER */}
              <div className="project-number">
                <span>{project.number}</span>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                {/* TECH ICON PILL STYLE */}
                <div className="project-tech-pills">
                  {project.tech
                    .split(',')
                    .map(t => t.trim().toLowerCase())
                    .map((tech, i) => (
                      <span key={i} className="tech-pill">
                        <span className="tech-icon">{techIcons[tech] || <FaReact />}</span>
                        <span className="tech-name">{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                      </span>
                    ))}
                </div>

                {/* DESCRIPTION */}
                <p className="project-description">{project.description}</p>

                {project.contributions?.length > 0 && (
                  <ul className="project-contributions">
                    {project.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}

                {/* GITHUB LINK */}
                <a
                  href={project.linkUrl}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" />
                  {project.link}
                </a>
              </div>

              {/* IMAGE */}
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-box"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
