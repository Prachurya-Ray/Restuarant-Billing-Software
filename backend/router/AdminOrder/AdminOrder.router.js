// const express = require('express');
// const router = express.Router();
// const {
//   postDataItems,
//   dataItemDeleted,
//   dataItemsGet,
// } = require("../../controllers/AdminOrder/AdminOrder.controller.js");

// router.post("/orders", postDataItems);
// router.get("/orders", dataItemsGet);
// router.delete("/orders/:orderId", dataItemDeleted);

// module.exports = router;

const express = require("express");
const router = express.Router();

const DataItemsController = require("../../controllers/AdminOrder/AdminOrder.controller.js");

router.route("/orders").post(DataItemsController.postDataItems);
router.route("/orders").get(DataItemsController.dataItemsGet);
router.route("/orders/:orderId").delete(DataItemsController.dataItemDeleted);
module.exports = router;
