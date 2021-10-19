import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next'
import './i18n.js'

function App() {
  const { t, i18n } = useTranslation();
  function toggleLanguage(lang) {
    if (lang) i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("hello")}
        </a>
      </header>
    </div>
  );
}

export default App;
