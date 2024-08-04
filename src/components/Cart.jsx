import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Cart() {
  const { cart, updateDessertInCart, removeFromCart } = useContext(CartContext);

  return (
    <section>
      <h2>Your Cart ({cart.length})</h2>
      {cart.map((cartItem) => (
        <div key={cartItem.name} className="caddie-item">
          <p>
            {cartItem.name} - {cartItem.quantity}
          </p>
          <button onClick={() => removeFromCart(cartItem.name)}>Remove</button>
        </div>
      ))}
    </section>
  );
}
