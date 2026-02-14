import { useState } from 'react';
import './NavigationBar.css';
import en from '../constants/lang/en';
import fil from '../constants/lang/fil';
import jap from '../constants/lang/jap';
import ru from '../constants/lang/ru';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar({ setLang, setSelectedLang, selectedLang }) {
  const [clickedLang, setClickedLang] = useState(null);

  const changeLanguage = (language) => {
    switch (language) {
      case 'en': setLang(en); break;
      case 'fil': setLang(fil); break;
      case 'jap': setLang(jap); break;
      case 'ru': setLang(ru); break;
      default: setLang(jap);
    }
  };

  const selectLanguage = (language) => {
    setClickedLang(language);
    setTimeout(() => setClickedLang(null), 300);

    switch (language) {
      case 'en': setSelectedLang(en); setLang(en); break;
      case 'fil': setSelectedLang(fil); setLang(fil); break;
      case 'jap': setSelectedLang(jap); setLang(jap); break;
      case 'ru': setSelectedLang(ru); setLang(ru); break;
      default: setSelectedLang(jap); setLang(jap);
    }
  };

  const location = useLocation();
  const isResumeDetails = location.pathname === "/resume-details";

  return (
    <nav className="navigation-bar-section">
      <div className="nav-logo">
        <Link to="/">Kent Carlo J. Estillore</Link>
      </div>

      <ul className="nav-links">

        {isResumeDetails ? (
          <li>
            <Link to="/">← Back</Link>
          </li>
        ) : (
          <>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#resume-section">Resume</a></li>
            <li><a href="#contact-section">Contact</a></li>

            <li className="dropdown">
              <span>Settings</span>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <span>Languages</span>
                  <div className="submenu">
                    {['en', 'fil', 'jap', 'ru'].map((langCode, idx) => {
                      const labels = {
                        en: 'English',
                        fil: 'Filipino',
                        jap: 'Japanese',
                        ru: 'Russian'
                      };

                      return (
                        <span
                          key={idx}
                          className={clickedLang === langCode ? 'clicked' : ''}
                          onClick={() => selectLanguage(langCode)}
                          onMouseEnter={() => changeLanguage(langCode)}
                          onMouseLeave={() => setLang(selectedLang)}
                        >
                          {labels[langCode]}
                        </span>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default NavigationBar;
