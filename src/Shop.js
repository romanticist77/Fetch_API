import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loader from "./Loader"
import useFetch from "./useFetch"

export default function Shop(props) {
  // const [items, setItems] = useState([]);
  // const [loader, setLoader] = useState(false);

 const { get, post, loader, items } = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com")
    // (async () => {
    //   try {
    //     setLoader(true)
    //     const response = await fetch("https://covid-shop-mcs.herokuapp.com");
    //     const data = await response.json();
    //     if (data) {
    //       setItems(data);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setLoader(false)
    //   }
    // })();
  }, []);

  const {setLogin} = props;

  return (
    <>
    {loader && <Loader />}
    <div className="shop ">
      <ul className="px-6 py-4">
        {items &&
          items.map((item) => (
            <li key="items.id">
              <Item info={item} />
            </li>
          ))}
      </ul>
      <div className="px-6 py-4">
      <button className="w-full  h-10 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 font-semibold" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </div>
    </div>
    </>
  );
}