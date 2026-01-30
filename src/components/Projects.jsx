import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import config from '../config.json'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectsRef = useRef([])

  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    // TITLE – ultra smooth scroll animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        force3D: true, // hardware acceleration
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "top 60%", // even longer range for ultra smooth animation
          scrub: 3, // very slow, gradual animation (3 seconds)
        }
      }
    )

    // PROJECT CARDS – ultra smooth scroll-based animation
    projectsRef.current.forEach((project, index) => {
      if (!project) return
      const isReverse = index % 2 === 1

      // Add class to disable CSS transitions during GSAP animation
      project.classList.add('animating')

      gsap.fromTo(
        project,
        {
          opacity: 0,
          x: isMobile ? 0 : (isReverse ? 100 : -100),
          y: isMobile ? 40 : 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power2.out",
          force3D: true, // hardware acceleration for smooth performance
          overwrite: true, // prevent conflicts with CSS transitions
          scrollTrigger: {
            trigger: project,
            start: "top 100%",
            end: "top 60%", // even longer range for ultra smooth animation
            scrub: 3, // very slow, gradual animation (3 seconds)
            onLeave: () => project.classList.remove('animating'), // re-enable CSS transitions after animation
            onEnterBack: () => project.classList.add('animating'), // disable during reverse scroll
          }
        }
      )

      // Subtle hover effect (optional)
      if (!('ontouchstart' in window)) {
        project.addEventListener('mouseenter', () => {
          gsap.to(project, { y: -3, duration: 0.3, ease: "power2.out" })
        })
        project.addEventListener('mouseleave', () => {
          gsap.to(project, { y: 0, duration: 0.3, ease: "power2.out" })
        })
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
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
              ref={el => projectsRef.current[index] = el}
            >
              <div className="project-number">
                <span>{project.number}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>

                {project.contributions.length > 0 && (
                  <ul className="project-contributions">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                )}

                <a href={project.linkUrl} className="project-link">{project.link}</a>
              </div>

              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
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
