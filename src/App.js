import React, { useEffect, useRef, useState } from "react";
import Pagination from "./components/Pagination";
import {
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import UploadFile from "./components/UploadFile";
import TableReact from "./components/TableReact";
import Donut from "./components/Donut";
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
            <div>
                <Navbar></Navbar>
                <div class="p-4 sm:ml-64">

                <Routes>
                    <Route path="/upload" element={<UploadFile />} />
                    <Route path="/" element={<TableReact />} />
                    <Route path="/donutgraph" element={<Donut />} />
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
