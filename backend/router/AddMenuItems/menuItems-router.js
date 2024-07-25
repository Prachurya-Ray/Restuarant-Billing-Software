const express = require("express");
const router = express.Router();

const menuItemsControllers = require("../../controllers/AddMenuItems/menuItems-controllers");

// create or add by post
router.route("/menuitems").post(menuItemsControllers.menuItemsAdd);

//read with get method
router.route("/menuview").get(menuItemsControllers.menuItemsGet);

// view item id
router.route("/menuview/:id").get(menuItemsControllers.menuItemsId);

//item update with put method
router.route("/menuupdate/:id").put(menuItemsControllers.menuItemsUpdated);
//item delete with delete method
router.route("/menudelete/:id").delete(menuItemsControllers.menuItemDeleted);

module.exports = router;
