/*Creating server instance.*/
const express=require('express');
const app=express();

//Load config from env.
require("dotenv").config();
const PORT=process.env.PORT || 5000;

//Middleware to parse json request body.
app.use(express.json());

//Import rotes todo API
const todoRoutes=require("./routes/todo");
//Mount to the todo API route
app.use("/api/v1",todoRoutes);

//Start the server.
app.listen(PORT,()=>{console.log(`Jai shree Ram!\nServer started at port ${PORT}`)});

//connect to the database
const dbconnect=require("./config/database");
dbconnect();

//Default Route
app.get('/',(req,res)=>{
    res.send("<div>Jai Shree Ram!!! Har Har Mahadev...</div>");
})