const express = require("express");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET); // DEBUG

const connectDB=require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");


const app=express();
app.use(express.json());
app.use(cors());

// console.log(process.env.PORT);

const PORT=process.env.PORT || 3000;


// Lets connect to the mongo db database
connectDB();
app.get("/",(req,res)=>{
    res.send("Hello,World!");
});


// Adding all API routes here
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
});

