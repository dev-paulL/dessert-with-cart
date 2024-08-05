import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import OrderConfirmedModal from "./OrderConfirmedModal";
import EmptyCartInfo from "./EmptyCartInfo";
import CartItem from "./CartItem";
import CarbonNeutral from "./CarbonNeutral";

export default function Cart() {
  const { cart } = useContext(CartContext);

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
        {totalItems === 0 ? <EmptyCartInfo /> : cart.map((cartItem) => <CartItem key={cartItem.name} cartItem={cartItem}/>)}
        {totalItems !== 0 && (
          <>
            <div className="section_cart-total">
              <p>Order Total</p> <h3 className="section_cart-total--price">${totalPrice}</h3>
            </div>
            
            <CarbonNeutral />

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
