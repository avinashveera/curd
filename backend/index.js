const express=require('express');
const PORT=4000;
const db=require('./db')
const {login,signup}=require('./controller/auth')
const {create,update,remove,allstudents}=require('./controller/Student')
const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))



app.get('/',(req,res)=>{
res.send("hello nodejs")
})

app.get('/student',allstudents)
app.post('/signup',signup)
app.post('/login',login)
app.post('/create',create)
app.put('/update/:_id',update)
app.delete('/delete/:_id',remove)


app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`)
})



