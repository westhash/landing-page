import SectionHead from './SectionHead'

export default function OurProducts() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <SectionHead title="Our Products" />
        <div className="products-content">
          <div className="product-item zaico-product reveal mouse-track" data-rd="0">
            <div className="product-head">
              <span className="product-tag">On-chain · EAS · NFT</span>
            </div>
            <h3>ZAICO</h3>
            <p>Automated public certifications on-chain with EAS and NFT technology. Web3 access and managing digital certificates with blockchain verification</p>
            <a
              href="https://zaico.westhash.io"
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              More <span className="arrow">→</span>
            </a>
          </div>
          <div className="product-item overlander-product reveal mouse-track" data-rd="80">
            <div className="product-head">
              <span className="product-tag">Geolocation · Booking</span>
            </div>
            <h3>Overlander</h3>
            <p>Booking platform for van rest areas with geolocation technology. Users can list or access parking spots with fully automated check-in and management</p>
            <a
              href="https://www.overlander.travel"
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              More <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
