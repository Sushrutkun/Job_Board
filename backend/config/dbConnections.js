import mongoose from 'mongoose'

const dbconnect = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected sucessfully..",db.connection.host,db.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default dbconnect;