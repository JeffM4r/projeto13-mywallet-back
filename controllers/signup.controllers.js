import bcrypt from "bcrypt";
import mongo from "../db/db.js";
let db = await mongo();

const create = async (req,res) => {
    const {name, email, password} = req.body;
    let cryptedPassword = bcrypt.hashSync(password, 10);
    let users;
    
    try{
        users = await db.collection("cadastrados").find().toArray();
        
        const found = users.find(user => user.email === email);

        if(found){
            res.status(409).send("User already registered");
            return
        }

        await db.collection("cadastrados").insertOne({
            name: name,
            email: email,
            password: cryptedPassword
        });

        res.status(201).send("ok");
        return
        
    } catch (error){
        res.status(500).send(error.message);
        return
    }
    

}

export {create};