import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

export default function DessertCard({ dessert }) {
  const { addDessertToCart, updateDessertInCart, getOrderQuantity, removeFromCart } = useContext(CartContext);
  const [quantityInCart, setQuantityInCart] = useState(0);


  useEffect(() => {
    setQuantityInCart(getOrderQuantity(dessert.name));
  }, [dessert.name]);

  const handleAdd = () => {
    addDessertToCart(dessert);
    setQuantityInCart(prevQuantity => prevQuantity + 1);
    console.log(dessert.name, quantityInCart);
  };

  const handleIncrement = () => {
    updateDessertInCart(dessert.name, 1);
    setQuantityInCart(prevQuantity => prevQuantity + 1);
    console.log(dessert.name, quantityInCart);
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      updateDessertInCart(dessert.name, -1);
      setQuantityInCart(prevQuantity => prevQuantity - 1);
      console.log(dessert.name, quantityInCart);
    } else if (quantityInCart === 1) {
        removeFromCart(dessert.name);
        setQuantityInCart(0);
        console.log(dessert.name, quantityInCart);
    }
  };

  return (
    <article className="section_desserts-article">
      <h1 className="section_desserts-article--name">{dessert.name}</h1>
      <img alt="" src={dessert.image.mobile} className="section_desserts-article--img" />

      {quantityInCart <= 0 ? (
        <button className="section_desserts-article--btn btn-addToCart" onClick={handleAdd}>
          Add to Cart
        </button>
      ) : (
        <div>
          <button onClick={handleDecrement}>-1</button>
          <p>{quantityInCart}</p>
          <button onClick={handleIncrement}>+1</button>
        </div>
      )}

      <p>{dessert.category}</p>
      <p>${dessert.price.toLocaleString()}</p>
    </article>
  );
}
