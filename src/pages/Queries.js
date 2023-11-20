import React, {useEffect, useState} from "react";
import {getAllQueryResults} from "../utilities/api";
import Table from "../components/Table";

const Queries = () => {
    const [listOfLists, setListOfLists] = useState([]);
    const getQueries = async() => {
        const listOfQueryLists = await getAllQueryResults();
        setListOfLists(listOfQueryLists)
    }

    useEffect(() => {
        getQueries();
    }, []);

    return (
        <>
            <h1 className={"text-xl font-bold mt-6"}>QUERIES</h1>
            {
                listOfLists.map(queryLists => (
                    <Table tableContent={queryLists}/>
                ))
            }
        </>
    );
}

export default Queries;
