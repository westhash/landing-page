import SectionHead from './SectionHead'

export default function Collaborations() {
  const collaborations = [
    'Solution Architecture & Design',
    'Technical Leadership',
    'System Integration Expertise',
    'ERP Integration & Customization',
    'Custom Software Development',
  ]

  return (
    <section id="collaborations" className="section collaborations-section">
      <div className="container">
        <SectionHead title="Active Collaborations" />
        <p className="collaborations-lead reveal">
          We collaborate with consulting firms and software houses, supporting their teams with senior technical roles through long-term enterprise projects.
        </p>
        <div className="collaborations-list">
          {collaborations.map((c, i) => (
            <div key={i} className="collaboration-item reveal" data-rd={i * 60}>
              <span className="collaboration-type">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
