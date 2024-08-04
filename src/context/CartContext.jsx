import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addDessertToCart = (dessert) => {
    setCart((prevCart) => {
      const dessertInCart = prevCart.find((order) => order.name === dessert.name);
      if (dessertInCart) {
        return prevCart.map((order) =>
          order.name === dessert.name ? { ...order, quantity: order.quantity + 1 } : order
        );
      } else {
        return [...prevCart, { ...dessert, quantity: 1 }];
      }
    });
  };

  const updateDessertInCart = (dessertName, coef) => {
    setCart((prevCart) =>
      prevCart
        .map((order) =>
          order.name === dessertName ? { ...order, quantity: order.quantity + coef } : order
        )
        .filter((order) => order.quantity > 0)
    );
  };

  const removeFromCart = (dessertName) => {
    setCart((prevCart) => prevCart.filter((order) => order.name !== dessertName));
  };

  const getOrderQuantity = (dessertName) => {
    const order = cart.find((order) => order.name === dessertName);
    return order ? order.quantity : 0;
  };

  const contextValue = {
    cart,
    addDessertToCart,
    updateDessertInCart,
    removeFromCart,
    getOrderQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;