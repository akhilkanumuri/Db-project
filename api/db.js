import mysql from "mysql"; 

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Akhilreddy@123",
    database:"estate"
})