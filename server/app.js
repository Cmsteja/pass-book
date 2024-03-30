const express = require('express');
const db = require('./db');
const app = express();
require('dotenv').config();
const transactionService = require("./routes/transactionService.js");

const port = process.env.PORT; // You can change the port number as needed


const test = async()=>{
  const d = {
    date:"12324274",
    transactions:{
      "uber":10,
      "groceries":100
    }
  }
  console.log("hiis")
  console.log(d);
  await transactionService.createUser(d);
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
  test();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
