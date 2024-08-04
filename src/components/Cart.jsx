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
            <p className="cart-item--name">{cartItem.name}</p>
            <button className="cart-item--removeBtn" onClick={() => removeFromCart(cartItem.name)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#CAAFA7"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </button>
            <span>
              <p className="cart-item--quantity">{cartItem.quantity}x</p>

              <p className="cart-item--price_each">
                @ ${cartItem.price.toFixed(2).toLocaleString()}
              </p>
              <p className="cart-item--price_total">
                ${(cartItem.price * cartItem.quantity).toFixed(2).toLocaleString()}
              </p>
            </span>
          </div>
        </div>
      ))}
      <div className="section_cart-total">
        <p>Order Total:</p> <h3>${totalPrice}</h3>
      </div>
    </section>
  );
}
