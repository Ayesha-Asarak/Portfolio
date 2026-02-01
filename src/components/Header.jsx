import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import config from '../config.json'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const headerRef = useRef(null)
  const navLinksRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )

    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <a href="#home" className="logo">
            {config.personal.name.split(' ')[0]}
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links desktop-links">
            {config.navigation.map((link, index) => (
              <li
                key={link.name}
                ref={el => (navLinksRef.current[index] = el)}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Desktop resume */}
          <a
            href="/Ayesha_Asarak_Resume.pdf"
            download
            className="resume-btn resume-desktop"
          >
            My Resume
          </a>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile slide menu */}
        <ul className={`nav-links mobile-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {config.navigation.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile resume button (OUTSIDE menu) */}
        <a
          href="/Ayesha_Asarak_Resume.pdf"
          download
          className="resume-btn resume-mobile"
        >
         My Resume
        </a>
      </div>
    </header>
  )
}

export default Header
