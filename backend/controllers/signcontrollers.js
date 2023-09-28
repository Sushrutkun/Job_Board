import asyncHandler from "express-async-handler";
import signup from "../models/signModel.js"

export const postsignup = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const repeatemail=await signup.findOne({ "email": email });
    const repeatusername=await signup.findOne({ "username": username });
    if (repeatemail) {
        res.status(400);
        throw new Error("Change Your Email!");
    }
    else if (repeatusername) {
        res.status(400);
        throw new Error("Change Your username!");
    }
    else {
        const data = await signup.create({
            username,
            email,
            password
        });
        console.log(data);
        res.status(200).json(data);
    }
});
export const getlogindata = asyncHandler(async (req, res) => {
    const {username, password } = req.body;
    const user = await signup.findOne({"username":username,"password":password});
    if(user)
    {
        console.log(user);
        res.status(200).json(user);
    }
    else
    {
        res.status(400);
        throw new Error("Wrong Username or Password");
    }
    
});
// export const getjobsbyid = asyncHandler(async (req,res)=>{
//     const jobs = await job.findById(req.params.id);
//     if(!jobs)
//     {
//         res.status(404);
//         throw new Error ("Not found");
//     }
//     res.status(200).json(jobs);
// });
// export const postjobs = asyncHandler(async (req,res)=>{
//     const {job_title,company_commitment,job_type,company_name,company_url,company_joblink,job_description,skills} = req.body;
//     if (!job_title || !company_commitment || !job_type || !company_name || !company_url || !company_joblink || !job_description || !skills) {
//         res.status(400);
//         throw new Error("All fields are mandatory !");
//     }
//     const jobs =await job.create({
//         job_title,
//         company_commitment,
//         job_type,
//         company_name,
//         company_url,
//         company_joblink,
//         job_description,
//         skills
//     })
//     res.status(201).json(jobs);
// });
// export const updatejobs = asyncHandler(async (req,res)=>{
//     res.status(200).json({message:`Update by id ${req.params.id} in this api`});
// });
// export const deletejobs = asyncHandler(async (req,res)=>{
//     res.status(200).json({message:`delete by id ${req.params.id} in this api`});
// });