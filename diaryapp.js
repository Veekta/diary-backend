const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");
const PORT = process.env.PORT;
const app = express();
const userRoute = require("./router/userRouter");
const diaryRoute = require("./router/diaryRouter");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/diary", userRoute);
app.use("/api/userdiary", diaryRoute);

app.get("/", (req, res) => {
  res.status(200).send("Server Up!...");
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
