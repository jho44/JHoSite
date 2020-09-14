const router = require("express").Router();
const User = require("../models/userModel");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./.env" });
if (dotenv.error) {
  throw dotenv.error;
}

//login
router.get("/login", async (req, res) => {
  let token = null;
  if (
    req.headers.name === process.env.NAME1 &&
    req.headers.password === process.env.PASSWORD1
  ) {
    try {
      token = jwt.sign(process.env.PASSWORD1, process.env.TOKEN_SECRET);
    } catch (err) {
      console.log(err);
    }
  }
  if (
    req.headers.name === process.env.NAME2 &&
    req.headers.password === process.env.PASSWORD2
  ) {
    try {
      token = jwt.sign(process.env.PASSWORD2, process.env.TOKEN_SECRET);
    } catch (err) {
      console.log(err);
    }
  }
  res.send(token);
});

router.post("/login", async (req, res) => {
  //check if user in db
  try {
    console.log("in try");
    const user = await User.find({
      "name": req.body.name,
    });
    console.log("user: ", user);
    if (user.length === 0) {
      return res.status(400).send("Name incorrect.");
    }
    if (user[0].password !== req.body.password) {
      return res.status(600).send("Password incorrect.");
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.send({ user: user._id, token: token });
  } catch (err) {
    res.status(500).send(err);
  }
});

// verify
router.get("/verify", (req, res) => {
  let thingy = true;
  jwt.verify(req.headers.token, process.env.TOKEN_SECRET, function (
    err,
    decoded
  ) {
    if (err) {
      console.log(err);
      thingy = false;
    }
  });
  res.send(thingy);
});

router.post("/test", (req, res) => {
  res.send("uwa");
});

module.exports = router;
