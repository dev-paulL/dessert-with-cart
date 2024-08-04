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
      <h1 className="section_desserts-article--name">{dessert.name}</h1>
      <img alt={dessert.name} src={dessert.image.mobile} className="section_desserts-article--img" />

      {quantityInCart === 0 ? (
        <button className="section_desserts-article--btn btn-addToCart" onClick={handleAdd}>
          Add to Cart
        </button>
      ) : (
        <div className="section_desserts-article_quantity-control">
          <button onClick={handleDecrement}>-</button>
          <p>{quantityInCart}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}

      <p>{dessert.category}</p>
      <p>${dessert.price.toLocaleString()}</p>
    </article>
  );
}