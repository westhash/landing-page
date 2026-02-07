import { useMousePosition } from '../hooks/useMousePosition'

export default function OurProducts() {
  const addMouseRef = useMousePosition()

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-content">
          <div className="product-item zaico-product animate-on-scroll animate-delay-1" ref={addMouseRef}>
            <h3>ZAICO</h3>
            <p>Automated public certifications on-chain with EAS and NFT technology. Web3 access and managing digital certificates with blockchain verification</p>
            <a href="https://zaico.westhash.io" target="_blank" rel="noopener noreferrer" className="product-link">More →</a>
          </div>
          <div className="product-item overlander-product animate-on-scroll animate-delay-2" ref={addMouseRef}>
            <h3>Overlander</h3>
            <p>Booking platform for van rest areas with geolocation technology. Users can list or access parking spots with fully automated check-in and management</p>
            <a href="https://overlander.westhash.io/#whitepaper" target="_blank" rel="noopener noreferrer" className="product-link">Whitepaper →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
