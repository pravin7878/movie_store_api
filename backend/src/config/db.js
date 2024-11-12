const mongoose = require("mongoose");

const { MONGO_DB_URI, DB_NAME, CLOUD_URI } = process.env;


const connectToDB = ()=>{
    const connection = mongoose.connect(CLOUD_URI);
    return connection
}

module.exports = connectToDB