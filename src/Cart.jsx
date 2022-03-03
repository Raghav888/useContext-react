import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { getfontcolor } from "./getfontcolor";
import { useLang } from "./language-context";
import { Languagedic } from "./languagefile";
export function Cart() {
  const { item } = useCart();
  const { theme } = useTheme();
  const { lang } = useLang();
  return (
    <h1 style={{ color: getfontcolor(theme) }}>
      {`${Languagedic[lang]["cart"]} ${item}`}
    </h1>
  );
}
