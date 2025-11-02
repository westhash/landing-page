import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './App.css'
import Footer from './components/Footer'

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
              <p>Optimized architectures leveraging cutting-edge technologies and best practices to deliver blazing-fast applications with minimal latency and maximum throughput</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Security</h3>
              <p>Enterprise-grade security protocols, encryption standards, and comprehensive auditing to protect your data and ensure compliance with industry regulations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Scalability</h3>
              <p>Cloud-native solutions designed to grow seamlessly with your business, from startup MVPs to enterprise-scale distributed systems handling millions of requests</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Reliability</h3>
              <p>High-availability infrastructure with automated monitoring, disaster recovery, and 99.9% uptime SLA to keep your business running 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Architecture & Development</h3>
              <p>Designing optimal architectural patterns and building scalable, maintainable solutions with modern full-stack technologies to meet enterprise requirements</p>
            </div>
            <div className="service-card">
              <h3>On-chain systems</h3>
              <p>Designing and implementing decentralized applications, leveraging major blockchain protocols and standards for on-chain systems</p>
            </div>
            <div className="service-card">
              <h3>Cloud & Infrastructure</h3>
              <p>Architecting serverless systems on leading cloud platforms and managing infrastructure with robust security measures for resilient, high-performing deployments</p>
            </div>
            <div className="service-card">
              <h3>DevOps & Automation</h3>
              <p>Implementing CI/CD pipelines, containerization, and automation strategies for reliable and efficient delivery</p>
            </div>
            <div className="service-card">
              <h3>Data Engineering</h3>
              <p>Engineering robust data strategies with databases, messaging, and integrations for seamless flow and big data processing</p>
            </div>
            <div className="service-card">
              <h3>Security & Compliance</h3>
              <p>Implementing comprehensive security measures, infrastructure protection, and compliance frameworks to ensure safe and reliable operations</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About WestHash</h2>
          <div className="about-content">
            <p>With over 15 years of experience in enterprise environments, WestHash specializes in scalable architectures and modern web development technologies. Experts in decentralized systems, cloud computing, serverless architecture, and innovative full-stack solutions.</p>
            <p>Our mission is to empower businesses with cutting-edge technology solutions that drive innovation and growth. We combine deep technical expertise with a pragmatic approach to deliver results that matter. From blockchain integration to cloud transformation, we're committed to excellence in every project we undertake.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">Ready to transform your business with innovative technology solutions? Let's discuss how we can help you achieve your goals.</p>
            <a className="contact-btn" href="mailto:team@westhash.io">team@westhash.io</a>
            <div className="social-links">
              <a href="https://linkedin.com/company/westhash" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}