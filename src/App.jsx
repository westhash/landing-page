import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="brand"><b>West<span><b>#</b></span></b></div>
        <p className={`tag ${isScrolled ? 'tag-visible' : 'tag-hidden'}`}><>web3 technologies</></p>
      </header>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>Enterprise Solutions with Web3 & Cloud Technologies</h1>
          <p>Empowering businesses with scalable, secure, and cutting-edge software engineering services.</p>
        </div>
      </section>
      
      <main className="main-content">
        <div className="center-block">
          <div className="bio-section">
            <p>With over 15 years of experience in enterprise environments, WestHash specializes in scalable architectures and modern web development technologies. Experts in Web3 integrations, cloud computing, serverless architecture, and innovative full-stack solutions.</p>
          </div>
          
          <div className="skills-section">
            <h3>Core Competencies</h3>
            <ul>
              <li><strong>Strategic Solution Architecture:</strong> Designing and selecting optimal architectural patterns, from monolithic to distributed systems, to meet enterprise requirements</li>
              <li><strong>Adaptive Full-Stack Development:</strong> Building scalable and maintainable solutions with modern web technologies</li>
              <li><strong>Web3 & Blockchain Integration:</strong> Designing and implementing decentralized applications, leveraging major blockchain protocols and standards</li>
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