import asyncHandler from "express-async-handler";

export const getjobs = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"GET in this api"});
});
export const getjobsbyid = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`GET by id ${req.params.id} in this api`});
});
export const postjobs = asyncHandler(async (req,res)=>{
    const {job_title,company_commitment,job_type,company_name,company_url,company_joblink,job_description,skills} = req.body;
    if (!job_title || !company_commitment || !job_type) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    res.status(201).json({message:"push in this api",messag:`push ${job_title} in this api`,mesage:`push ${company_commitment} in this api`});
});
export const updatejobs = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update by id ${req.params.id} in this api`});
});
export const deletejobs = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete by id ${req.params.id} in this api`});
});

