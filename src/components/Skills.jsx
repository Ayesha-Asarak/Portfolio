// // import { useEffect, useRef } from 'react'
// // import { gsap } from 'gsap'
// // import { ScrollTrigger } from 'gsap/ScrollTrigger'
// // import config from '../config.json'
// // import './Skills.css'

// // gsap.registerPlugin(ScrollTrigger)

// // const Skills = () => {
// //   const sectionRef = useRef(null)
// //   const titleRef = useRef(null)
// //   const skillCardsRef = useRef([])

// //   useEffect(() => {
// //     const section = sectionRef.current

// //     // Animate title
// //     gsap.fromTo(titleRef.current,
// //       { opacity: 0, y: 50 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 0.8,
// //         scrollTrigger: {
// //           trigger: section,
// //           start: 'top 80%',
// //           toggleActions: 'play none none reverse'
// //         }
// //       }
// //     )

// //     // Stagger animate skill cards
// //     gsap.fromTo(skillCardsRef.current,
// //       { opacity: 0, y: 60, scale: 0.8 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         scale: 1,
// //         duration: 0.6,
// //         stagger: 0.15,
// //         ease: 'back.out(1.2)',
// //         scrollTrigger: {
// //           trigger: section,
// //           start: 'top 70%',
// //           toggleActions: 'play none none reverse'
// //         }
// //       }
// //     )

// //     // Add hover animations (only on non-touch devices)
// //     if (!('ontouchstart' in window)) {
// //       skillCardsRef.current.forEach(card => {
// //         if (card) {
// //           card.addEventListener('mouseenter', () => {
// //             gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
// //           })
// //           card.addEventListener('mouseleave', () => {
// //             gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' })
// //           })
// //         }
// //       })
// //     }
// //   }, [])

// //   return (
// //     <section id="skills" className="skills" ref={sectionRef}>
// //       <div className="container">
// //         <div className="section-header" ref={titleRef}>
// //           <h2 className="section-title">Technical Skills</h2>
// //           <div className="title-underline"></div>
// //         </div>

// //         <div className="skills-grid">
// //           {config.skills.map((category, index) => (
// //             <div 
// //               key={index} 
// //               className="skill-category"
// //               ref={el => skillCardsRef.current[index] = el}
// //             >
// //               <h3 className="category-name">{category.category}</h3>
// //               <div className="skills-tags">
// //                 {category.skills.map((skill, idx) => (
// //                   <span key={idx} className="skill-tag">{skill}</span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Skills


// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import config from '../config.json'
// import './Skills.css'

// gsap.registerPlugin(ScrollTrigger)

// const Skills = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const rowsRef = useRef([])

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%'
//         }
//       }
//     )

//     gsap.fromTo(
//       rowsRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.15,
//         duration: 0.6,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 75%'
//         }
//       }
//     )
//   }, [])

//   return (
//     <section id="skills" className="skills" ref={sectionRef}>
//       <div className="container">
//         <div className="section-header" ref={titleRef}>
//           <h2 className="section-title">Technical Skills</h2>
//           <div className="title-underline"></div>
//         </div>

//         <div className="skills-list">
//           {config.skills.map((group, index) => (
//             <div
//               key={index}
//               className="skills-row"
//               ref={el => (rowsRef.current[index] = el)}
//             >
//               <span className="skills-label">{group.category}</span>

//               <div className="skills-divider"></div>

//               <div className="skills-items">
//                 {group.skills.map((skill, idx) => (
//                   <span key={idx} className="skill-pill">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaMobileAlt
} from 'react-icons/fa'
import { SiCplusplus, SiC, SiMongodb, SiMysql, SiFirebase, SiAngular, SiNextdotjs } from 'react-icons/si'

import config from '../config.json'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

/* ICON MAPPING */
const iconMap = {
  Python: <FaPython />,
  Java: <FaJava />,
  C: <SiC />,
  'C++': <SiCplusplus />,
  React: <FaReact />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Git: <FaGit />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Firebase: <SiFirebase />,
  AWS: <FaAws />,
  Angular: <SiAngular />,
  'Next.js': <SiNextdotjs />,
  'Android Studio': <FaMobileAlt />
}

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const rowsRef = useRef([])

 useEffect(() => {
  const ctx = gsap.context(() => {

    /* HEADING */
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none', // <-- make it animate every time
        }
      }
    )

    /* UNDERLINE DRAW */
    gsap.fromTo(
      '.title-underline',
      { scaleX: 0, transformOrigin: 'left' },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'restart none none none', // <-- animate every time
        }
      }
    )

    /* SKILL ROWS */
    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'restart none none none', // <-- animate every time
        }
      }
    )

    /* SKILL PILLS */
    gsap.fromTo(
      '.skill-pill',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'restart none none none', // <-- animate every time
        }
      }
    )

  }, sectionRef)

  return () => ctx.revert()
}, [])


  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={titleRef}>
         <h2
  className="section-title"
  style={{ color: '#d5d2cb' }}
>
  Technical Skills
</h2>

          <div className="title-underline glow"></div>
        </div>

        <div className="skills-list">
          {config.skills.map((group, index) => (
            <div
              key={index}
              className="skills-row"
              ref={el => (rowsRef.current[index] = el)}
            >
              <span className="skills-label">{group.category}</span>

              <div className="skills-divider"></div>

              <div className="skills-items">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    <span className="skill-icon">
                      {iconMap[skill] || <FaDatabase />}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
