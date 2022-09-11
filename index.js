import express from "express";
import cors from "cors";
import signUpRouter from "./routers/signup.routers.js"
import loginRouter from "./routers/login.routers.js"
import negativeValueRouter from "./routers/negativevalue.routers.js"
import positiveValueRouter from "./routers/positivevalue.routers.js"
import getValuesRouter from "./routers/getvalues.routers.js"

const server = express();

server.use(cors());
server.use(express.json());

server.use(signUpRouter);
server.use(loginRouter);
server.use(negativeValueRouter);
server.use(positiveValueRouter);
server.use(getValuesRouter);



server.listen(5000, () => console.log("Server running in port: 5000"));