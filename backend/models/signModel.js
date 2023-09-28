import mongoose from "mongoose";
const signupSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Add Name"]
    },
    email: {
        type: String,
        required: [true, "Please Add Email"]
    },
    password: {
        type: String,
        required: [true, "Please Add Password"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    });
const schema = mongoose.model("signup", signupSchema);
export default schema;