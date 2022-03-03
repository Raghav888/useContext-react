import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import "./styles.css";
import { Theme } from "./Theme";
import { useTheme } from "./theme-context";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "white" ? "white" : "gray" }}
    >
      <h1
        className="app-header"
        style={{ color: theme === "white" ? "black" : "white" }}
      >
        eCommerce
      </h1>
      <div className="app-body">
        <Theme />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
