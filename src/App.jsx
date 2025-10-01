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
            <h2>Solution Architect & Software Engineering Services</h2>
            <p>With over 10 years of experience in enterprise environments, WestHash specializes in scalable architectures and modern web development technologies. Experts in Web3 integrations, cloud computing, serverless architecture, and innovative full-stack solutions.</p>
          </div>
          
          <div className="skills-section">
            <h3>Core Competencies</h3>
            <ul>
              <li><strong>Strategic Solution Architecture:</strong> Identifying optimal architectural patterns for enterprise challenges, selecting between monolithic, microservices, or distributed systems based on project needs</li>
              <li><strong>Adaptive Full-Stack Development:</strong> Leveraging modern web technologies like React, Node.js, TypeScript, and GraphQL, with expertise in choosing the right stack for scalable and maintainable solutions</li>
              <li><strong>Web3 & Blockchain Integration:</strong> Expertise in blockchain ecosystems, including DeFi protocols, smart contract development, and NFT platforms, selecting appropriate technologies for decentralized applications</li>
              <li><strong>Cloud & Serverless Solutions:</strong> Proficient in major cloud platforms (AWS, Azure, GCP), deploying serverless architectures with Lambda, API Gateway, and Cloud Functions to optimize cost and performance</li>
              <li><strong>DevOps & Automation:</strong> Implementing CI/CD pipelines with Docker, Kubernetes, Jenkins, Cloud Run and GitHub Actions, ensuring reliable and efficient deployment across environments</li>
              <li><strong>Data Management & Analytics:</strong> Designing data strategies with databases, messaging and integrations like PostgreSQL, MongoDB, Redis, Elasticsearch and RabbitMQ for efficient data flow and big data processing</li>
              <li><strong>Infrastructure & Security Services:</strong> Managing domain and infrastructure with services like Cloudflare for DNS, security, firewall protection, and performance optimization to ensure robust and secure deployments</li>
            </ul>
          </div>
          
          <div className="experience-section">
            <h3>Professional Experience</h3>
            <p>WestHash has led enterprise digital transformation projects, implementing solutions that reduced operational costs by 40% and improved system scalability. Experience spans fintech startups and large corporations, with a focus on security, performance, and user experience.</p>
          </div>
          
          <a className="contact-btn" href="mailto:team@westhash.io">team@westhash.io</a>
          {/* <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div> */}
        </div>
      </main>
      
      <footer className="footer">
        <p className="mini">© {new Date().getFullYear()} WestHash LLC - Wyoming, US</p>
      </footer>
    </div>
  )
}