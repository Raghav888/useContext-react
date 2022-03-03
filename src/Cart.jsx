import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";

export function Cart() {
  const { item } = useCart();
  const { theme } = useTheme();
  return (
    <h1 style={{ color: theme === "white" ? "black" : "white" }}>
      {" "}
      Items in cart {item}
    </h1>
  );
}
