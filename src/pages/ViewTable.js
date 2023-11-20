import React, {useEffect, useState} from "react";
import {getAllTables, getTableContent} from "../utilities/api";
import Table from "../components/Table";
import Button from "../components/Button";


const ViewTable = () => {
    const [tables, setTablesList] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [tableContent, setTableContent] = useState([]);

    const getTablesList = async () => {
        const tablesList = await getAllTables();
        setTablesList(tablesList);
    };

    const getTableData = async(tableName) => {
        const tableData = await getTableContent(tableName);
        setTableContent(tableData);
    }

    useEffect(() => {
        getTablesList();
    }, []);

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>VIEW TABLES</h1>
            <div className={"flex justify-center"}>
                <ul className='list-none grid grid-cols-3 gap-4 my-6'>
                    {tables.map((table, index) => (
                        <li key={index} className={"text-left"}>
                            <Button
                                content={table}
                                onclick={() => {getTableData(table); setSelectedTable(table); }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {selectedTable && tableContent && tableContent.length > 0 && (
                <div>
                    <h2 className={"font-semibold text-2xl text-center"}>{selectedTable} TABLE</h2>
                    <Table tableContent={tableContent}/>
                </div>
            )}
        </>
    );
}

export default ViewTable;
