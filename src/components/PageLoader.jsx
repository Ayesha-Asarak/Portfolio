import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './PageLoader.css'

const PageLoader = ({ onLoadComplete }) => {
  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLoadComplete) onLoadComplete()
      }
    })

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut'
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 0.3
    }, '-=0.5')
    .to(loaderRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.inOut'
    })
    .to(loaderRef.current, {
      display: 'none'
    })

  }, [onLoadComplete])

  return (
    <div ref={loaderRef} className="page-loader">
      <div className="loader-content">
        <h2 ref={textRef} className="loader-text">AYESHA ASARAK</h2>
        <div className="progress-bar">
          <div ref={progressRef} className="progress-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
