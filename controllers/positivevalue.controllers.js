import dayjs from "dayjs";

import mongo from "../db/db.js";
let db = await mongo();

const create = async (req,res) => {
    const { description, value } = req.body;
    const authorization = req.headers.authorization
    const token = authorization?.replace("Bearer ", "")

    try {
        const user = await db.collection("sessions").findOne({token:token})
        
        const itemControl = {
            userId: user.userId,
            description: description,
            value: value,
            type: "positive",
            date: dayjs().format("DD/MM/YYYY")
        };

        await db.collection("values").insertOne(itemControl)

        res.status(200).send("value posted");
        return
         
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export {create};