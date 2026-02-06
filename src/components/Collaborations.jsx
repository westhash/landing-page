import { useMousePosition } from '../hooks/useMousePosition'

export default function Collaborations() {
  const addMouseRef = useMousePosition()

  return (
    <section id="collaborations" className="section collaborations-section">
      <div className="container">
        <h2 className="section-title">Main Collaborations</h2>
        <div className="collaborations-grid">
          <div className="collaboration-card animate-on-scroll animate-delay-1" ref={addMouseRef}>
            <h3>INNOVO Consulting</h3>
            <p>Consulting and software house specialized in ERP services and integrations, where we collaborate delivering enterprise solutions and system integration expertise</p>
          </div>
          <div className="collaboration-card animate-on-scroll animate-delay-2" ref={addMouseRef}>
            <h3>HNRG</h3>
            <p>Consulting and software house focused on custom development and cloud solutions, where we provide cloud engineering expertise for tailored enterprise applications</p>
          </div>
        </div>
      </div>
    </section>
  )
}
