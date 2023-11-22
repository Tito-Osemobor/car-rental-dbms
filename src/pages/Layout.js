import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button";

const Layout = () => {
    return (
        <>
            <nav className={"text-center flex flex-col items-center mt-6 gap-6"}>
                <Link to="/create">
                    <Button content={"Create Table"} />
                </Link>
                <Link to="/view">
                    <Button content={"View Tables"} />
                </Link>
                <Link to="/drop">
                    <Button content={"Drop Tables"} />
                </Link>
                <Link to="/add">
                    <Button content={"Add Records"} />
                </Link>
                <Link to="/queries">
                    <Button content={"Run Queries"} />
                </Link>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
