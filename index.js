import express from "express";
import cors from "cors";
import signUpRouter from "./routers/signup.routers.js"
import loginRouter from "./routers/login.routers.js"
import negativeValueRouter from "./routers/negativevalue.routers.js"
import positiveValueRouter from "./routers/positivevalue.routers.js"
import getValuesRouter from "./routers/getvalues.routers.js"

import mongo from './db/db.js';
let db = await mongo();

const server = express();

server.use(cors());
server.use(express.json());

server.use(signUpRouter);
server.use(loginRouter);
server.use(negativeValueRouter);
server.use(positiveValueRouter);
server.use(getValuesRouter);

setInterval(async () => {

    try {
        const sessions = await db.collection("sessions").find().toArray()

        sessions.forEach(async (session) => {
            if (Math.round(session.time / 1000 + 1500) < Math.round(Date.now() / 1000.0)){
                db.collection("sessions").deleteOne(session)
            }
        
        })

    } catch (error) {
        res.status(500).send(error.message);
    }    
    
}, 15000)

server.listen(5000, () => console.log("Server running in port: 5000"));