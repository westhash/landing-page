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
        <p className={`tag ${tagVisible ? 'tag-visible' : 'tag-hidden'}`}><>web technologies</></p>
      </header>
      
      <section className="hero-section" style={{ paddingTop: `${heroPaddingTop}px` }}>
        <div className="hero-content">
          <h1>Enterprise Solutions with On-Chain & Cloud Technologies</h1>
          <p>Empowering businesses with scalable, secure, and cutting-edge software engineering services.</p>
        </div>
      </section>
      
      <main className="main-content">
        <div className="center-block">
          <div className="bio-section">
            <p>With over 15 years of experience in enterprise environments, WestHash specializes in scalable architectures and modern web development technologies. Experts in decentralized systems, cloud computing, serverless architecture, and innovative full-stack solutions.</p>
          </div>
          
          <div className="skills-section">
            <h3>Core Competencies</h3>
            <ul>
              <li><strong>Strategic Solution Architecture:</strong> Designing and selecting optimal architectural patterns, from monolithic to distributed systems, to meet enterprise requirements</li>
              <li><strong>Adaptive Full-Stack Development:</strong> Building scalable and maintainable solutions with modern web technologies</li>
              <li><strong>On-Chain Systems Design:</strong> Designing and implementing decentralized applications, leveraging major blockchain protocols and standards</li>
              <li><strong>Cloud & Serverless Solutions:</strong> Architecting and deploying serverless systems on leading cloud platforms to optimize cost, scalability, and performance</li>
              <li><strong>DevOps & Automation:</strong> Implementing CI/CD pipelines, containerization, and automation strategies for reliable and efficient delivery</li>
              <li><strong>Data Management & Analytics:</strong> Engineering robust data strategies with databases, messaging, and integrations for seamless flow and big data processing</li>
              <li><strong>Infrastructure & Security Services:</strong> Managing domains, infrastructure, and security measures to ensure resilient, protected, and high-performing deployments</li>
            </ul>
          </div>
          
          <div className="experience-section">
            <h3>Professional Experience</h3>
            <p>WestHash has led enterprise digital transformation projects, implementing solutions that reduced operational costs by 40% and improved system scalability. Experience spans fintech startups and large corporations, with a focus on security, performance, and user experience.</p>
          </div>
          
          <a className="contact-btn" href="mailto:team@westhash.io">team@westhash.io</a>
          <div className="social-links">
            {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            <a href="https://github.com/westhash" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p className="mini">© {new Date().getFullYear()} WestHash LLC - Wyoming, US</p>
      </footer>
    </div>
  )
}