import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{type:String, required:true},
    surname:{type:String,required:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})
export default mongoose.model(`User`, User)

