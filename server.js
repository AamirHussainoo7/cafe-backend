import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import userRouter from "./routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(cors())


const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.rv9vrfl.mongodb.net/MernCafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});
app.use("/api/users", userRouter);
// mongoose.connect(`mongodb://localhost:27017/MernCafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });