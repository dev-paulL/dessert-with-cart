import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function OrderConfirmedModal({ totalPrice }) {
  const { cart } = useContext(CartContext);

  return (
    <section className="section_modal">
      <img src="/images/icon-order-confirmed.svg" alt="" />
      <h2>
        Order Confirmed
      </h2>
      <p className="section_modal--text">We hope you enjoy your food!</p>

      <ul className="section_modal--orderedArticlesList">
        {cart.map((orderedItem) => (
          <div key={orderedItem.name}>
            <li className="section_modal--orderedArticlesList--article">
              <img src={orderedItem.image.thumbnail} alt={orderedItem.name}></img>
              <h3 className="section_modal--orderedArticlesList--article-name">
                {orderedItem.name}
              </h3>
              <span>
                <p className="section_modal--orderedArticlesList--article-quantity">
                  {orderedItem.quantity}x
                </p>
                <p className="section_modal--orderedArticlesList--article-priceEach">
                  @ ${orderedItem.price.toFixed(2).toLocaleString()}
                </p>
              </span>
              <p className="section_modal--orderedArticlesList--article-priceTotal">
                ${(orderedItem.price * orderedItem.quantity).toFixed(2).toLocaleString()}
              </p>
            </li>
            <hr />
          </div>
        ))}

        <div className="section_modal--orderedArticlesList--orderTotal">
          <p>Order Total</p>
          <p className="section_modal--orderedArticlesList--orderTotal-price">${totalPrice}</p>
        </div>
      </ul>
      <a href="/" className="section_modal--link-newOrder">
        Start New Order
      </a>
    </section>
  );
}
