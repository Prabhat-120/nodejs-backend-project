const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/routes");

const PORT = 5000;

const DB_CONNECTION_URI = "mongodb://127.0.0.1:27017";
const DB_NAME = "UserDB";

mongoose
  .connect(`${DB_CONNECTION_URI}/${DB_NAME}`)
  .then(() => {
    console.log("DB connection established.");
  })
  .catch((err) => {
    console.log("Connection error" + err.message);
  });

  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", router);
  
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });