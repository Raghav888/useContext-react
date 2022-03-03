import { createContext, useContext, useState } from "react";

const CartContext = createContext({ item: 4 });

const CartProvider = ({ children }) => {
  const [item, setCount] = useState(4);
  const logger = () => {
    setCount((_count) => _count + 1);
  };

  return (
    <CartContext.Provider value={{ item, logger }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartContext, CartProvider, useCart };
