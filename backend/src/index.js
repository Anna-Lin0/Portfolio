import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});
import connectDB from "./config/database.js";
import app from "./apps.js";


const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("ERORR:", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: 
                ${process.env.PORT}`);
            
        }); // uses port 4000, if fail use 8000
    } catch (error) {
        console.log("MongoDB connection failed", err);
        
    }
}

startServer();