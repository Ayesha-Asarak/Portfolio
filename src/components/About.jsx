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
  const ctx = gsap.context(() => {

    const baseTrigger = {
      start: 'top 80%',
      toggleActions: 'play reverse play reverse'
    }

    /* SECTION TITLE */
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          ...baseTrigger
        }
      }
    )

    /* PROFILE SECTION (NAME, ROLE, PROFILE TEXT) */
    gsap.fromTo(
      '.profile-section > *',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.profile-section',
          ...baseTrigger
        }
      }
    )

    /* ABOUT INFO BLOCK */
    gsap.fromTo(
      aboutInfoRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutInfoRef.current,
          ...baseTrigger
        }
      }
    )

    /* CONTACT ITEMS */
    gsap.fromTo(
      '.contact-item',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-info',
          ...baseTrigger
        }
      }
    )

    /* ACHIEVEMENTS / COURSES / LANGUAGES WRAPPER */
    gsap.fromTo(
      achievementsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: achievementsRef.current,
          ...baseTrigger
        }
      }
    )

    /* COURSE LIST ITEMS */
    gsap.fromTo(
      '.courses-section li',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.courses-section',
          ...baseTrigger
        }
      }
    )

    /* LANGUAGE TAGS */
    gsap.fromTo(
      '.language-tags span',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.languages-section',
          ...baseTrigger
        }
      }
    )

  }, sectionRef)

  return () => ctx.revert()
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
