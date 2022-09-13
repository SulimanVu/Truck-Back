require("dotenv").config();

const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.static(path.join(__dirname, "image")))

app.use(cors())
app.use(express.json())
app.use(require('./routes/car.route'))
app.use(require('./routes/request.route'))
app.use(require('./routes/user.route'))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("warning")); 

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server: ${process.env.SERVER_PORT} had been started`);
});
