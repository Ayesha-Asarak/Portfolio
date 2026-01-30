import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import config from '../config.json'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contactInfoRef = useRef(null)
  const contactFormRef = useRef(null)
  const contactMethodsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const isMobile = window.innerWidth <= 768

    // Animate title
    gsap.fromTo(titleRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate contact info from left (or from top on mobile)
    gsap.fromTo(contactInfoRef.current,
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

    // Animate form from right (or from top on mobile)
    gsap.fromTo(contactFormRef.current,
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

    // Stagger animate contact methods
    gsap.fromTo(contactMethodsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info-section" ref={contactInfoRef}>
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-methods">
              <a 
                href={`mailto:${config.contact.email}`} 
                className="contact-method"
                ref={el => contactMethodsRef.current[0] = el}
              >
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <div className="method-info">
                  <span className="method-label">Email</span>
                  <span className="method-value">{config.contact.email}</span>
                </div>
              </a>

              <a 
                href={config.contact.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method"
                ref={el => contactMethodsRef.current[1] = el}
              >
                <div className="icon-wrapper">
                  <FaLinkedin />
                </div>
                <div className="method-info">
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">{config.contact.linkedin.display}</span>
                </div>
              </a>

              <a 
                href={config.contact.github.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method"
                ref={el => contactMethodsRef.current[2] = el}
              >
                <div className="icon-wrapper">
                  <FaGithub />
                </div>
                <div className="method-info">
                  <span className="method-label">GitHub</span>
                  <span className="method-value">{config.contact.github.display}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-section" ref={contactFormRef}>
            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; {config.footer.copyright}</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
