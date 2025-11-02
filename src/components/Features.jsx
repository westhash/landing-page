import performanceIcon from '../assets/features/performance-icon.svg'
import securityIcon from '../assets/features/security-icon.svg'
import scalabilityIcon from '../assets/features/scalability-icon.svg'
import reliabilityIcon from '../assets/features/reliability-icon.svg'

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={performanceIcon} alt="Performance" />
            </div>
            <h3>Performance</h3>
            <p>Optimized architectures leveraging cutting-edge technologies and best practices to deliver blazing-fast applications with minimal latency and maximum throughput</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={securityIcon} alt="Security" />
            </div>
            <h3>Security</h3>
            <p>Enterprise-grade security protocols, encryption standards, and comprehensive auditing to protect your data and ensure compliance with industry regulations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={scalabilityIcon} alt="Scalability" />
            </div>
            <h3>Scalability</h3>
            <p>Cloud-native solutions designed to grow seamlessly with your business, from startup MVPs to enterprise-scale distributed systems handling millions of requests</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={reliabilityIcon} alt="Reliability" />
            </div>
            <h3>Reliability</h3>
            <p>High-availability infrastructure with automated monitoring, disaster recovery, and 99.9% uptime SLA to keep your business running 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
