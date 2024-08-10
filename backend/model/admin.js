const mongoose=require('mongoose')


const {Schema}=mongoose

const adminSchema=new Schema({
    email:String,
    password:String
})

const user=mongoose.model('user',adminSchema)
module.exports=user;
