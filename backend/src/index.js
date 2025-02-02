import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // middleware that allows me to extract json data from body in controller
app.use(cookieParser()); // allows me to parse the cookies so I can grab the values out of it

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
});