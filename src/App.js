import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import CreateTable from "./pages/CreateTable";
import ViewTable from "./pages/ViewTable";
import DropTable from "./pages/DropTable";
import Layout from "./pages/Layout";
import React, {useEffect, useState} from "react";
import HomeIcon from "@mui/icons-material/Home";

function App() {
    return (
        <div className="App">
            <div className={"cursor-pointer"}>
                <Link to="/"><HomeIcon sx={{
                    fontSize: '40px'
                }}/></Link>
            </div>
            <div className={"text-center"}>
                <h1 className={"text-3xl font-extrabold"}>CAR RENTAL DBMS MENU</h1>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/create" element={<CreateTable />} />
                    <Route path="/view" element={<ViewTable />} />
                    <Route path="/drop" element={<DropTable />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;