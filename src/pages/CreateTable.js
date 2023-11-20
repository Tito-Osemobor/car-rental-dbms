import React, {useState} from "react";
import {createNewTable} from "../utilities/api";


const CreateTable = () => {
    const [tableName, setTableName ] = useState("");
    const [sql, setSql ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createNewTable(tableName, sql);
        response.data === tableName.toUpperCase() + " successfully created!"
            ? alert(tableName.toUpperCase() + " successfully created!")
            : alert("An Error Occurred!");
        setTableName("");
        setSql("");
    }

    const handleChange = (e) => {
        setSql(e.target.value);
    }

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>CREATE TABLE</h1>
            <div className={"flex justify-center"}>
                <form className={"mt-6"} onSubmit={handleSubmit}>
                    <label className={""}>
                        Enter Table Name:
                        <input
                            className={"ml-5 px-5 py-3 border border-gray-700"}
                            type={"text"}
                            value={tableName}
                            placeholder={"Enter Table Name..."}
                            onChange={e => setTableName(e.target.value)}
                        />
                    </label>
                    <textarea
                        className={"mt-3 border border-gray-700 w-96 h-96 p-5 resize-none block "}
                        value={sql}
                        placeholder={"Enter SQL command to create your table..."}
                        onChange={handleChange}
                    />
                    <input
                        type={"submit"}
                        className={"mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-48"}
                    />
                </form>
            </div>
        </>
    );
}

export default CreateTable;
