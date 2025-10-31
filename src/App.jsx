import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './App.css'

export default function App() {
  const [brandFontSize, setBrandFontSize] = useState('8rem')
  const [heroPaddingTop, setHeroPaddingTop] = useState(0)
  const [headerBlur, setHeaderBlur] = useState('10px')
  const [tagVisible, setTagVisible] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const updateFontSize = () => {
      const scrollY = window.scrollY
      const maxScroll = 220
      const startSize = Math.min(8, window.innerWidth / 90)
      const endSize = 1.3
      const size = Math.max(startSize - (scrollY / maxScroll) * (startSize - endSize), endSize)
      setBrandFontSize(`${size}rem`)

      const blurValue = Math.max(1, 10 - (scrollY / maxScroll) * 9)
      setHeaderBlur(`${blurValue}px`)

      setTagVisible(scrollY > 300)
      setHeaderScrolled(scrollY > maxScroll)
    }
    updateFontSize() // Initialize on mount
    window.addEventListener('scroll', updateFontSize)
    window.addEventListener('resize', updateFontSize)
    return () => {
      window.removeEventListener('scroll', updateFontSize)
      window.removeEventListener('resize', updateFontSize)
    }
  }, [])

  useLayoutEffect(() => {
    const updatePadding = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        const isLandscape = window.innerWidth > window.innerHeight
        setHeroPaddingTop(height + (isLandscape ? 20 : -30)) 
      }
    }
    updatePadding()
    window.addEventListener('orientationchange', updatePadding)
    return () => {
      window.removeEventListener('orientationchange', updatePadding)
    }
  }, [])

  return (
    <div className="app-container">
      <header ref={headerRef} className={`header ${headerScrolled ? 'header-scrolled' : ''}`} style={{ backdropFilter: `blur(${headerBlur})` }}>
        <div className="brand" style={{ fontSize: brandFontSize }}><b>West<span><b>#</b></span></b></div>
        <p className={`tag ${tagVisible ? 'tag-visible' : 'tag-hidden'}`}>web technologies</p>
      </header>
      
      <section className="hero-section" style={{ paddingTop: `${heroPaddingTop}px` }}>
        <div className="hero-content">
          <h1>Enterprise Solutions — On-Chain & Cloud Technologies</h1>
          <p>Empowering businesses with scalable, secure, and cutting-edge software engineering services.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#services" className="btn-secondary">Our Services</a>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance</h3>
              <p>[Placeholder: High-performance solutions optimized for speed and efficiency]</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Security</h3>
              <p>[Placeholder: Enterprise-grade security with best practices]</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Scalability</h3>
              <p>[Placeholder: Built to scale with your business growth]</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Reliability</h3>
              <p>[Placeholder: Dependable systems with high availability]</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Strategic Solution Architecture</h3>
              <p>[Placeholder: Designing optimal architectural patterns for enterprise requirements]</p>
            </div>
            <div className="service-card">
              <h3>Full-Stack Development</h3>
              <p>[Placeholder: Building scalable solutions with modern web technologies]</p>
            </div>
            <div className="service-card">
              <h3>On-Chain Systems</h3>
              <p>[Placeholder: Decentralized applications and blockchain integration]</p>
            </div>
            <div className="service-card">
              <h3>Cloud & Serverless</h3>
              <p>[Placeholder: Optimized cloud architecture and deployment]</p>
            </div>
            <div className="service-card">
              <h3>DevOps & Automation</h3>
              <p>[Placeholder: CI/CD pipelines and infrastructure automation]</p>
            </div>
            <div className="service-card">
              <h3>Security & Infrastructure</h3>
              <p>[Placeholder: Secure and resilient infrastructure management]</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About WestHash</h2>
          <div className="about-content">
            <p>With over 15 years of experience in enterprise environments, WestHash specializes in scalable architectures and modern web development technologies. Experts in decentralized systems, cloud computing, serverless architecture, and innovative full-stack solutions.</p>
            <p>[Placeholder: Additional company information and values]</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">[Placeholder: Ready to transform your business? Contact us today]</p>
            <a className="contact-btn" href="mailto:team@westhash.io">team@westhash.io</a>
            <div className="social-links">
              <a href="https://github.com/westhash" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">[Privacy Policy]</a></li>
              <li><a href="/terms">[Terms of Service]</a></li>
              <li><a href="/cookies">[Cookie Policy]</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/westhash" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a></li>
              <li><a href="mailto:team@westhash.io">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WestHash LLC - Wyoming, US</p>
        </div>
      </footer>
    </div>
  )
}