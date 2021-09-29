const express = require("express");
const app = express();

//imports .env into process.env
require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_PROD_HOST,
  user: process.env.DB_PROD_USERNAME,
  password: process.env.DB_PROD_PASSWORD,
  database: process.env.DB_PROD_DATABASE,
});

client.connect();

app.get("/", (req, res) => {
  console.log(process.env);
  client.query(`SELECT * FROM posts`, (err, data) => {
    res.send(data.rows);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening...`);
});
