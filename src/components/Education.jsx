import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import config from '../config.json'
import './Education.css'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const eduRefs = useRef([])

useEffect(() => {
  ScrollTrigger.normalizeScroll(true)

  const ctx = gsap.context(() => {

    /* ===== TITLE ===== */
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          onEnter: () => {
            gsap.fromTo(
              titleRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
            )
          },
          onLeaveBack: () => {
            gsap.set(titleRef.current, { opacity: 0, y: 30 })
          },
        },
      }
    )

    /* ===== EDUCATION CARDS ===== */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 88%',
      onEnter: () => {
        gsap.fromTo(
          eduRefs.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
          }
        )
      },
      onLeaveBack: () => {
        gsap.set(eduRefs.current, {
          opacity: 0,
          y: 40,
          scale: 0.96,
        })
      },
    })

  }, sectionRef)

  return () => ctx.revert()
}, [])


  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-grid">
          {config.education.map((edu, index) => (
            <div
              key={index}
              className="education-card"
              ref={(el) => (eduRefs.current[index] = el)}
            >
              {/* Text content */}
              <div className="education-text">
                <div className="edu-period">{edu.period}</div>
                <h3 className="institution-name">{edu.institution}</h3>

                {edu.description && (
                  <p className="edu-description">{edu.description}</p>
                )}

                <p className="degree">{edu.degree}</p>

                {edu.gpa && (
                  <div className="gpa">GPA: {edu.gpa}</div>
                )}
              </div>

              {/* Logo (optional) */}
              {edu.logo && (
                <div className="education-logo">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education