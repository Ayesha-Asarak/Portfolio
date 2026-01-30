import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import config from '../config.json'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const aboutInfoRef = useRef(null)
  const achievementsRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const isMobile = window.innerWidth <= 768

    // Animate section title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate about info from left (or from top on mobile)
    gsap.fromTo(aboutInfoRef.current,
      { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 30 : 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate achievements from right (or from top on mobile)
    gsap.fromTo(achievementsRef.current,
      { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 30 : 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
           <div className="profile-section">
             <h3 className="name">{config.personal.name}</h3>
            <p className="role">{config.personal.title}</p>
              <h4>Profile</h4>
              <p>{config.personal.profile}</p>
            </div>
          <div className="about-info" ref={aboutInfoRef}>
           
            
            <div className="contact-info">
              <a href={`mailto:${config.contact.email}`} className="contact-item">
                <FaEnvelope className="contact-icon" /> {config.contact.email}
              </a>
              <a href={config.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaLinkedin className="contact-icon" /> {config.contact.linkedin.display}
              </a>
              <a href={config.contact.github.url} target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaGithub className="contact-icon" /> {config.contact.github.display}
              </a>
            </div>
<div className="achievements-extras" ref={achievementsRef}>
            {config.courses && config.courses.length > 0 && (
              <div className="courses-section">
                <h4>Courses</h4>
                <ul>
                  {config.courses.map((course, index) => (
                    <li key={index}>
                      {course.title}
                      {course.provider && ` by ${course.provider}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="languages-section">
              <h4>Languages</h4>
              <div className="language-tags">
                {config.languages.map((language, index) => (
                  <span key={index}>{language}</span>
                ))}
              </div>
            </div>
          </div>
           
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default About
