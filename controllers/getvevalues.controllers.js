import mongo from "../db/db.js";
let db = await mongo();

const list = async (req,res) => {
    const token = res.locals.token

    try {
        const user = await db.collection("sessions").findOne({token:token})

        if(!user){
            res.status(401).send("invalid token");
            return
        }
        
        const values = await db.collection("values").find({userId:user.userId}).toArray();

        res.status(200).send(values);
        return
         
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export {list};