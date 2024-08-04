import React, { useContext, useMemo } from "react";
import CartContext from "../context/CartContext";

export default function Cart() {
  const { cart, updateDessertInCart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <section className="section_cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="section_cart">
      <h2>Your Cart ({totalItems} items)</h2>
      {cart.map((cartItem) => (
        <div key={cartItem.name} className="section_cart-item">
          <div className="section_cart-item--info">
            <p>{cartItem.name}</p>
            <p>${cartItem.price.toFixed(2)} each</p>
          </div>

          <button onClick={() => removeFromCart(cartItem.name)}>Remove</button>
        </div>
      ))}
      <div className="section_cart-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
    </section>
  );
}
