const userRouter=require ('express').Router()
const User = require('./user.js')
const userCtrl=require('./userController.js')

userRouter.route('/signup')
.post((req,res)=>{
 userCtrl.create(req.body,(err,data)=>{
     if(err){
         res.sendStatus(400)
     }else{
         res.json(data)
     }
 })   
//console.log(req.body)
})
