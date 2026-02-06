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
          Please note that sponsorship shall include of GST 18%.
        </p>

        {/* Sponsorship Tiers Section */}
        <div className="sponsorship-tiers-container">
          <h2 className="tiers-heading">Sponsorship Categories</h2>
          <div className="tiers-grid">
            {/* Title Sponsor */}
            <div className="tier-card tier-title-card">
              <div className="tier-ribbon">PREMIUM</div>
              <div className="tier-icon">👑</div>
              <h3 className="tier-name">Title Sponsor</h3>
              <p className="tier-amount">₹3,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Premium logo placement</li>
                <li>Keynote opportunity</li>
                <li>Exclusive branding</li>
              </ul>
            </div>

            {/* Diamond Sponsor */}
            <div className="tier-card tier-diamond-card">
              <div className="tier-ribbon">ELITE</div>
              <div className="tier-icon">💎</div>
              <h3 className="tier-name">Diamond Sponsor</h3>
              <p className="tier-amount">₹2,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Featured visibility</li>
                <li>Speaking slot</li>
                <li>VIP networking</li>
              </ul>
            </div>

            {/* Gold Sponsor */}
            <div className="tier-card tier-gold-card">
              <div className="tier-ribbon">GOLD</div>
              <div className="tier-icon">🥇</div>
              <h3 className="tier-name">Gold Sponsor</h3>
              <p className="tier-amount">₹1,00,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo on materials</li>
                <li>Booth space</li>
                <li>Conference pass</li>
              </ul>
            </div>

            {/* Silver Sponsor */}
            <div className="tier-card tier-silver-card">
              <div className="tier-ribbon">SILVER</div>
              <div className="tier-icon">🥈</div>
              <h3 className="tier-name">Silver Sponsor</h3>
              <p className="tier-amount">₹50,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo on website</li>
                <li>Event mention</li>
                <li>Promotional items</li>
              </ul>
            </div>

            {/* Bronze Sponsor */}
            <div className="tier-card tier-bronze-card">
              <div className="tier-ribbon">BRONZE</div>
              <div className="tier-icon">🥉</div>
              <h3 className="tier-name">Bronze Sponsor</h3>
              <p className="tier-amount">₹25,000</p>
              <div className="tier-line"></div>
              <ul className="tier-benefits">
                <li>Logo in program</li>
                <li>Event access</li>
                <li>Digital display</li>
              </ul>
            </div>
          </div>
        </div>

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
                <b>🔸 Brand Visibility:</b>
                <ul className="sub-benefits">
                  <li>Logo featured on conference banners, backdrop, and website</li>
                  <li>Acknowledgement in conference brochure and digital promotions</li>
                  <li>Featured mention in conference souvenir and proceedings</li>
                </ul>
              </li>
              <li>
                <b>🔸 Stall Branding & Engagement:</b>
                <ul className="sub-benefits">
                  <li>Co-branded artisan stall or display space</li>
                  <li>Distribute product samples, brochures, or promotional items</li>
                  <li>Space for CSR storyboards or brand messages</li>
                </ul>
              </li>
              <li>
                <b>🔸 Premium Networking:</b>
                <ul className="sub-benefits">
                  <li>Complimentary invites to inauguration and keynote sessions</li>
                  <li>Access to cultural evenings and VIP events</li>
                  <li>Engage with national and international experts</li>
                </ul>
              </li>
              <li>
                <b>🔸 CSR & Cultural Alignment:</b>
                <ul className="sub-benefits">
                  <li>Contribute to preservation of traditional knowledge systems</li>
                  <li>Support artisans and heritage conservation</li>
                  <li>Fulfill CSR objectives through cultural initiatives</li>
                </ul>
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
