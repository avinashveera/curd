const mongoose=require('mongoose')


const {Schema}=mongoose

const StudentSchema=new Schema({
    name:String,
    clas:Number,
    roll:Number
})

const student=mongoose.model('students',StudentSchema)

module.exports=student;
