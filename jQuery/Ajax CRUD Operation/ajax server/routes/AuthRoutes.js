const UserSchema=require("../models/userModel")
const bcrypt=require("bcryptjs")
const express=require("express")
const cors=require("cors")
const router=express.Router()

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: ['Content-Type', 'Authorization']
}

router.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password){
            return res.status(400).json({message:"All field(name,email and password) are required"})
        }
        const existingUser = await UserSchema.findOne({email})
        if(existingUser){
            return res.status(400).send({message:"User already exists"})
        }
        
        else{
            const saltAsync=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,saltAsync)
            const newUser=new UserSchema({name,email,password:hashedPassword})
            await newUser.save()
            res.status(201).send({message:"User registered successfully"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})


router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({message:"Both fields are required"})
        }
        const registeredUser=await UserSchema.findOne({email})
        console.log(registeredUser,"registeredUser")
        if(!registeredUser){
            console.log("not registeredUser")
            res.status(404).json({message:"User not found"})
        }
        const confirmPassword=await bcrypt.compare(password,registeredUser.password)
        if(!confirmPassword){
            return res.status(401).json({message:"Invalid credentials"})
        }
        res.status(200).json({message:"Login successful"})
    } catch (error) {
        console.log("Internal server error")
        res.status(500).json({message:"Internal server error",error:error.message})
    }
})

router.put('/user-update',cors(corsOptions),async(req,res)=>{
    console.log("Hello")
    try {
        const {email,name}=req.body
        console.log("email: ",email)
        console.log("name: ",name)
        console.log("Hasan")
        if(!name||!email){
            return res.status(400).json({message:"Email and name are required"})
        }
        const searchUser=await UserSchema.findOneAndUpdate({email},{name:name},{new:true})
        if(!searchUser){
            console.log("User not found")
            return res.status(404).json({message:"User not found"})
        }
        console.log("User updated successfully")
        res.status(200).json({message:"UserName updated successfully"})

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message })
    }
})


module.exports=router