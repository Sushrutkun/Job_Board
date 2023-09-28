import saved from "../models/savedModel.js"
import asyncHandler from "express-async-handler";

export const addToWishlist = asyncHandler(async (req, res) => {
    const {title, url, company, dateAdded, tags } = req.body;
    const icon = true;
    if (!title || !url || !company || !dateAdded) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const revWishlist = await saved.findOne({ "title": title , "company": company ,"dateAdded": dateAdded });

    if (revWishlist) {
        try {
            const savedJobs = await saved.findByIdAndUpdate(revWishlist._id, {
                icon: !revWishlist.icon,
            })
            res.json(savedJobs);
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        try{
            const savedJobs = await saved.create({
                title,
                url,
                company,
                dateAdded,
                tags,
                icon
            })
            res.json(savedJobs);
            console.log(savedJobs);
        }
        catch(err){
            console.log(err);
        }
    }
});
export const getWishlist = asyncHandler(async (req, res) => 
{
    try{
        const savedJobs = await saved.find();
        res.status(200).json(savedJobs);
    }
    catch(err){
        console.log(err);
    }
});