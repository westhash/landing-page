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
            <p className="legal-update">Last Updated: November 8, 2025</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2>2. Cookies We Use</h2>
            <p>
              WestHash LLC is committed to your privacy. We only use one essential security cookie required for website protection. We do not use any analytics, marketing, or tracking cookies.
            </p>

            <h3>2.1 Security Cookie</h3>
            <p>
              Our website infrastructure uses Cloudflare for security and DDoS protection. Cloudflare may set a security cookie (<code>cf_clearance</code>) to verify that you are a legitimate visitor and not a bot. This cookie expires after 1 year.
            </p>
            <p>
              These third parties have their own privacy policies and cookie policies:
            </p>
            <ul>
              <li>Cloudflare Cookie Policy: <a href="https://www.cloudflare.com/cookie-policy/" target="_blank" rel="noopener noreferrer">https://www.cloudflare.com/cookie-policy/</a></li>
            </ul>
            <p>
              <strong>Legal Basis:</strong> This cookie is strictly necessary for website security (GDPR Article 6(1)(f)) and does not require user consent.
            </p>

            <h2>3. Third-Party Links</h2>
            <p>
              When you interact with external links on our website (such as LinkedIn, GitHub, or ENS), those third-party platforms may set their own cookies according to their privacy policies:
            </p>
            <ul>
              <li><strong>LinkedIn:</strong> When clicking on our LinkedIn profile links</li>
              <li><strong>GitHub:</strong> When visiting our GitHub repositories</li>
              <li><strong>ENS Domains:</strong> When viewing our ENS domain information</li>
            </ul>

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

            <h2>6. Managing Cookies</h2>
            <p>
              While our strictly necessary security cookie cannot be disabled without affecting website functionality, you can manage cookies through your browser settings if desired. Please note that blocking this cookie may prevent you from accessing the website.
            </p>

            <h3>6.1 Browser Cookie Settings</h3>
            <p>You can manage cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Enhanced Tracking Protection</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Prevent cross-site tracking</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Tracking prevention</li>
            </ul>

            <h2>7. Do Not Track Signals</h2>
            <p>
              We respect "Do Not Track" (DNT) browser signals. Our website only uses essential security cookies and does not engage in any tracking, profiling, or behavioral advertising.
            </p>

            <h2>8. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes to our cookie usage will be clearly communicated and this policy will be updated accordingly.
            </p>

            <h2>9. GDPR Compliance</h2>
            <p>
              Our minimal cookie approach ensures compliance with GDPR and other privacy regulations:
            </p>
            <ul>
              <li><strong>No consent required:</strong> We only use strictly necessary cookies for security purposes</li>
              <li><strong>No tracking:</strong> We do not track or profile visitors</li>
              <li><strong>No analytics cookies:</strong> We do not use Google Analytics or similar tools</li>
              <li><strong>No marketing cookies:</strong> We do not use advertising or retargeting cookies</li>
            </ul>
            <p>
              Under GDPR Article 6(1)(f), strictly necessary cookies do not require user consent as they are essential for the legitimate interest of providing a secure website.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our privacy practices, please contact us:
            </p>
            <p>
              <strong>WestHash LLC</strong><br />
              5830 E 2nd St, Ste 7000 #29151<br />
              Casper, Wyoming 82609, US<br />
              <a href="mailto:team@westhash.io">team@westhash.io</a>
            </p>

            <div className="cookie-notice">
              <h3>Privacy-First Approach</h3>
              <p>
                We believe in respecting your privacy from the start. Our website uses only one security cookie managed by our infrastructure provider. We do not collect, store, or process any personal data. No tracking, no analytics, no profiling. Your visit is completely private.
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
