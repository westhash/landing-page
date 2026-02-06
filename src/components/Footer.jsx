import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to={isHome ? '#about' : '/#about'}>About Us</Link></li>
            <li><Link to={isHome ? '#services' : '/#services'}>Services</Link></li>
            <li><Link to={isHome ? '#products' : '/#products'}>Products</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://linkedin.com/company/westhash" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://app.ens.domains/name/westhash.eth" target="_blank" rel="noopener noreferrer">ENS</a></li>
            <li><a href="https://github.com/westhash" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WestHash LLC — All rights reserved.</p>
      </div>
    </footer>
  )
}
