import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className={"text-center flex flex-col items-center mt-6 gap-6"}>
                <Link to="/create">
                    <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36"}>Create Table</button>
                </Link>
                <Link to="/view">
                    <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36"}>View Tables</button>
                </Link>
                <Link to="/drop">
                    <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36"}>Drop Tables</button>
                </Link>
                <Link to="/queries">
                    <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-36"}>Run Queries</button>
                </Link>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
