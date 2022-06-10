require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("not connected");
  });
