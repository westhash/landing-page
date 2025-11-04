export default function Hero({ paddingTop }) {
  return (
    <section className="hero-section" style={{ paddingTop: `${paddingTop}px` }}>
      <div className="hero-content">
        <h1>Enterprise Solutions — On-Chain & Cloud</h1>
        <p>scalable, secure software engineering for modern businesses</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Get Started</a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>
    </section>
  )
}
