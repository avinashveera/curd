const express=require('express')
const app=express();
const user=require('../model/admin')


exports.signup= async(req,res)=>{


    const {email,password}=req.body;

    

    try {

       const userData =await user.find({email});

       if(userData.length<1){
        
        const newuser=new user({
            email,
            password
        })

        newuser.save().then(user=>{
            res.send({
               user:user,
               message:"user created sucessfully" 
            })
        }).catch(err=>{
            console.log(err)
        })


       }

       else{

        res.send("user already exist")

       }



        
    } catch (error) {


        console.log(error)
        
    }

    
};


exports.login=async(req,res)=>{

    const {email,password}=req.body;

    try {

       const userData =await user.find({email});

       console.log(userData.length)


             if(userData.length>0){
               
                if(userData[0].password===password){

                    res.send({
                        data:userData,
                        message:"login sucessfully"
                    
    
                    })
                }
                else{
                    res.send("wrong password")
                }

             



             }else{
                res.send("user not exit")
             }



    



        
    } catch (error) {


        console.log(error)
        
    }

    
}
