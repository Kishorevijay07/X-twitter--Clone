import express from "express";
import dotenv from "dotenv"
import authfunction from './routes/auth.route.js';
import connectdb from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import userfunction from './routes/user.route.js';
import postfunction from './routes/post.route.js';
import notificationfunction from './routes/user.notification.js'
import cloudinary from 'cloudinary';
const app = express()
dotenv.config()
cloudinary.config({
    cloud_name :process.env.cloudinary_name,
    api_key : process.env.cloudinary_API_KEY,
    api_secret : process.env.cloudinary_API_SECRET_KEY
})
const port = process.env.port;

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authfunction)
app.use('/api/users',userfunction)
app.use('/api/posts',postfunction)
app.use('/api/notification',notificationfunction)
app.listen(port,()=>{
    console.log(`Server running successfully in port ${port}`)
    connectdb();
})