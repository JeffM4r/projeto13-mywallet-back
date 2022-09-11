import express from "express";
import cors from "cors";
import signUpRouter from "./routers/signup.routers.js"
import loginRouter from "./routers/login.routers.js"

const server = express();

server.use(cors());
server.use(express.json());

server.use(signUpRouter);
server.use(loginRouter);

server.listen(5000, () => console.log("Server running in port: 5000"));