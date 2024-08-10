const express=require('express')
const app=express();
const students=require('../model/studentmodel')

exports.create=async(req,res)=>{

    const{name,roll,clas}=req.body;

       const stud=await students.find({name,roll,clas}) 

       if(stud.length<1){

        const student =new students({
            name,
            roll,
            clas
        }).save().then(data=>{
            res.send({
               
                message :"student registered sucessfully"
            })
        })


       }else{
        res.send("student data already exits")
       }




}





exports.update=async(req,res)=>{

    const _id=req.params;
    const{name,roll,clas}=req.body;

    


        if(name){
        
        
            const stud=await students.findByIdAndUpdate(_id,{
                $set:{
                    name
                }
               }).catch(err=>res.send(err))
        }
        
        if(roll){

            const stud=await students.findByIdAndUpdate(_id,{
                $set:{
                    roll
                }
               }).catch(err=>res.send(err))



        }
        if(clas){

            const stud=await students.findByIdAndUpdate(_id,{
                $set:{
                    clas
                }
               }).catch(err=>res.send(err))


        }

        res.send("user updated sucessdully")
             

}



exports.remove=async(req,res)=>{

    const _id=req.params;

       const stud=await students.findByIdAndDelete(_id).then(user=>{
        res.send("user deleted sucessfully")
       }).catch(err=>res.send(err))     


}


exports.allstudents=async(req,res)=>{
    await students.find({}).then(user=>{
        res.send({
            user,
            message:"all student data sent"
        })
       }).catch(err=>res.send(err))     


}