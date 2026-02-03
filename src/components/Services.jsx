import { useMousePosition } from '../hooks/useMousePosition'

export default function Services() {
  const addMouseRef = useMousePosition()

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card animate-on-scroll animate-delay-1" ref={addMouseRef}>
            <h3>Architecture & Development</h3>
            <p>Scalable, maintainable solutions with modern full-stack technologies</p>
          </div>
          <div className="service-card animate-on-scroll animate-delay-2" ref={addMouseRef}>
            <h3>On-chain systems</h3>
            <p>Decentralized applications on major blockchain protocols</p>
          </div>
          <div className="service-card animate-on-scroll animate-delay-3" ref={addMouseRef}>
            <h3>Cloud & Infrastructure</h3>
            <p>Serverless systems and FinOps practices on leading cloud platforms</p>
          </div>
          <div className="service-card animate-on-scroll animate-delay-4" ref={addMouseRef}>
            <h3>DevOps & Automation</h3>
            <p>CI/CD pipelines, containerization, and automation for reliable delivery</p>
          </div>
          <div className="service-card animate-on-scroll animate-delay-5" ref={addMouseRef}>
            <h3>Data Engineering</h3>
            <p>Robust data pipelines, integrations, and big data processing</p>
          </div>
          <div className="service-card animate-on-scroll animate-delay-6" ref={addMouseRef}>
            <h3>Security & Compliance</h3>
            <p>Enterprise security and compliance frameworks for safe operations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
