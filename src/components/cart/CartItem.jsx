import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function CartItem({ cartItem }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="section_cart-item">
      <div className="section_cart-item--info">
        <p className="cart-item--name">{cartItem.name}</p>
        <button
          className="cart-item--removeBtn"
          onClick={() => removeFromCart(cartItem.name)}
          aria-label={`Remove ${cartItem.name} from the cart.`}
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

          <p className="cart-item--price_each">@ ${cartItem.price.toFixed(2).toLocaleString()}</p>
          <p className="cart-item--price_total">
            ${(cartItem.price * cartItem.quantity).toFixed(2).toLocaleString()}
          </p>
        </span>
      </div>
      <hr />
    </div>
  );
}
