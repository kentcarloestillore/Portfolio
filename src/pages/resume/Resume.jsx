import './Resume.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Resume({ resume }) {
  return (
    <section className="resume-section" id="resume-section">
      <div className="resume-container">

        {/* LEFT */}
        <div className="left-content-resume">
          <h2>Resume</h2>

          <div className="resume-card">
            <h3>Summary</h3>
            <p>
              Recent BSIT graduate eager to start a full-time IT career.
              Motivated to learn, grow, and contribute to a dynamic team
              while building practical experience. Passionate about solving
              problems and continuously improving technical skills.
            </p>
          </div>

          <div className="resume-card">
            <h3>Experience</h3>
            <ul>
              <li>
                <strong>Information Technology Support Intern at Alturas Group</strong>
                <span>Jan 2025 – Apr 2025</span>
              </li>
              <li>
                <strong>Web Developer at Kazibufast Networks</strong>
                <span>Aug 2025 – Present</span>
              </li>
            </ul>
          </div>

          <Link to="/resume-details" className="resume-button">
            Click to see full detail
            <FaArrowRight />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="right-content-resume">
          <div className="resume-preview">
            <img
              src={resume}
              alt="Resume"
              className="resume-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
