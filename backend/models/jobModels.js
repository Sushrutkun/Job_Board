import mongoose from "mongoose"

const jobSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId , ref:'signup',
        required: [true, "Please Add user"]
    },
    job_title: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    company_commitment: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    job_type: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    company_name: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    company_url: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    company_joblink: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    job_description: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    skills: {
        type: [String],
        required: [true, "Please Add Job Title"]
    },

},
    {
        timestamps: true,
    });

const schema = mongoose.model("job", jobSchema);

export default schema;