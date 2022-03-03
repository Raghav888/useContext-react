import { useLang } from "./language-context";

export const Language = () => {
  let { lang, changeLanguage } = useLang();
  return lang === "english" ? (
    <button onClick={changeLanguage}>Hindi</button>
  ) : (
    <button onClick={changeLanguage}>English</button>
  );
};
