import React from "react";

export default function DessertCardPicture({ dessert, quantityInCart }) {
  return (
    <picture>
      <source srcSet={dessert.image.desktop} media="(min-width: 64rem)" />
      <source srcSet={dessert.image.tablet} media="(min-width: 48rem)" />
      <img
        loading="lazy"
        alt={dessert.name}
        src={dessert.image.mobile}
        className={`section_desserts-article--img ${
          quantityInCart > 0 ? "section_desserts-selected" : ""
        }`}
      />
    </picture>
  );
}
