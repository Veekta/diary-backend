const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");
const port = process.env.PORT || 1242;
const app = express();
const userRoute = require("./router/userRouter");
const diaryRoute = require("./router/diaryRouter");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server Up!...");
});

app.use("/api/diary", userRoute);
app.use("/api/userdiary", diaryRoute);

app.listen(port, () => {
  console.log(`Listening to PORT: ${port}`);
});
