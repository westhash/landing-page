import SectionHead from './SectionHead'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHead title="Get In Touch" />
        <div className="contact-content">
          <p className="contact-text reveal" data-rd="0">
            Ready to transform your business with innovative technology solutions? Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <a className="contact-btn reveal" data-rd="80" href="mailto:team@westhash.io">
            team@westhash.io
          </a>
          <div style={{ textAlign: 'center' }}>
            <div className="social-links reveal" data-rd="160">
              <a href="https://linkedin.com/company/westhash" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
