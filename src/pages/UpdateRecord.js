import React, { useState, useEffect } from "react";
import { getAllTables, getTableContent, updateSelectedRecord } from "../utilities/api";
import Button from "../components/Button";
import {renderCellContent} from "../components/Table";

const UpdateRecord = () => {
    const [tables, setTablesList] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [tableContent, setTableContent] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [updatedValues, setUpdatedValues] = useState({});

    const getTablesList = async() => {
        const tablesList = await getAllTables();
        setTablesList(tablesList);
    };

    const getTableData = async(tableName) => {
        const tableData = await getTableContent(tableName);
        setTableContent(tableData);
    };

    const handleTableSelect = (tableName) => {
        getTableData(tableName);
        setSelectedRecord(null);
        setUpdatedValues({});
    };

    const handleRecordSelect = (record) => {
        setSelectedRecord(record);
        // Initialize updatedValues with current values
        setUpdatedValues({ ...record });
    };

    const handleInputChange = (column, value) => {
        setUpdatedValues((prevValues) => ({
            ...prevValues,
            [column]: value,
        }));
    };

    const handleUpdateClick = async() => {
        if (selectedTable && selectedRecord) {
            const response = await updateSelectedRecord(selectedTable, selectedRecord, updatedValues);
            alert(response);
            getTableData(selectedTable);
            setSelectedRecord(null);
        }
    };

    useEffect(() => {
        getTablesList();
    }, []);

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>UPDATE RECORD</h1>
            <div className={"flex justify-center"}>
                <ul className="list-none grid grid-cols-3 gap-4 my-6">
                    {tables.map((tableName, index) => (
                        <li key={index} className={"text-left"}>
                            <Button
                                content={tableName}
                                onclick={() => {handleTableSelect(tableName); setSelectedTable(tableName);}} />
                        </li>
                    ))}
                </ul>
            </div>
            {selectedTable && tableContent && (
                <div>
                    <h2 className={"font-semibold text-2xl text-center"}>{selectedTable} TABLE</h2>
                    <table className={"table-content mb-6"}>
                        <thead>
                        <tr>
                            {tableContent.length > 0 &&
                                Object.keys(tableContent[0]).map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {tableContent.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => handleRecordSelect(row)}
                                className={selectedRecord === row ? 'bg-blue-200' : 'hover:bg-gray-100'}
                            >
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{renderCellContent(value)}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {selectedRecord && (
                        <div>
                            <h3 className={"font-semibold text-lg mb-2"}>Update Values:</h3>
                            <div className="text-center flex flex-wrap gap-4 mb-4">
                                {Object.keys(selectedRecord).map((column, index) => (
                                    <div key={index} className="">
                                        <label className="mr-2">{column}:</label>
                                        <input
                                            type="text"
                                            value={updatedValues[column] || ''}
                                            onChange={(e) => handleInputChange(column, e.target.value)}
                                            className="border border-gray-700 px-2 py-1 focus:outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                            <Button onclick={handleUpdateClick} content={"Update"} />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UpdateRecord;
