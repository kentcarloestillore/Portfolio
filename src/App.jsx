import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import FullResume from './pages/resume/FullResume';
import Contact from './pages/contact/Contact';

import en from './constants/lang/en';
import profileRed from './assets/profile-red.png';
import resumePic from './assets/resume.png';

function App() {
  const [selectedLang, setSelectedLang] = useState(en);
  const [lang, setLang] = useState(en);
  const [profile] = useState(profileRed);
  const [resume] = useState(resumePic);

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            setLang={setLang}
            setSelectedLang={setSelectedLang}
            selectedLang={selectedLang}
          />
        }
      >
        <Route
          path="/"
          element={
            <>
              <Home
                lang={lang.home}
                social_media={lang.social_media}
                profile={profile}
              />
              <About
                job_roles={lang.job_roles}
                about={lang.about}
              />
              <Resume resume={resume} />
              <Contact />
            </>
          }
        />

        <Route
          path="/resume-details"
          element={<FullResume />}
        />
      </Route>
    </Routes>
  );
}

export default App;
