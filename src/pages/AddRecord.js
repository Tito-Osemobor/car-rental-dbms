import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import {createNewTableRecord, getAllTables, getTableColumns} from "../utilities/api";
const AddRecord = () => {
    const [tables, setTablesList] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [columns, setColumns] = useState([]);

    const getTablesList = async () => {
        const tablesList = await getAllTables();
        setTablesList(tablesList);
    };

    useEffect(() => {
        getTablesList();
    }, []);

    const getColumns = async (tableName) => {
        setColumns(await getTableColumns(tableName));
    }

    const initialState = Object.fromEntries(columns.map(column => [column, '']));
    const [rowData, setRowData] = useState(initialState);


    const handleInputChange = (column, value) => {
        setRowData(prevData => ({
            ...prevData,
            [column]: value,
        }));
    };

    const handleInsertClick = async() => {
        const response = await createNewTableRecord(selectedTable, rowData);
        alert(response);
        setRowData(initialState);
        setSelectedTable(null);
    };

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>ADD NEW RECORD</h1>
            <div className={"flex justify-center"}>
                <ul className='list-none grid grid-cols-3 gap-4 my-6'>
                    {tables.map((table, index) => (
                        <li key={index} className={"text-left"}>
                            <Button
                                content={table}
                                onclick={() => {getColumns(table); setSelectedTable(table); }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {
                selectedTable && columns && columns.length > 0 && (
                    <div>
                        <table className="table-content mb-10">
                            <thead>
                            <tr>
                                {columns.map(column => (
                                    <th key={column}>{column}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {columns.map(column => (
                                    <td key={column}>
                                        <input
                                            type="text"
                                            value={rowData[column]}
                                            onChange={e => handleInputChange(column, e.target.value)}
                                            className={"w-full h-full focus:outline-none"}
                                        />
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                        <Button onclick={handleInsertClick} content={"Insert"}/>
                    </div>
            )}
        </>
    );
}

export default AddRecord;
