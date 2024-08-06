import { useEffect, useState } from "react";

import DessertCard from "./desserts/DessertCard";

export default function DessertsCategory() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((d) => setDesserts(d));
  }, []);

  return (
    <>
      <section className="section_desserts">
        <h1>Desserts</h1>
        <div className="section_desserts--allDesserts">
          {desserts.map((dessert) => (
            <DessertCard key={dessert.name} dessert={dessert} />
          ))}
        </div>
      </section>
    </>
  );
}
