const express=require("express");
const cors=require("cors");
const {connectionMongoDb} = require("./connection/connect");
const app=express();
const newbookroutes=require("./routes/bookroutes");

app.use(cors());

connectionMongoDb("mongodb://localhost:27017/rahuldata1").then(()=>{
    console.log("mongo db connected");
});
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api",newbookroutes);



app.listen(1000,()=>{
    console.log("server is started");
})
