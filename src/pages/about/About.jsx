import './About.css'
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa'

function About({job_roles, about}) {
  const { web_development, app_development, system_maintenance } = job_roles;

  return (
    <div className="about-section" id="about-section">
      {/* Left: Skills / Roles */}
      <div className="about-skills">
        <div className="skill-card">
          <FaCode className="skill-icon" />
          <div>
            <h4>{web_development.title}</h4>
            <p>{web_development.context}</p>
          </div>
        </div>

        <div className="skill-card">
          <FaMobileAlt className="skill-icon" />
          <div>
            <h4>{app_development.title}</h4>
            <p>{app_development.context}</p>
          </div>
        </div>

        <div className="skill-card">
          <FaServer className="skill-icon" />
          <div>
            <h4>{system_maintenance.title}</h4>
            <p>{system_maintenance.context}</p>
          </div>
        </div>
      </div>

      {/* Right: About Me */}
      <div className="about-content">
        <h2>{about.title}</h2>
        {about.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  )
}

export default About
