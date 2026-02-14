import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function MainLayout({ setLang, setSelectedLang, selectedLang }) {
  return (
    <>
      <NavigationBar
        setLang={setLang}
        setSelectedLang={setSelectedLang}
        selectedLang={selectedLang}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
