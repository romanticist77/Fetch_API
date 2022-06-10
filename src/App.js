import React, { useState } from "react";
import Shop from "./Shop";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <div className="flex flex-col content-center max-w-xs min-w-[20rem] ">
        <Shop setLogin={setLogin}/>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col content-center max-w-xs mx-6 my-4">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 text-center px-10">Нужно залогиниться!</h2>
        <button className="btn h-10 w-full px-12 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 font-semibold" onClick={() => setLogin(true)}>
          Войти
        </button>
      </div>
    );
  }
}

export default App;
