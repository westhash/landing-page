export default function OurProducts() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-content">
          <div className="product-item animate-on-scroll animate-delay-1">
            <h3>Overlander</h3>
            <p>Automated booking platform for van rest areas with geolocation technology. Users can list or access parking spots with fully automated check-in and management</p>
          </div>
          <div className="product-item animate-on-scroll animate-delay-2">
            <h3>ZAICO</h3>
            <p>Automated public certifications on-chain with NFT technology. Web3 access and managing digital certificates with blockchain verification</p>
            <a href="https://zaico.westhash.io" target="_blank" rel="noopener noreferrer" className="product-link">Visit ZAICO →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
