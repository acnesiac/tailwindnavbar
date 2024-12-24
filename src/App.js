import React, { useEffect, useRef, useState } from "react";
import Pagination from "./components/Pagination";
import {
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import UploadFile from "./components/UploadFile";
import TableReact from "./components/TableReact";
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
        <div>
            <h1>farmacias Zacatelco</h1>
            <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<TableReact />} />
                <Route path="/upload" element={<UploadFile />} />
            </Routes>
            </div>
        </div>
    );
}

export default App;
