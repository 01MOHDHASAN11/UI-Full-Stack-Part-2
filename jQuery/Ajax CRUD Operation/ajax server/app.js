require("dotenv").config()
const express = require('express')
const app = express()
const cors=require("cors")
const mongoose = require('mongoose')
const authRoutes=require("./routes/AuthRoutes")


app.use(cors())
app.use(express.json())
app.use("/auth",authRoutes)

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to MongoDB")).catch(()=>console.log("Failed to connect"))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
