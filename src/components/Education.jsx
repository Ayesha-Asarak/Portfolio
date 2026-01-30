import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import config from '../config.json'
import './Education.css'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const educationItemsRef = useRef([])
  const refereesRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    // Animate title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate timeline items
    educationItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Animate referees if they exist
    if (refereesRef.current) {
      gsap.fromTo(refereesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: refereesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, [])

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-timeline" ref={timelineRef}>
          {config.education.map((edu, index) => (
            <div 
              key={index} 
              className="education-item"
              ref={el => educationItemsRef.current[index] = el}
            >
              <div className="timeline-marker"></div>
              <div className="education-content">
                <h3 className="institution-name">{edu.institution}</h3>
                <p className="location">{edu.location}</p>
                <p className="period">{edu.period}</p>
                <p className="degree">{edu.degree}</p>
                {edu.gpa && <p className="gpa">{edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>

        {config.showReferees && (
          <div className="referees-section" ref={refereesRef}>
            <h3 className="referees-title">Referees</h3>
            <div className="referees-grid">
              {config.referees.map((referee, index) => (
                <div key={index} className="referee-card">
                  <h4 className="referee-name">{referee.name}</h4>
                  {referee.title && <p className="referee-title">{referee.title}</p>}
                  {referee.department && <p className="referee-department">{referee.department}</p>}
                  {referee.subdepartment && <p className="referee-subdepartment">{referee.subdepartment}</p>}
                  <p className="referee-institution">{referee.institution}</p>
                  <a href={`mailto:${referee.email}`} className="referee-email">{referee.email}</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
