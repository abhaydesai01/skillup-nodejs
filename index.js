const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Use JSON and URL-encoded parsers individually
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from Express.js....");
});

app.get("/date", (req, res) => {
  res.send("Date is: " + new Date().toLocaleString());
});

app.listen(9595, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log("Server started on port 9595");
});
