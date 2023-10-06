import mongoose from "mongoose";

const savedSchema = mongoose.Schema({
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
        required: [true, "Please Add url"]
    },
    company: {
        type: String,
        required: [true, "Please Add company"]
    },
    dateAdded: {
        type: String,
        required: [true, "Please Add dateAdded"]
    },
    tags: {
        type: [{"text":String}],
        required: [true, "Please Add tags"]
    },
    icon: {
        type: Boolean,
        default: false
    }
},
    { 
        timestamps: true,
    });

const schema = mongoose.model("Saved", savedSchema);

export default schema;