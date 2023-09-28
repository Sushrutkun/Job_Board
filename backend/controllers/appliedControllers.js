import applied from "../models/appliedModels.js"
import asyncHandler from "express-async-handler";

export const addToApplied = asyncHandler(async (req, res) => {
    const {title, url, company, dateAdded, tags } = req.body;
    const icon = true;
    if (!title || !url || !company || !dateAdded) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const reApplied = await applied.findOne({ "title": title , "company": company ,"dateAdded": dateAdded });
    if(!reApplied) {
        try{
            const appliedJobs = await applied.create({
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
    try{
        const appliedJobs = await applied.find();
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