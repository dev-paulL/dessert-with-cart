import React from "react";

export default function EmptyCartInfo() {
  return (
    <>
      <img
        src="/images/illustration-empty-cart.svg"
        alt=""
        className="section_cart-empty--illustration"
      />
      <p className="section_cart-empty--text">Your added items will appear here</p>
    </>
  );
}
