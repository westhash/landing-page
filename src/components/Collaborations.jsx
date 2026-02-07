export default function Collaborations() {
  const collaborations = [
    "Solution Architecture & Design",
    "Technical Leadership",
    "System Integration Expertise",
    "ERP Integration & Customization",
    "Custom Software Development",
  ];

  return (
    <section id="collaborations" className="section collaborations-section">
      <div className="container">
        <h2 className="section-title">Active Collaborations</h2>
        <p className="collaborations-lead animate-on-scroll animate-delay-1">
          We collaborate with consulting firms and software houses, supporting their teams with senior technical roles through long-term enterprise projects.
        </p>
        <div className="collaborations-list">
          {collaborations.map((collab, index) => (
            <div key={index} className={`collaboration-item animate-on-scroll animate-delay-${index + 1}`}>
              <span className="collaboration-type">{collab}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
