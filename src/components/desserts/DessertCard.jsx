import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import DessertCardPicture from "./DessertCardPicture";
import ButtonAddToCart from "./ButtonAddToCart";
import ButtonManageQuantity from "./ButtonManageQuantity";

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
      <DessertCardPicture dessert={dessert} quantityInCart={quantityInCart} />

      {quantityInCart === 0 ? (
        <ButtonAddToCart onClick={handleAdd} ariaLabel={`Add ${dessert.name} to cart`} />
      ) : (
        <ButtonManageQuantity
          onClickDecrement={handleDecrement}
          onClickIncrement={handleIncrement}
          quantityInCart={quantityInCart}
          dessertName={dessert.name}
        />
      )}

      <p className="section_desserts-article--category">{dessert.category}</p>
      <h2 className="section_desserts-article--name">{dessert.name}</h2>
      <p className="section_desserts-article--price">
        ${dessert.price.toFixed(2).toLocaleString()}
      </p>
    </article>
  );
}
