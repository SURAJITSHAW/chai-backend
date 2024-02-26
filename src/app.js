import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// TODO: Third-party middleware configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

// TODO: Built-in middleware configuration
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


export { app }