import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectDB = async () => {
    try {
        // * connecting to mongoDB
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(
            `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
        // // * if any unexpected error occurs
        // app.on("error", (error) => {
        //     console.error("ERROR: ", error);
        //     throw error;
        // });
        // // * finally started the server
        // app.listen(process.env.PORT, () => {
        //     console.log("Server is listening on port: ", process.env.PORT);
        // });
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1)
    }
}

export default connectDB;