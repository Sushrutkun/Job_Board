import mongoose from "mongoose";

const appliedSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId , ref:'signup',
        // required: [true, "Please Add user"]
    },
    title: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    url: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    company: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    dateAdded: {
        type: String,
        required: [true, "Please Add Job Title"]
    },
    tags: {
        type: [{"text":String}],
        required: [true, "Please Add Job Title"]
    },
    icon: {
        type: Boolean,
        default: false
    }
},
    { 
        timestamps: true,
    });

const schema = mongoose.model("Applied", appliedSchema);

export default schema;