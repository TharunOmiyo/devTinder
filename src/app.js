const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("DataBase connection is esatblished");
    app.listen(3000, () => {
      console.log("Listening from the port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed");
  });
