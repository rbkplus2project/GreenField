// create user schema
const mongoose=require('mongoose')
let userSchema=mongoose.Schema({
    username:String,
    passoword:String,
    salt:String
})

let User=mongoose.model('User',userSchema)

module.exports=User