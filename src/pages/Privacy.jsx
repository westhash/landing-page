import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'

export default function Privacy() {
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
          <h1 className="section-title">Privacy Policy</h1>
          <div className="legal-content">
            <p className="legal-update">Last Updated: November 2, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              WestHash LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Contact us via email or contact forms</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Request information about our services</li>
              <li>Engage with us for consulting services</li>
            </ul>
            <p>This information may include: name, email address, company name, phone number, and project details.</p>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Access times and dates</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Analyze usage patterns and optimize website performance</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to or restriction of certain processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:team@westhash.io">team@westhash.io</a>.</p>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. For more information about our use of cookies, please see our <Link to="/cookies">Cookie Policy</Link>.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p>
              <strong>WestHash LLC</strong><br />              
              5830 E 2nd St, Ste 7000 #29151<br />
              Casper, Wyoming 82609, US<br />
              <a href="mailto:team@westhash.io">team@westhash.io</a>
            </p>
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
