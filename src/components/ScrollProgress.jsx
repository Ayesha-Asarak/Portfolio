import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollProgress.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollProgress = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    const progress = progressRef.current

    gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    })
  }, [])

  return (
    <div className="scroll-progress-container">
      <div ref={progressRef} className="scroll-progress-bar"></div>
    </div>
  )
}

export default ScrollProgress
