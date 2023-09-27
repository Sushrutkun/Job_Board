// import asyncHandler from "express-async-handler";
// import job from "../models/jobModels.js"

export const postsignup = (async (req,res)=>{
    // const jobs = await job.find();
    res.status(200).json("postsignup");
});
export const getsignupdata = (async (req,res)=>{
    // const jobs = await job.find();
    res.status(200).json("getsignupdata");
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