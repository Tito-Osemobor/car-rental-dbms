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
    ));
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
    ));
}
