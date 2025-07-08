import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import userRouter from "./routes/userRoute.js";
const app = express();
app.use(express.json());

const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.rv9vrfl.mongodb.net/MernCafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

// mongoose.connect(`mongodb://${dbuser}:${dbpass}@localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });
app.use("/api/users", userRouter);