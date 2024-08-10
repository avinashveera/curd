const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://avinashveera77:veera@cluster0.ulw19.mongodb.net/',).then(()=>{
    console.log("database connected sucessfully")
}).catch(err=>{
    console.log(err)
});