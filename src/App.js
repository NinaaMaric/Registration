import React, { useEffect, useState } from "react";
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
import Loader from "react-loader-spinner";
import Monkey from "./img/monkey.png";

setTranslations({ en, sr });
const lang = localStorage.getItem("language");
if (lang === null) {
  setDefaultLanguage("sr");
} else {
  setDefaultLanguage(lang);
}
function App() {
  function handleSetLanguage(key) {
    setLanguage(key);
    localStorage.setItem("language", getLanguage());
    window.location.reload();
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader
          type="TailSpin"
          color="tomato"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <>
          <div className="monk-form-regist">
            <div className="btn-lang">
              <button
                className="lang"
                type="button"
                onClick={() => handleSetLanguage("sr")}
              >
                {t("lang.sr")}
              </button>
              <button
                className="lang"
                type="button"
                onClick={() => handleSetLanguage("en")}
              >
                {t("lang.en")}
              </button>
            </div>
            <Registration />
          </div>
          <img alt="monkey" src={Monkey} className="monk-anima" />
        </>
      )}
    </>
  );
}

export default App;
