import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './GeometricShapes.css'

gsap.registerPlugin(ScrollTrigger)

const GeometricShapes = () => {
  const shapesRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    // Animate shapes on scroll
    shapesRef.current.forEach((shape, index) => {
      if (shape) {
        // Random floating animation
        gsap.to(shape, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(8, 15),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        })

        // Parallax effect on scroll
        gsap.to(shape, {
          y: gsap.utils.random(-100, 100),
          scrollTrigger: {
            trigger: shape,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      }
    })

    // Mouse move interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      shapesRef.current.forEach((shape) => {
        if (shape) {
          const rect = shape.getBoundingClientRect()
          const shapeCenterX = rect.left + rect.width / 2
          const shapeCenterY = rect.top + rect.height / 2

          // Calculate distance from mouse to shape
          const deltaX = mouseX - shapeCenterX
          const deltaY = mouseY - shapeCenterY
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

          // Interaction radius (how close the mouse needs to be)
          const interactionRadius = 150

          if (distance < interactionRadius) {
            // Calculate repulsion strength based on distance
            const force = (interactionRadius - distance) / interactionRadius
            const moveX = -(deltaX / distance) * force * 30
            const moveY = -(deltaY / distance) * force * 30

            // Move shape away from cursor
            gsap.to(shape, {
              x: moveX,
              y: moveY,
              rotation: force * 20,
              duration: 0.3,
              ease: 'power2.out'
            })
          } else {
            // Return to original position
            gsap.to(shape, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: 'power2.out'
            })
          }
        }
      })
    }

    // Add mouse move listener (only on non-touch devices)
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const shapes = [
    // Hero section shapes
    { type: 'circle', top: '8%', left: '5%', size: 25 },
    { type: 'square', top: '12%', right: '8%', size: 20 },
    { type: 'cross', top: '18%', left: '15%', size: 30 },
    { type: 'lines', top: '22%', right: '20%', size: 25 },
    { type: 'rectangle', top: '28%', left: '25%', size: 35 },
    { type: 'circle', top: '32%', right: '12%', size: 22 },
    { type: 'square', top: '38%', left: '8%', size: 28 },
    { type: 'cross', top: '42%', right: '25%', size: 26 },
    
    // About section shapes
    { type: 'rectangle', top: '48%', left: '18%', size: 32 },
    { type: 'lines', top: '52%', right: '10%', size: 24 },
    { type: 'circle', top: '58%', left: '12%', size: 20 },
    { type: 'square', top: '62%', right: '18%', size: 26 },
    { type: 'cross', top: '68%', left: '22%', size: 30 },
    { type: 'rectangle', top: '72%', right: '15%', size: 28 },
    { type: 'lines', top: '78%', left: '8%', size: 22 },
    
    // Experience section shapes
    { type: 'circle', top: '82%', right: '22%', size: 24 },
    { type: 'square', top: '88%', left: '15%', size: 26 },
    { type: 'cross', top: '92%', right: '8%', size: 28 },
    { type: 'lines', top: '98%', left: '20%', size: 25 },
    { type: 'rectangle', top: '102%', right: '12%', size: 30 },
    
    // Projects section shapes
    { type: 'circle', top: '108%', left: '10%', size: 22 },
    { type: 'square', top: '112%', right: '18%', size: 24 },
    { type: 'cross', top: '118%', left: '25%', size: 26 },
    { type: 'lines', top: '122%', right: '10%', size: 28 },
    { type: 'rectangle', top: '128%', left: '12%', size: 30 },
    { type: 'circle', top: '132%', right: '20%', size: 20 },
    { type: 'square', top: '138%', left: '18%', size: 25 },
    { type: 'cross', top: '142%', right: '15%', size: 27 },
    { type: 'lines', top: '148%', left: '8%', size: 23 },
    { type: 'rectangle', top: '152%', right: '25%', size: 29 },
    
    // Skills section shapes
    { type: 'circle', top: '158%', left: '15%', size: 21 },
    { type: 'square', top: '162%', right: '12%', size: 26 },
    { type: 'cross', top: '168%', left: '22%', size: 24 },
    { type: 'lines', top: '172%', right: '18%', size: 28 },
    { type: 'rectangle', top: '178%', left: '10%', size: 25 },
    { type: 'circle', top: '182%', right: '8%', size: 23 },
    { type: 'square', top: '188%', left: '20%', size: 27 },
    
    // Education section shapes
    { type: 'cross', top: '192%', right: '22%', size: 25 },
    { type: 'lines', top: '198%', left: '12%', size: 24 },
    { type: 'rectangle', top: '202%', right: '15%', size: 28 },
    { type: 'circle', top: '208%', left: '18%', size: 22 },
    { type: 'square', top: '212%', right: '10%', size: 26 },
    
    // Contact section shapes
    { type: 'cross', top: '218%', left: '8%', size: 24 },
    { type: 'lines', top: '222%', right: '20%', size: 26 },
    { type: 'rectangle', top: '228%', left: '15%', size: 28 },
    { type: 'circle', top: '232%', right: '12%', size: 23 },
    { type: 'square', top: '238%', left: '22%', size: 25 },
    { type: 'cross', top: '242%', right: '18%', size: 27 },
    { type: 'lines', top: '248%', left: '10%', size: 24 }
  ]

  return (
    <div className="geometric-shapes" ref={containerRef}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={el => shapesRef.current[index] = el}
          className={`shape shape-${shape.type}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            width: `${shape.size}px`,
            height: `${shape.size}px`
          }}
        >
          {shape.type === 'circle' && <div className="shape-inner circle-inner"></div>}
          {shape.type === 'square' && <div className="shape-inner square-inner"></div>}
          {shape.type === 'rectangle' && <div className="shape-inner rectangle-inner"></div>}
          {shape.type === 'cross' && (
            <div className="shape-inner cross-inner">
              <span className="cross-line cross-line-1"></span>
              <span className="cross-line cross-line-2"></span>
            </div>
          )}
          {shape.type === 'lines' && (
            <div className="shape-inner lines-inner">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default GeometricShapes
