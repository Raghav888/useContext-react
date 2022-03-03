import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { getfontcolor } from "./getfontcolor";

export function Cart() {
  const { item } = useCart();
  const { theme } = useTheme();
  return <h1 style={{ color: getfontcolor(theme) }}> Items in cart {item}</h1>;
}
