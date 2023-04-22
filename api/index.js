import express from "express";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express()

app.use(express.json())
app.use(cookieParser())

const upload = multer({dest:'uploads/'})

app.post('/api/uploads', upload.single('file'), function(req,res,){
    return res.status(200).json("image has been uploaded")
})


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8080, ()=>{
    console.log("connected")
})
