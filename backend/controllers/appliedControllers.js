import applied from "../models/appliedModels.js"
import sign from "../models/signModel.js"
import asyncHandler from "express-async-handler";

export const addToApplied = asyncHandler(async (req, res) => {
    const {username,title, url, company, dateAdded, tags } = req.body;
    const icon = true;
    if (!title || !url || !company || !dateAdded) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userFound = await sign.findOne({"username":username});
    const reApplied = await applied.findOne({ "user":userFound._id,"title": title , "company": company ,"dateAdded": dateAdded });
    if(!reApplied) {
        try{
            const appliedJobs = await applied.create({
                user:userFound._id,
                title,
                url,
                company,
                dateAdded,
                tags,
                icon
            })
            res.json(appliedJobs);
            console.log(appliedJobs);
        }
        catch(err){
            console.log(err);
        }
    }
    else
    {
        res.status(400);
        throw new Error("Same Entry ");
    }
});
export const getApplied = asyncHandler(async (req, res) => 
{
    const {username} = req.query;
    // console.log(req.query);
    // console.log(username);
    const findUser=await sign.findOne({"username":username});
    try{
        const appliedJobs = await applied.find({"user":findUser._id});
        res.status(200).json(appliedJobs);
    }
    catch(err){
        console.log(err);
    }
});
export const deleteApplied = asyncHandler(async (req, res) => 
{
    try{
        const {_id}=req.body;
        const appliedJobs = await applied.findByIdAndDelete(_id);
        if(appliedJobs)
        {
            res.status(200).json(appliedJobs);
            console.log(appliedJobs);
        }
    }
    catch(err){
        console.log(err);
    }
});