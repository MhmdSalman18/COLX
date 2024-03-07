const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("connected to the database")
})
.catch(()=>{
    console.log("failed to connnect")

})

//////////////////schema/////////////////////
const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('collection1',LoginSchema)
module.exports=collection
//hello