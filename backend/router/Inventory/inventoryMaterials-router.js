// const express = require("express");
// const router = express.Router();

// const inventoryItemsControllers = require("../../controllers/Inventory/inventoryMaterials-controllers");

// // create
// router
//   .route("/inventoryitems")
//   .post(inventoryItemsControllers.inventoryItemsAdd);

// //get
// router
//   .route("/inventoryitemsview")
//   .get(inventoryItemsControllers.inventoryItemsGet);

// // get by id
// router
//   .route("/inventoryitemsview/:id")
//   .put(inventoryItemsControllers.inventoryItemsId);

// // update with put method
// router
//   .route("/inventoryitemsupdate/:id")
//   .put(inventoryItemsControllers.inventoryItemsUpdated);
// // delete
// router
//   .route("/inventoryitemdelete/:id")
//   .delete(inventoryItemsControllers.inventoryItemDeleted);



const express = require("express");
const router = express.Router();

const inventoryItemsControllers = require("../../controllers/Inventory/inventoryMaterials-controllers");

// create
// router.post("/inventoryitems", inventoryItemsControllers.inventoryItemsAdd);

router
  .route("/inventoryitems")
  .post(inventoryItemsControllers.inventoryItemsAdd);

// get all
// router.get("/inventoryitemsview", inventoryItemsControllers.inventoryItemsGet);

router
  .route("/inventoryitemsview")
  .get(inventoryItemsControllers.inventoryItemsGet);

// get by id
// router.get("/inventoryitemsview/:id", inventoryItemsControllers.inventoryItemsId);

router
  .route("/inventoryitemsview/:id")
  .put(inventoryItemsControllers.inventoryItemsId);


// update by id
// router.put("/inventoryitemsupdate/:id", inventoryItemsControllers.inventoryItemsUpdated);

router
  .route("/inventoryitemsupdate/:id")
  .put(inventoryItemsControllers.inventoryItemsUpdated);

// delete by id
// router.delete("/inventoryitemdelete/:id", inventoryItemsControllers.inventoryItemDeleted);


router
  .route("/inventoryitemdelete/:id")
  .delete(inventoryItemsControllers.inventoryItemDeleted);



module.exports = router;
