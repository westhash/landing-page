export default function Hero({ paddingTop }) {
  return (
    <section className="hero-section" style={{ paddingTop: `${paddingTop}px` }}>
      <div className="hero-content reveal" data-rd="80">
        <h1>Enterprise Solutions — On-Chain & Cloud</h1>
        <p>scalable and secure software engineering</p>
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
