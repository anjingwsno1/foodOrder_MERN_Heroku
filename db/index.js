const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anjingwsno1:762188@test-bfhj1.mongodb.net/test?retryWrites=true&w=majority",
    { dbName: "CSC_mern", useNewUrlParser: true }
  )
  .catch(e => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
