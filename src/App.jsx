import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import "./styles.css";
import { Theme } from "./Theme";
import { useTheme } from "./theme-context";
import { getfontcolor } from "./getfontcolor";
import { Language } from "./Language";
import { Languagedic } from "./languagefile";
import { useLang } from "./language-context";

export default function App() {
  const { theme } = useTheme();
  const { lang } = useLang();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "white" ? "white" : "gray" }}
    >
      <Language />
      <h1 className="app-header" style={{ color: getfontcolor(theme) }}>
        {`${Languagedic[lang]["title"]}`}
      </h1>
      <div className="app-body">
        <Theme />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
