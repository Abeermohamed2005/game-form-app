import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <nav>
      <span>My App</span>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </nav>
  );
}

export default Navbar;