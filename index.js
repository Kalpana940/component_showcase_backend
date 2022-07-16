const express = require("express");
const port = 5000;
const app = express();

// importing the userRouter
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const cors = require("cors");

// middleware to convert client json data to
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/add", (req, res) => {
  res.send("request at index");
});

// route or endpoint
app.get("/", (req, res) => {
  res.send("response from express home");
});

app.get("/home", (req, res) => {
  res.send("another route for home");
});

// starting the server
app.listen(port, () => {
  console.log("server started");
});