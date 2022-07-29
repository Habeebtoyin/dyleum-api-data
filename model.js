const mongoose=require("mongoose");

const admin_schema=mongoose.Schema({
  username:{
    required:true,
    type:String
  },
  wallet:{
    required:true,
    type:String
  },
  password:{
    required:true,
    type:String
  },
date:{
  type:Date,
  default:Date.now
} 
})

const ico_schema=mongoose.Schema({
    name:{
      required:true,
      type:String
    },
    contacts:{
      required:true,
      type:String
    },
    project_link:{
      required:true,
      type:String
    },
    project_info:{
        required:true,
        type:String
      },
      launch_date:{
        required:true,
        type:String
      },
  date:{
    type:Date,
    default:Date.now
  } 
  })

  admin_schema_model=mongoose.model('admin_collection',admin_schema);
  ico_schema_model=mongoose.model('ico_collection',ico_schema);


  module.exports={
      admin_schema_model,
      ico_schema_model
  }
