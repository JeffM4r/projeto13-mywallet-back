import dayjs from "dayjs";

import mongo from "../db/db.js";
let db = await mongo();

const create = async (req,res) => {
    const { description, value } = req.body;

    try {
        const control = {
            description,
            value,
            date: dayjs().format("DD/MM/YYYY")
        };

         
    } catch (error) {
        res.status(500).send(error.message);
    }
};