import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    })();
  }, []);

  return (
    <div className="shop">
      <ul className="px-6 py-4">
        {items &&
          items.map((item) => (
            <li key="items.length">
              <Item className="" info={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}