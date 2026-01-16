import mongoose from "mongoose";


const connectDB = async () => { // async insures that one task is finished before the next one starts
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`) // yoinks MONGODB_URI from the env file :D
        console.log(`\n MongoDB is connected
            ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1) // move onto another task
    }
}

export default connectDB;
