import React from "react";
import Registration from "./components/Registration";
import "./App.css";
import {
  setTranslations,
  setDefaultLanguage,
  getLanguage,
  setLanguage,
  t,
} from "react-switch-lang";
import en from "./language/en.json";
import sr from "./language/sr.json";

setTranslations({en, sr});
const lang = localStorage.getItem('language');
if (lang === null) {
  setDefaultLanguage('sr');
} else {
  setDefaultLanguage(lang);
}
function App() {
  function handleSetLanguage(key) {
    setLanguage(key);
    localStorage.setItem('language', getLanguage());
    window.location.reload();
  }

  
  return (
    <div className="App">
        <button type="button" onClick={()=>handleSetLanguage('sr')}>
          {t('lang.sr') }
        </button>
        <button type="button" onClick={()=>handleSetLanguage('en')}>
          {t('lang.en')}
        </button>
      <Registration />
    </div>
  );
}

export default App;
