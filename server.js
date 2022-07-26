require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./routers/index");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use("/api", router);

// MIDDLEWARE FOR OCCURED ERRORS
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose
      .connect(DB_URL)
      .then(() => console.log("Connected to Mongo DB"))
      .catch((e) => console.log(e));

    app.listen(PORT, () => {
      console.log(`Server has started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
