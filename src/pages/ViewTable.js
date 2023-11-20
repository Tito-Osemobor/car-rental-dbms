import React, {useEffect, useState} from "react";
import {getAllTables, getTableContent} from "../utilities/api";


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

    const renderCellContent = (value) => {
        const isImage = value && typeof value === 'string' && /\.(png|jpg|jpeg|gif|svg|webp)$/.test(value.toLowerCase());

        if (isImage) {
            return <img src={value} alt="Table Cell" style={{ maxWidth: '100%', maxHeight: '100%' }} />;
        } else {
            return value;
        }
    };

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>VIEW TABLES</h1>
            <div className={"flex justify-center"}>
                <ul className='list-none grid grid-cols-3 gap-4 my-6'>
                    {tables.map((table, index) => (
                        <li key={index} className={"text-left"}>
                            <button
                                onClick={() => {getTableData(table); setSelectedTable(table); }}
                                className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-48"}
                            >
                                {table}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedTable && tableContent && tableContent.length > 0 && (
                <div>
                    <h2 className={"font-semibold text-2xl text-center"}>{selectedTable} TABLE</h2>
                    <table className="table-content">
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
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{renderCellContent(value)}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default ViewTable;
