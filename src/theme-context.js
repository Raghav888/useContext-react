import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "white" });

const ThemeProvider = ({ children }) => {
  let [theme, settheme] = useState("white");
  const changeTheme = () => {
    theme === "white" ? settheme("black") : settheme("white");
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {" "}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
