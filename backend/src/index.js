import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json()); // middleware that allows me to extract json data from body in controller
app.use(cookieParser()); // allows me to parse the cookies so I can grab the values out of it
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // allow cookies to be sent with the request
}));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
});