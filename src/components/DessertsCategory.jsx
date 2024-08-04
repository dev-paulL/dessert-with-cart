import { useContext, useEffect, useState } from "react";

import DessertCard from "./DessertCard";

export default function DessertsCategory() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((d) => setDesserts(d));
  }, []);

  return (
    <section className="section_desserts">
      <h1>Desserts</h1>

      {desserts.map((dessert) => (
        <DessertCard key={dessert.name} dessert={dessert} />
      ))}
    </section>
  );
}
