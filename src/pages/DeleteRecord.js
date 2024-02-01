import React, {useEffect, useState} from "react";
import {deleteSelectedRecord, getAllTables, getTableContent} from "../utilities/api";
import Button from "../components/Button";

const DeleteRecord = () => {
    const [tables, setTablesList] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [tableContent, setTableContent] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const getTablesList = async () => {
        const tablesList = await getAllTables();
        setTablesList(tablesList);
    };

    const getTableData = async(tableName) => {
        const tableData = await getTableContent(tableName);
        setTableContent(tableData);
    }

    const handleRowSelect = (record) => {
        setSelectedRecord(record);
        console.log(record);
    };

    const renderCellContent = (value) => {
        const isImage = value && typeof value === 'string' && /\.(png|jpg|jpeg|gif|svg|webp)$/.test(value.toLowerCase());

        if (isImage) {
            return <img src={value} alt="Table Cell" style={{ maxWidth: '100%', maxHeight: '100%' }} />;
        } else {
            return value;
        }
    };

    const handleDeleteClick = async(tableName, record) => {
        if (selectedRecord !== null) {
            const isConfirmed = window.confirm("Are you sure you want to proceed?");
            if (isConfirmed) {
                const response = await deleteSelectedRecord(tableName, record)
                alert(response);
                setSelectedRecord(null);
                getTableData(tableName);
            }
        }
    };

    useEffect(() => {
        getTablesList();
    }, []);

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>DELETE TABLE RECORDS</h1>
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
                            <tr key={rowIndex}
                                onClick={() => handleRowSelect(row)}
                                className={selectedRecord === row ? 'bg-blue-200' : 'hover:bg-gray-100'}
                            >
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{renderCellContent(value)}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Button content={"Delete"} onclick={() => handleDeleteClick(selectedTable, selectedRecord)} />
                </div>
            )}
        </>
    );
}

export default DeleteRecord;
