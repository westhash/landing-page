import { useEffect, useState } from 'react'

const fullText = 'scalable and secure software engineering'

export default function Hero({ paddingTop }) {
  const [typedText, setTypedText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let index = 0
    let interval
    const start = setTimeout(() => {
      interval = setInterval(() => {
        index++
        setTypedText(fullText.slice(0, index))
        if (index >= fullText.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 40)
    }, 800)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="hero-section" style={{ paddingTop: `${paddingTop}px` }}>
      <div className="hero-content reveal" data-rd="80">
        <h1>Enterprise Solutions — On-Chain & Cloud</h1>
        <p className="hero-subtitle">
          {typedText}
          {!done && <span className="cursor-blink" aria-hidden="true">|</span>}
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Get Started <span className="arrow">→</span>
          </a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>
    </section>
  )
}
