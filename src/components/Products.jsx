import { useMousePosition } from '../hooks/useMousePosition'

export default function Products() {
  const addMouseRef = useMousePosition()

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          <a 
            href="https://zaico.westhash.io" 
            className="product-card animate-on-scroll animate-delay-1" 
            ref={addMouseRef}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>ZAICO</h3>
            <p>Visit ZAICO</p>
          </a>
          <a 
            href="https://overlander.westhash.io" 
            className="product-card animate-on-scroll animate-delay-2" 
            ref={addMouseRef}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Overlander</h3>
            <p>Visit Overlander</p>
          </a>
        </div>
      </div>
    </section>
  )
}
