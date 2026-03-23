import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String,reqired:true},
    email:{type:String,reqired:true,unique:true},
    password:{type:String,reqired:true},
    role:{type:String, enum:["owner","user"], default:'user'},
    name:{type:String,default:''},
},{timestamps:true})

const user =mongoose.model('User',userSchema)

export default userSchema;