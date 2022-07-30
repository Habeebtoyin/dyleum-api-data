const { admin_schema_model,
  ico_schema_model
}=require('./model');
const asyncHandler = require("express-async-handler");
//Add Admin
const create_ico = asyncHandler(async (req, res) => {
  try {
    //console.log(req.body)
    const new_ico=await  new ico_schema_model({
     name:req.body.name,
     contacts:req.body.contacts,
     project_link:req.body.project_link,
     project_info:req.body.project_info,
     launch_date:req.body.launch_date,
    })
    new_ico.save()
    res.json({
      message:"New ICO Created SuccessFully",
    })
    
  } catch (error) {
    res.json({message:error})
  }
})





  const get_all_ico = asyncHandler(async (req, res) => {
 
  try {
     const allico= await ico_schema_model.find();
     res.json(allico);

  } catch (error) {
    res.json({message:error})
  }
})
const get_ico_id = asyncHandler(async (req, res) => {
    try {
      const find_specific_ico = await ico_schema_model.findOne({_id:req.params.id})
        //res.json(findSpecificAdmin);
        if(!find_specific_ico){
          return res.json(
            "Data does not Exst"
          )
        }
        if(find_specific_ico){
          return res.json(
            find_specific_ico
          )}

    } catch (error) {
        res.json(
          {
            message:error
          }
        )
    }
})

const update_ico = asyncHandler(async (req, res) => {
    try {
      const specific_product_to_update=await ico_schema_model.updateOne({
        _id:req.params.id
      },
      {
         $set:{
          name:req.body.name,
          contacts:req.body.contacts,
          project_link:req.body.project_link,
          project_info:req.body.project_info,
          launch_date:req.body.launch_date,
          name:req.body.name,
         }
      });
      res.json({
        message:specific_product_to_update,
        report:"ICO data Updated Succefully"
      }
        );
  
      
    } catch (error) {
      
    }
      
  })

const delete_ico = asyncHandler(async (req, res) => {
    try {
      const ico_to_delete= await ico_schema_model.findOneAndRemove({ _id:req.params.id});
      res.json(
      {
            message:"ICO  has been deleted"
        }
      )

    } catch (error) {
      res.json(
        {
          msg:error,
                }
        
      )
    }
})






module.exports = {
  delete_ico,
  update_ico,
  get_ico_id,
  get_all_ico,
  create_ico
  };