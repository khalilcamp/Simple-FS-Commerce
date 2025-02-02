// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware serve para processar o corpo. O json serve para processar json
app.use("/api/products", productRoute);
// get env
// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port "+ PORT + " , hello world!");
});

