import './Home.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Home({lang, social_media, profile}) {
  const { introduction, jobTitle } = lang;
  const greetings = getGreeting();

  const { facebook, facebook_url, linkedin, linkedin_url} = social_media;  

  function getGreeting() {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
      return lang.greetings_morning
    }

    if (hour >= 12 && hour < 18) {
      return lang.greetings_afternoon
    }

    return lang.greetings_evening
  }

  return (
    <div className="home-section" id="home-section">
      <div className="left-content-home">
        {/* Text Card */}
        <div className="text-container">
          <div className="greetings">{greetings}</div>
          <div className="introduction">{introduction}</div>
          <div className="job-title">{jobTitle}</div>
        </div>

        {/* Buttons (outside bordered container) */}
        <div className="button-group">
          <a
            href="https://www.facebook.com/kentcarloestillore"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
          >
            <FaFacebookF />
            <span>{facebook}</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedinIn />
            <span>{linkedin}</span>
          </a>
        </div>
      </div>
      <div className="right-content-home">
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-image"
        />
      </div>

    </div>
  )
}

export default Home
