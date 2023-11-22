import axios from "axios";

const baseUrl = "http://localhost:8080/carrentaldbms";

export const getAllCars = async() => {
    const endpoint = "/tables/cars";
    return (await axios.get(
        `${baseUrl}${endpoint}`,
    )).data;
}

export const getAllTables = async() => {
    const endpoint = "/tables/list";
    return (await axios.get(
        `${baseUrl}${endpoint}`,
    )).data;
}

export const getTableContent = async(tableName) => {
    const endpoint = `/tables/${tableName}`;
    return (await axios.get(
        `${baseUrl}${endpoint}`,
    )).data;
}

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

export const getAllQueryResults = async() => {
    const endpoint = "/tables/queries";
    return (await axios.get(
        `${baseUrl}${endpoint}`
    )).data;
}

export const getTableColumns = async(tableName) => {
    const endpoint = `/tables/${tableName}/columns`;
    return (await axios.get(
        `${baseUrl}${endpoint}`
    )).data;
}

export const createNewTableRecord = async(tableName, record) => {
    const endpoint = `/tables/${tableName}/new`;
    return (await axios.post(
        `${baseUrl}${endpoint}`,
        record
    )).data;
}

export const deleteSelectedRecord = async(tableName, record) => {
    const endpoint = `/tables/${tableName}/delete`;
    return (await axios.delete(
        `${baseUrl}${endpoint}`,
        {
            data: record
        }
    )).data;
}
