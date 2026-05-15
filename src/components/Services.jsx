import SectionHead from './SectionHead'

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHead title="Our Services" />
        <div className="services-grid">
          <div className="service-card reveal mouse-track" data-rd="0">
            <h3>Architecture &amp; Development</h3>
            <p>Scalable, maintainable solutions with modern full-stack technologies</p>
          </div>
          <div className="service-card reveal mouse-track" data-rd="60">
            <h3>On-chain systems</h3>
            <p>Decentralized applications on major blockchain protocols</p>
          </div>
          <div className="service-card reveal mouse-track" data-rd="120">
            <h3>Cloud &amp; Infrastructure</h3>
            <p>Serverless systems and FinOps practices on leading cloud platforms</p>
          </div>
          <div className="service-card reveal mouse-track" data-rd="180">
            <h3>DevOps &amp; Automation</h3>
            <p>Automated dev workflows with CI/CD, agents, and orchestration tools</p>
          </div>
          <div className="service-card reveal mouse-track" data-rd="240">
            <h3>Data Engineering</h3>
            <p>Robust data pipelines, integrations, and big data processing</p>
          </div>
          <div className="service-card reveal mouse-track" data-rd="300">
            <h3>Security &amp; Compliance</h3>
            <p>Enterprise security and compliance frameworks for safe operations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
