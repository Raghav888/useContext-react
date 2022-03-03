import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";

export function ProductListing() {
  let { logger } = useCart();
  let { theme } = useTheme();
  return ["1", "2", "3", "4"].map((item) => (
    <div style={{ color: theme === "white" ? "black" : "white" }}>
      <h2 key={item}>Product {item}</h2>
      <button onClick={logger}>Add to Cart</button>
    </div>
  ));
}
