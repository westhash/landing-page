import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'

export default function Terms() {
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
          <h1 className="section-title">Terms of Service</h1>
          <div className="legal-content">
            <p className="legal-update">Last Updated: November 19, 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by WestHash LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              WestHash provides software development and consulting services, including but not limited to:
            </p>
            <ul>
              <li>Full-stack software development</li>
              <li>Blockchain and on-chain system development</li>
              <li>Cloud infrastructure and DevOps solutions</li>
              <li>Architecture design and technical consulting</li>
              <li>Data engineering and integration services</li>
              <li>Security implementation and compliance</li>
            </ul>

            <h2>3. Service Engagement</h2>
            <h3>3.1 Consulting Agreements</h3>
            <p>
              Specific consulting engagements will be governed by separate written agreements that will include project scope, deliverables, timelines, and compensation terms.
            </p>

            <h3>3.2 Proposals and Estimates</h3>
            <p>
              All proposals and estimates are valid for 30 days unless otherwise specified. Prices are subject to change based on project scope modifications.
            </p>

            <h2>4. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul>
              <li>Provide timely access to necessary resources, systems, and information</li>
              <li>Designate authorized representatives for project communication</li>
              <li>Provide prompt feedback and approvals as required</li>
              <li>Ensure all provided materials do not infringe on third-party rights</li>
              <li>Make timely payments according to agreed terms</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Client Materials</h3>
            <p>
              Clients retain all rights to materials, content, and intellectual property provided to us for use in projects.
            </p>

            <h3>5.2 Deliverables</h3>
            <p>
              Upon full payment, clients receive ownership rights to custom deliverables created specifically for their project, unless otherwise specified in the project agreement.
            </p>

            <h3>5.3 Company Property</h3>
            <p>
              We retain ownership of our proprietary tools, frameworks, methodologies, and pre-existing intellectual property used in delivering services.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of all proprietary information shared during the engagement. This obligation survives termination of the service agreement.
            </p>

            <h2>7. Payment Terms</h2>
            <ul>
              <li>Payment terms will be specified in individual project agreements</li>
              <li>Invoices are typically due within 30 days of issuance</li>
              <li>Late payments may incur interest charges at the rate of 1.5% per month</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h2>8. Warranties and Disclaimers</h2>
            <h3>8.1 Service Warranty</h3>
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.
            </p>

            <h3>8.2 Disclaimer</h3>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WESTHASH LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              Clients agree to indemnify and hold harmless WestHash LLC from any claims, damages, or expenses arising from the client's breach of these Terms or misuse of our services.
            </p>

            <h2>11. Term and Termination</h2>
            <h3>11.1 Termination</h3>
            <p>
              Either party may terminate an engagement with written notice as specified in the project agreement. Early termination may result in fees for work completed to date.
            </p>

            <h3>11.2 Effect of Termination</h3>
            <p>
              Upon termination, clients remain responsible for payment of all services rendered prior to the termination date.
            </p>

            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>

            <h2>14. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration, remotely by mutual agreement or in Wyoming, United States.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with any project-specific agreements, constitute the entire agreement between the parties regarding our services and supersede all prior agreements and understandings.
            </p>

            <h2>16. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
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
