import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function DessertCard({ dessert }) {
  const { addDessertToCart, updateDessertInCart, getOrderQuantity, removeFromCart } =
    useContext(CartContext);

  const quantityInCart = getOrderQuantity(dessert.name);

  const handleAdd = () => {
    addDessertToCart(dessert);
  };

  const handleIncrement = () => {
    updateDessertInCart(dessert.name, 1);
  };

  const handleDecrement = () => {
    if (quantityInCart > 1) {
      updateDessertInCart(dessert.name, -1);
    } else if (quantityInCart === 1) {
      removeFromCart(dessert.name);
    }
  };

  return (
    <article className="section_desserts-article">
      <picture>
        <source srcSet={dessert.image.desktop} media="(min-width: 64rem)" />
        <source srcSet={dessert.image.tablet} media="(min-width: 48rem)" />
        <img
          alt={dessert.name}
          src={dessert.image.mobile}
          className={`section_desserts-article--img ${
            quantityInCart > 0 ? "section_desserts-order--img" : ""
          }`}
        />
      </picture>

      {quantityInCart === 0 ? (
        <button className="section_desserts-article--btn-addToCart" onClick={handleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F" clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#c73a0f" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className="section_desserts-article--quantityBtns">
          <button className="section_desserts-article--decrementBtn" onClick={handleDecrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>
          <p>{quantityInCart}</p>
          <button className="section_desserts-article--incrementBtn" onClick={handleIncrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </button>
        </div>
      )}

      <p className="section_desserts-article--category">{dessert.category}</p>
      <h2 className="section_desserts-article--name">{dessert.name}</h2>
      <p className="section_desserts-article--price">
        ${dessert.price.toFixed(2).toLocaleString()}
      </p>
    </article>
  );
}
