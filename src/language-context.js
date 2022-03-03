import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ lang: "english" });

const LanguageProvider = ({ children }) => {
  let [lang, setlang] = useState("english");
  const changeLanguage = () => {
    lang === "english" ? setlang("hindi") : setlang("english");
  };
  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLang = () => useContext(LanguageContext);
export { useLang, LanguageContext, LanguageProvider };
