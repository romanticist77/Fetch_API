import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { ...info } = props.info;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item max-w-xs overflow-hidden rounded-lg shadow-lg px-6 py-4">
      <img className="object-cover w-full h-48" src={info.image} alt="" />
      <div className="item-info px-6 py-4">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{info.name}</h2>
        <p className="leading-normal text-gray-700">{info.desc}</p>
      </div>
      <div className="item-quantity px-6 py-4 flex justify-center">
        <button
          className="item-less inline-flex items-center justify-center w-10 h-10 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
        </button>
        <h3 className="item-total px-4 py-2 leading-normal font-semibold text-black-800 bg-gray-100 rounded-lg">{total ? total : ""}</h3>
        <button className="item-more inline-flex items-center justify-center w-10 h-10 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={handleAddClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        </button>
      </div>
    </div>
  );
}