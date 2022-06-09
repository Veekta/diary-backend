const mongoose = require("mongoose");
const url = "mongodb://localhost/DiaryData";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("not connected");
  });
