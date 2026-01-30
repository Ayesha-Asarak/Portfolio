// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import config from '../config.json'
// import './Experience.css'

// gsap.registerPlugin(ScrollTrigger)

// const Experience = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const section = sectionRef.current

//     // Animate title
//     gsap.fromTo(titleRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     )

//     // Stagger animate experience cards
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(card,
//         { opacity: 0, y: 80, rotateX: -15 },
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 0.8,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     })
//   }, [])

//   return (
//     <section id="experience" className="experience" ref={sectionRef}>
//       <div className="container">
//         <div className="section-header" ref={titleRef}>
//           <h2 className="section-title">Experience</h2>
//           <div className="title-underline"></div>
//         </div>

//         <div className="experience-content">
//           {config.experience.map((exp, index) => (
//             <div key={index} className="experience-card" ref={el => cardsRef.current[index] = el}>
//               <div className="card-number">
//                 <span>{index + 1}</span>
//               </div>
//               <div className="card-details">
//                 <h3 className="company-name">{exp.company}</h3>
//                 <p className="period">{exp.period}</p>
//                 <p className="role-title">{exp.role}</p>
                
//                 <ul className="achievements-list">
//                   {exp.achievements.map((achievement, idx) => (
//                     <li key={idx}>{achievement}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience


import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import config from '../config.json'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Title animation - smooth scroll-based
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "top 80%",
          scrub: true, // links animation directly to scroll for smoothness
        }
      }
    )

    // Cards animation - smooth scroll-based without delay
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "none", // instant easing, no delay
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            end: "top 80%",
            scrub: true, // fully smooth with scroll
          }
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Experiences</h2>
        </div>

        <div className="experience-content">
          {config.experience.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${index % 2 !== 0 ? 'dark reverse' : ''}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card-number">{index + 1}</div>

              <div className="card-text">
                <h3 className="company-name">{exp.company}</h3>
                <p className="period">{exp.period}</p>
                <p className="role-title">{exp.role}</p>

                <ul className="achievements-list">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <button className="cta-btn">GET STARTED</button>
              </div>

              <div className="card-image">
                <img src={exp.image} alt={exp.company} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
