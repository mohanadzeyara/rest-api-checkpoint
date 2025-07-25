const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
   email:{type:String,require:true},
   Name:{type:String},
   Password:{type:String,require:true},
   Role:{type:String,enum:['client','company','admin','support']}
},
{ timestamps: true })
const User=mongoose.model('user',userSchema)
module.exports=User