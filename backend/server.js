const mongoose = require("mongoose");

const express = require("express"),
  app = express(),
  PORT = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/authRoute"); //contains register and login endpoints eg: /auth/register, /auth/login

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/auth", authRoute);

//connect to mongodb
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connection to MongoDB established.")
);

app.listen(PORT, () => console.log("Server listening on port " + PORT + "."));
