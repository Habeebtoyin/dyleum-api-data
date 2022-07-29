const express = require('express');
const router=express.Router();
const {
    delete_ico,
    update_ico,
    get_ico_id,
    get_all_ico,
    create_ico
}=require("./icoController");
const {
    admin_login, create_admin
  }=require("./adminController");

router.route('/admin/login').post(admin_login)

router.route('/admin/create').post(create_admin)

router.route("/ico/create").post(create_ico)

router.route("/ico/get-all").get(get_all_ico)

router.route("/ico/get-by-id:id").get(get_ico_id)

router.route("/ico/update/:id").patch(update_ico)

router.route("/ico/delete/:id").patch(delete_ico)




module.exports=router;