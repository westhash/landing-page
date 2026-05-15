import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHead title="About WestHash" />
        <div className="about-content">
          <p className="reveal" data-rd="0">
            15+ years experience in enterprise software and management systems. We specialize in decentralized systems, cloud architecture, and modern full-stack development.
          </p>
          <p className="reveal" data-rd="80">
            From blockchain integration to cloud transformation, we deliver efficient and concrete results.
          </p>
        </div>
      </div>
    </section>
  )
}
