import "dotenv/config";
import connectDB from "../db/index.js";

connectDB();

/*
// ! DB connection and server starts listening
;( async () => {
    try {
        // * connecting to mongoDB
        await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        // * if any unexpected error occurs
        app.on("error", (error) => {
            console.error("ERROR: ", error)
            throw error
        })
        // * finally started the server
        app.listen(process.env.PORT, () => {
            console.log("Server is listening on port: ", process.env.PORT);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/
