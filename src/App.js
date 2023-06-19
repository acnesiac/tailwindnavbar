import logo from "./logo.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import React, { useEffect, useRef, useState } from "react";
import Pagination2 from "./components/Pagination2";
function App() {
  const links = [{ id: 1 }];
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }
  return (
    <div className="w-full h20 text-3xl font-bold flex justify-center items-center px-4 py-16	">
      <h1 className="text-5xl ">farmacias Zacatelco</h1>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      <Pagination></Pagination>
      <Pagination2></Pagination2>
    </div>
  );
}

export default App;
