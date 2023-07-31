const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET 
const Refresh_TOKEN_SECRET =  process.env.Refresh_TOKEN_SECRET
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH

module.exports = {
    PORT ,
    MONGODB_CONNECTION_STRING ,
    ACCESS_TOKEN_SECRET ,
    Refresh_TOKEN_SECRET ,
    BACKEND_SERVER_PATH ,
}