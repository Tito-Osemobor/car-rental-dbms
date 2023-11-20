import React from 'react';

const Table = ({ tableContent }) => {
    const renderCellContent = (value) => {
        const isImage = value && typeof value === 'string' && /\.(png|jpg|jpeg|gif|svg|webp)$/.test(value.toLowerCase());

        if (isImage) {
            return <img src={value} alt="Table Cell" style={{ maxWidth: '100%', maxHeight: '100%' }} />;
        } else {
            return value;
        }
    };

    return (
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
    );
};

export default Table;
