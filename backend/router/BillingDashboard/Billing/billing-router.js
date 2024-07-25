const express = require("express");
const router = express.Router();

const billingControllers = require("../../../controllers/BillingDashboard/Billing/billing-controller");


// create or add by post 
router.route("/billings").post(billingControllers.billingData);


//read with get method
router.route("/billingview").get(billingControllers.billingDataGet);

module.exports = router;