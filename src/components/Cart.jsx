import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import OrderConfirmedModal from "./OrderConfirmedModal";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const [showOrderConfirmedModal, setShowOrderConfirmedModal] = useState(false);

  const handleConfirmOrder = () => {
    setShowOrderConfirmedModal(true);
  };

  document.body.style.overflow = showOrderConfirmedModal ? "hidden" : "auto";

  return (
    <>
      <section className="section_cart">
        <h2>Your Cart ({totalItems})</h2>
        {totalItems === 0 ? (
          <>
            <img
              src="/images/illustration-empty-cart.svg"
              alt=""
              className="section_cart-empty--illustration"
            />
            <p className="section_cart-empty--text">Your added items will appear here</p>
          </>
        ) : (
          cart.map((cartItem) => (
            <div key={cartItem.name} className="section_cart-item">
              <div className="section_cart-item--info">
                <p className="cart-item--name">{cartItem.name}</p>
                <button
                  className="cart-item--removeBtn"
                  onClick={() => removeFromCart(cartItem.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 1 10 10"
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
              <hr />
            </div>
          ))
        )}
        {totalItems !== 0 && (
          <>
            <div className="section_cart-total">
              <p>Order Total</p> <h3 className="section_cart-total--price">${totalPrice}</h3>
            </div>
            <div className="section_cart--carbonNeutralDelivery">
              <img src="/images/icon-carbon-neutral.svg" alt="" />
              <p>
                This is a <span>carbon neutral</span> delivery
              </p>
            </div>

            <button onClick={handleConfirmOrder} className="section_cart--confirmOrderBtn">
              Confirm Order
            </button>
          </>
        )}
      </section>

      {showOrderConfirmedModal ? <OrderConfirmedModal totalPrice={totalPrice} /> : null}
      <div className={`overlay ${showOrderConfirmedModal ? "" : "hidden"}`}></div>
    </>
  );
}
