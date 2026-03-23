import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types

const carSchema = new mongoose.Schema({
    owner:{type:ObjectId, ref: 'User'},
    brand:{type:String, required:true}

})