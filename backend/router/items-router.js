const express = require("express");
const router = express.Router();

const itemControllers = require("../controllers/items-controller");


// create or add by post 
router.route("/items").post(itemControllers.foodItems);


//read with get method
router.route("/itemview").get(itemControllers.foodItemsGet);

// view item id 
router.route("/itemview/:id").get(itemControllers.foodItemsId);

//item update with put method
router.route("/itemupdate/:id").put(itemControllers.foodItemUpdated);
//item delete with delete method
router.route("/itemdelete/:id").delete(itemControllers.foodItemDeleted);



module.exports = router;
