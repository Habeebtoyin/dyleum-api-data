const { admin_schema_model,
  ico_schema_model
}=require('./model');
const asyncHandler = require("express-async-handler");
//Add Admin
const create_ico = asyncHandler(async (req, res) => {
  try {
    //console.log(req.body)
    const new_starter_pack=await  new starter_pack_model({
     pack_name:req.body.pack_name,
     pack_items:req.body.pack_items,
     price:req.body.price,
     quantity:req.body.quantity,
     images:req.body.images,
    })
    new_starter_pack.save()
    res.json({
      message:"New Starter Pack Created SuccessFully",
    })
    
  } catch (error) {
    res.json({message:error})
  }
})





  const get_all_ico = asyncHandler(async (req, res) => {
 
  try {
     const all_starter_packs= await starter_pack_model.find();
     res.json(all_starter_packs);

  } catch (error) {
    res.json({message:error})
  }
})
const get_ico_id = asyncHandler(async (req, res) => {
    try {
      const specific_starter_pack = await starter_pack_model.findOne({_id:req.params.id})
        //res.json(findSpecificAdmin);
        if(!specific_starter_pack){
          return res.json(
            "Data does not Exst"
          )
        }
        if(specific_starter_pack){
          return res.json(
            findSpecificProduct
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
      const specific_product_to_update=await starter_pack_model.updateOne({
        _id:req.params.id
      },
      {
         $set:{
            pack_name:req.body.pack_name,
            pack_items:req.body.pack_items,
            price:req.body.price,
            quantity:req.body.quantity,
            images:req.body.images,
         }
      });
      res.json({
        message:specific_product_to_update,
        report:"Starter Pack Updated Succefully"
      }
        );
  
      
    } catch (error) {
      
    }
      
  })

const delete_ico = asyncHandler(async (req, res) => {
    try {
      const starter_pack_delete= await starter_pack_model.findOneAndRemove({ _id:req.params.id});
      res.json(
      {
            message:"Product has been deleted"
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
    create_new_starter_pack,
    delete_starter_pack,
    update_starter_pack,
    get_starter_pack_id,
    get_all_starter_packs
  };