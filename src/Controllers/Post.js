import express from 'express'
import User from "../Users.js"
const router = express.Router()

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await User.find();
                
       res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost= async(req,res)=>{
    const post = req.body
    try{
        const newPost = await User(post)
        res.status(201).json({sucess : "Registered Sucessfully done"})
    }catch(err){
        res.status(409).json({message : err.message})
    }
}   