import express from "express";
import bcrypt from "bcrypt";
import pool from "../database/database.js";

const router = express.Router();

router.post("/signup", async (req,res) =>{
    const {username, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    await pool.query(
        "INSERT INTO users (username, password_hash) VALUES ($1, $2)",
        [username, passwordHash]
    );


    res.json({message: "User created!"})
});




export default router;