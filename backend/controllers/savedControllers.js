import saved from "../models/savedModel.js"
import sign from "../models/signModel.js"
import asyncHandler from "express-async-handler";

export const addToWishlist = asyncHandler(async (req, res) => {
    const {username,title, url, company, dateAdded, tags } = req.body;
    const icon = true;
    if (!title || !url || !company || !dateAdded) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userFound = await sign.findOne({"username":username});
    const revWishlist = await saved.findOne({ "user":userFound._id,"title": title , "company": company ,"dateAdded": dateAdded });
    // console.log(userFound);
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
                user:userFound._id,
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
    const {username} = req.query;
    // console.log(req.query);
    // console.log(username);
    const findUser=await sign.findOne({"username":username});
    // console.log(findUser);

    try{
        const savedJobs = await saved.find({"user":findUser._id});
        res.status(200).json(savedJobs);
    }
    catch(err){
        console.log(err);
    }
});
export const deleteWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    try {
        const savedJobs = await saved.findByIdAndDelete(_id);
        res.json(savedJobs);
    }
    catch (err) {
        console.log(err);
    }
});