const express=require("express");
const mongoose=require("mongoose");
const bookschema=new mongoose.Schema({
   booksname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    auther:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
    prise:{
        type:Number,
        required:true,
    },
    
})
module.exports = new mongoose.model("books",bookschema);
