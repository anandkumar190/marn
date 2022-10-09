import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

const PORT=4000;
const app =express();
app.use(cors);


//mongoose.connect("mongodb+srv://anand:12341234@cluster0.eiing3u.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("MongoDb connection is Successfully ")).catch((err)=>console.error(err));
await mongoose.connect("mongodb+srv://anand:12341234@cluster0.eiing3u.mongodb.net/?retryWrites=true&w=majority")
      console.log("MongoDb connection is Successfully ");
      
app.get("/",(req,res)=>{
 res.send("hello anand ");
});

app.listen(PORT,()=>{
console.log("server is running as http://localhost:4000");
});