import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'

export default function Cookies() {
  return (
    <div className="app-container">
      <header className="header header-scrolled">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="brand" style={{ fontSize: '1.3rem' }}>
            <b>West<span><b>#</b></span></b>
          </div>
        </Link>
        <p className="tag tag-visible">web technologies</p>
      </header>

      <section className="section legal-page" style={{ paddingTop: '150px' }}>
        <div className="container">
          <h1 className="section-title">Cookie Policy</h1>
          <div className="legal-content">
            <p className="legal-update">Last Updated: November 2, 2025</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2>2. Our Current Cookie Usage</h2>
            <p>
              <strong>WestHash LLC currently does not use any cookies on this website.</strong> Our website is designed to function without collecting or storing any information through cookies or similar tracking technologies.
            </p>
            <p>
              We have chosen to build a privacy-focused website that respects your browsing experience without the need for cookie consent banners or tracking mechanisms.
            </p>

            <h2>3. Third-Party Services</h2>
            <p>
              While we don't use cookies ourselves, when you interact with external links on our website (such as LinkedIn, GitHub, or ENS), those third-party platforms may set their own cookies according to their privacy policies:
            </p>
            <ul>
              <li><strong>LinkedIn:</strong> When clicking on our LinkedIn profile links</li>
              <li><strong>GitHub:</strong> When visiting our GitHub repositories</li>
              <li><strong>ENS Domains:</strong> When viewing our ENS domain information</li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they handle your data.
            </p>

            <h2>4. Local Storage</h2>
            <p>
              Our website may use browser local storage for essential functionality such as remembering user interface preferences. This storage is kept locally on your device and is not transmitted to our servers. You can clear this data at any time through your browser settings.
            </p>

            <h2>5. Future Cookie Usage</h2>
            <p>
              If we decide to implement cookies in the future for analytics or enhanced functionality, we will:
            </p>
            <ul>
              <li>Update this Cookie Policy with detailed information</li>
              <li>Implement appropriate consent mechanisms where required</li>
              <li>Provide clear options to manage your cookie preferences</li>
              <li>Only use cookies that are necessary or consented to</li>
            </ul>

            <h2>6. Your Privacy Rights</h2>
            <p>
              Since we don't use cookies, you don't need to worry about managing cookie preferences on our website. However, you can still control your general browsing privacy through your browser settings.
            </p>

            <h3>6.1 Browser Privacy Settings</h3>
            <p>For enhanced privacy across all websites you visit, you can adjust your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Enhanced Tracking Protection</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Prevent cross-site tracking</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Tracking prevention</li>
            </ul>

            <h2>7. Do Not Track Signals</h2>
            <p>
              We respect "Do Not Track" (DNT) browser signals. Since our website doesn't track users or use cookies, all visitors enjoy a tracking-free experience by default.
            </p>

            <h2>8. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes to our cookie usage will be clearly communicated and this policy will be updated accordingly.
            </p>

            <h2>9. GDPR Compliance</h2>
            <p>
              Our cookie-free approach ensures full compliance with GDPR and other privacy regulations. You can browse our website without concerns about:
            </p>
            <ul>
              <li>Cookie consent banners</li>
              <li>Tracking or profiling</li>
              <li>Third-party data collection</li>
              <li>Cross-site tracking</li>
            </ul>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our privacy practices, please contact us:
            </p>
            <p>
              <strong>WestHash LLC</strong><br />
              Email: <a href="mailto:team@westhash.io">team@westhash.io</a><br />
              Location: Wyoming, United States
            </p>

            <div className="cookie-notice">
              <h3>Privacy-First Approach</h3>
              <p>
                We believe in respecting your privacy from the start. Our website is designed to function fully without cookies, providing you with a seamless, privacy-focused browsing experience.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
