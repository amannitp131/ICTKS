import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Sponsors() {
  return (
    <>
      <Navbar />
      
      <section className="sponsors-section-sp">
        <h1 className="sponsors-title-sp">Our Generous Sponsors</h1>
        <p>
          Sponsors are invited for this international conference. Any contribution shall be appreciated. 
          They shall be categorized as gold, silver, diamond, and platinum based on their sponsorship. 
          Please note that sponsorship shall include of GST 18%.
        </p>

        <section className="instructions-section">
          <div className="instructions-container">
            <h3 className="guidelines-subtitle">
              <i className="fas fa-book"></i> Sponsorship Highlights
            </h3>
            <ul className="guidelines-list">
              <li>
                As part of the International Conference on Traditional Knowledge Systems, we are organizing a vibrant
                Traditional Art and Handicraft Exhibition, which will showcase the living heritage of India through the 
                works of artisans, craftspeople, and local communities who continue to preserve ancient techniques and knowledge systems.
              </li>
              <li>
                We invite sponsors to support this initiative and associate with a high-profile academic and cultural platform that highlights the
                role of traditional knowledge in sustainability, heritage conservation, and community empowerment.
              </li>
              <br />
              <p><b>By sponsoring with a minimum amount of ₹20,000, you will receive the following benefits:</b></p>
              <br />
              <li>
                <b>🔸 Brand Visibility: </b> Your logo featured on conference banners, exhibition stall panels, and during key conference sessions. Acknowledgement in the official conference brochure, website, and digital promotions. Featured mention in the conference souvenir and proceedings.
              </li>
              <li>
                <b>🔸 Stall Branding & Engagement: </b> Co-branded artisan stall or display space. Opportunity to distribute product samples, brochures, or promotional items. Space for CSR storyboards or brand messages that align with sustainability or heritage.
              </li>
              <li>
                <b>🔸 Premium Networking: </b> Complimentary invites to the inauguration, keynote sessions, and cultural evenings. Engage with national and international scholars, government representatives, and heritage institutions.
              </li>
              <li>
                <b>🔸 CSR & Cultural Alignment: </b> Contribute to the preservation and promotion of traditional knowledge systems. Fulfill CSR objectives by supporting artisans, women-led initiatives, and eco-friendly enterprises.
              </li>
              <br />
              <p style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-color)'}}>Support the Artisans | Celebrate Knowledge | Strengthen Traditions</p>
            </ul>
          </div>
        </section>

        <div className="contact-for-sponsors">
          <Link href="/reach">Contact for Sponsors</Link>
        </div>

        <div className="sponsors-container-sp">
          {/* Uncomment and add sponsor cards when available */}
          {/* <div className="sponsor-card-sp">
            <div className="sponsor-logo-container-sp">
              <img src="/img/ibm_PNG19663.png" alt="Company Logo" className="sponsor-logo-sp" />
            </div>
            <h3 className="sponsor-name-sp">IBM</h3>
            <p className="sponsor-amount-sp">Rs. 28,000</p>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}
