const express = require("express");
const app = express();
const port = 3000;
const Validator = require("validatorjs");

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hello world!"
  });
});

app.post("/", (req, res, next) => {
  var data = {
    name: "john",
    email: "john@gmail.com"
  };

  var rules = {
    name: "required|min:3",
    email: "required|email"
  };

  const isValid = new Validator(data, rules);

  if (isValid.fails()) {
    res.status(442).json({
      errors: {
        name: "name is required",
        email: "email is required"
      }
    });
  } else {
    res.status(200).json({
      message: "user has been created"
    });
  }
});

app.listen(port, console.log("Server running on port : " + port));
