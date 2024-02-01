import axios from "axios";

// Base URL for requesting to backend API
const baseUrl = "http://localhost:8080/carrentaldbms";

// This API request is for getting a list of all the Tables in our database
export const getAllTables = async() => {
    const endpoint = "/tables/list";
    return (await axios.get(
        `${baseUrl}${endpoint}`,
    )).data;
}

// This API request is for getting all records in a particular database
export const getTableContent = async(tableName) => {
    const endpoint = `/tables/${tableName}`;
    return (await axios.get(
        `${baseUrl}${endpoint}`,
    )).data;
}

// This API request is for creating a new Table
export const createNewTable = async(tableName, sql) => {
    const endpoint = "/tables/new";
    return (await axios.post(
        `${baseUrl}${endpoint}`,
        {
            tableName: tableName,
            sql: sql
        }
    )).data;
}

// This API request is for dropping a Table from the database
export const dropSelectedTable = async(tableName) => {
    const endpoint = "/tables/drop";
    return (await axios.delete(
        `${baseUrl}${endpoint}`,
        {
            params : {
                tableName: tableName
            }
        }
    )).data;
}

// This API request is for getting all the results of our queries from Assignment 4
export const getAllQueryResults = async() => {
    const endpoint = "/tables/queries";
    return (await axios.get(
        `${baseUrl}${endpoint}`
    )).data;
}

// This API request is for getting all the Column names of a particular Table
export const getTableColumns = async(tableName) => {
    const endpoint = `/tables/${tableName}/columns`;
    return (await axios.get(
        `${baseUrl}${endpoint}`
    )).data;
}

// This API request is for creating a new record in a particular Table
export const createNewTableRecord = async(tableName, record) => {
    const endpoint = `/tables/${tableName}/new`;
    return (await axios.post(
        `${baseUrl}${endpoint}`,
        record
    )).data;
}

// This API request is for deleting a record in a particular Table
export const deleteSelectedRecord = async(tableName, record) => {
    const endpoint = `/tables/${tableName}/delete`;
    return (await axios.delete(
        `${baseUrl}${endpoint}`,
        {
            data: record
        }
    )).data;
}

export const updateSelectedRecord = async(tableName, selectedRecord, updatedRecord) => {
    const endpoint = `/tables/${tableName}/update`;
    return (await axios.put(
        `${baseUrl}${endpoint}`,
        {
            selectedRecord, updatedRecord
        }
    )).data;
}
