const { admin_schema_model
}=require('./model');

const asyncHandler = require("express-async-handler");


  const admin_login = asyncHandler(async (req, res) => {
  try {
     const gotten_admin_data= await admin_schema_model.find({username:req.body.username});
     //check password is == to saved password
     if(req.body.password===gotten_admin_data[0].password){
        res.json({
          message:"Login SuccessFull",
          // data:gotten_admin_data
        })
     }else{
       res.json({
         message:"invalid username or password",
         data:gotten_admin_data
       })
     }

  } catch (error) {
    res.json({message:error})
  }
})
const create_admin = asyncHandler(async (req, res) => {
  try {
    //search admin collectionf for same usename
    const gotten_admin_data= await admin_schema_model.find({username:req.body.username});
    //if exist return error
    if(gotten_admin_data[0]){
      res.json({
        message:"Username Exists",
      })
   }else{
    const new_admin= new admin_schema_model({
      "username":req.body.username,
      "wallet":req.body.wallet,
      "password":req.body.password
    });
    new_admin.save()
    //check password is == to saved password
    res.json({
      message:"Admin created",
      "data":new_admin,
    })
   }
    //else sign up
     

  } catch (error) {
    res.json({message:error})
  }
})



module.exports = {
  admin_login,
  create_admin
  };