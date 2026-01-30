import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import config from '../config.json'
import './Hero.css'

const Hero = () => {
  const heroTextRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroDescRef = useRef(null)
  const ctaButtonRef = useRef(null)
  const heroImageRef = useRef(null)
  const heroTaglineRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const isMobile = window.innerWidth <= 768

    // Animate hero title with split effect
    tl.fromTo(heroTitleRef.current,
      { opacity: 0, y: isMobile ? 50 : 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.5 }
    )
    .fromTo(heroDescRef.current,
      { opacity: 0, y: isMobile ? 30 : 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(ctaButtonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(heroImageRef.current,
      { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1, duration: 1 },
      '-=1'
    )
    .fromTo(heroTaglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )

    // Floating animation for image (disable on mobile for performance)
    if (!isMobile) {
      gsap.to(heroImageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }

    // CTA button hover animation (only on non-touch devices)
    const ctaButton = ctaButtonRef.current
    if (!('ontouchstart' in window)) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      })
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" ref={heroTextRef}>
            <h1 className="hero-title" ref={heroTitleRef}>
              {config.personal.tagline}
              <span className="title-accent">{config.personal.taglineAccent}</span>
            </h1>
            <p className="hero-description" ref={heroDescRef}>
              {config.personal.heroDescription}
            </p>
            <a href="#contact" className="cta-button" ref={ctaButtonRef}>GET IN TOUCH</a>
          </div>
          <div className="hero-image" ref={heroImageRef}>
            {config.personal.profileImage ? (
              <div className="image-container">
                <img src={config.personal.profileImage} alt={config.personal.displayName} className="profile-img" />
                <div className="image-overlay"></div>
              </div>
            ) : (
              <div className="image-placeholder">
                <div className="image-overlay"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hero-tagline" ref={heroTaglineRef}>
        <div className="container">
          <h2>{config.personal.heroTaglineTitle}</h2>
          <p>{config.personal.heroTaglineSubtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
