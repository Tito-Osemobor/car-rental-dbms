import React, {useEffect, useState} from "react";
import {dropSelectedTable, getAllTables} from "../utilities/api";

const DropTable = () => {
    const [tables, setTablesList] = useState([]);

    const getTablesList = async () => {
        const tablesList = await getAllTables();
        setTablesList(tablesList);
    };

    useEffect(() => {
        getTablesList();
    }, []);

    const dropTable = async (tableName) => {
        const isConfirmed = window.confirm("Are you sure you want to proceed?");
        if (isConfirmed) {
            const response = await dropSelectedTable(tableName);
            response === tableName.toUpperCase() + " successfully dropped!"
                ? alert(tableName.toUpperCase() + " successfully dropped!")
                : alert("An Error Occurred!");
        }
        getTablesList();
    }

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>DROP TABLE</h1>
            <div className={"flex justify-center"}>
                <ul className='list-none grid grid-cols-3 gap-4 my-6'>
                    {tables.map((table, index) => (
                        <li key={index} className={"text-left"}>
                            <button
                                onClick={() => {dropTable(table);}}
                                className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-48"}
                            >
                                {table}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default DropTable;
