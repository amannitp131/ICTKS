import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Schedule() {
  return (
    <>
      <Navbar />
      
      {/* Important Dates Section */}
      <section className="dates-section">
        <div className="dates-container">
          <h2 className="dates-title">
            <i className="fas fa-calendar-days"></i> Important Dates
          </h2>
          <div className="dates-grid">
            <div className="date-card">
              <h3 className="card-title">Abstract Submission Deadline</h3>
              <p className="card-date">March 31st, 2026</p>
            </div>
            
            <div className="date-card">
              <h3 className="card-title">Abstract Acceptance Notification</h3>
              <p className="card-date">April 07th, 2026</p>
            </div>
            
            <div className="date-card">
              <h3 className="card-title">Full Paper Submission Deadline</h3>
              <p className="card-date">May 31st, 2026</p>
            </div>
            
            <div className="date-card date-card-highlight">
              <h3 className="card-title">Early Bird Registration</h3>
              <p className="card-date">April 30th, 2026</p>
            </div>
            
            <div className="date-card">
              <h3 className="card-title">Final Registration Deadline</h3>
              <p className="card-date">May 15th, 2026</p>
            </div>
            
            <div className="date-card">
              <h3 className="card-title">Event Date</h3>
              <p className="card-date">June 5th-6th, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions to Authors */}
      <section className="instructions-section">
        <div className="instructions-container">
          <h2 className="instructions-title">
            <i className="fas fa-pencil"></i> Instructions to Authors
          </h2>
          <p className="instructions-text">
            Authors are requested to submit original research papers that have not been published or submitted elsewhere. 
            All submissions will undergo peer review to ensure academic quality and relevance to the theme of this international conference.
          </p>
          <h3 className="guidelines-subtitle">
            <i className="fas fa-book"></i> Guidelines for Paper Submission
          </h3>
          <ul className="guidelines-list">
            <li>Description ...</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
