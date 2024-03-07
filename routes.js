const express = require('express');
const router = express.Router();
const poolsController = require("./poolsController")

// router.route('/admin/login').post(admin_login)

// router.route('/admin/create').post(create_admin)

// router.route("/pools").get(poolsController.get_all_active_pools)
// router.route("/pools/:id").get(poolsController.get_pools_by_id)
router.route("/pools").get(poolsController.get_all_active_pools)
router.route("/pools/completed").get(poolsController.get_all_completed_pools)
router.route("/pools/upcoming").get(poolsController.get_all_upcoming_pools)
router.route("/pools/:id").get(poolsController.get_pools_by_id)

// router.route("/ico/get-all").get(get_all_ico)

// router.route("/ico/get-by-id/:id").get(get_ico_id)

// router.route("/ico/update/:id").patch(update_ico)

// router.route("/ico/delete/:id").delete(delete_ico)



module.exports = router;