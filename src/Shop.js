import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loader from "./Loader"

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true)
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false)
      }
    })();
  }, []);

  return (
    <>
    {loader && <Loader />}
    <div className="shop">
      <ul className="px-6 py-4">
        {items &&
          items.map((item) => (
            <li key="items.id">
              <Item info={item} />
            </li>
          ))}
      </ul>
    </div>
    </>
  );
}