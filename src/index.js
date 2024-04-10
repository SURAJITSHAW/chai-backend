import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// ! Since this is a ASYNC method, it'll return a promise.
connectDB()
    .then( () => {
        // * if any unexpected error occurs
        app.on("error", (error) => {
            console.error("ERROR: ", error);
            throw error;
        });
        // * started the server after successfully connecting to DB
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is listening on port: ", process.env.PORT);
        });
    }) // TODO: if the promise get resolved sucessfully
    .catch((err) => {
        console.log("MongoDB connection failed !! ", err);
    }); // TODO: otherwise handle the error




























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
