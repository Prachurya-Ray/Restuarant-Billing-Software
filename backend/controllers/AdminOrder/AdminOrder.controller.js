const Order = require("../../models/adminOrders/order.model.js");

// const postAdminOrders = async (req, res) => {
//   try {
//     const { dishes, total } = req.body;
//     const order = new Order({ dishes, total });
//     await order.save();
//     res.status(201).json({ message: "Order placed successfully!" });
//   } catch (error) {
//     res
//       .status(400)
//       .json({ error: "Error placing order", message: error.message });
//   }
// };

const postDataItems = async (req, res) => {
  try {
    console.log(req.body);
    const { dishes, total } = req.body;
    const dataCreated = await Order.create({
      dishes,
      total,
    });
    console.log("data added Succesfully!", dataCreated);
    return res
      .status(200)
      .json({ message: "Data added successfully!", data: dataCreated });
  } catch (error) {
    console.log("Error adding data", error);
    return res.status(500).send({ message: "Error adding data" });
  }
};

// const getAdminOrders = async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ error: "Error fetching orders", message: error.message });
//   }
// };

const dataItemsGet = async (req, res) => {
  try {
    const datas = await Order.find();
    if (!Array.isArray(datas)) {
      throw new Error("Data fetched are not an array");
    }
    console.log("Items fetched", datas);
    return res.status(200).json({
      message: "Data fetched successfully",
      data: datas,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({error: "Internal Server Error"})
  }
};

// const deleteAdminOrder = async (req, res) => {
//   const orderId = req.params.orderId; // Assuming orderId is passed as a route parameter
//   try {
//     const deletedOrder = await Order.findByIdAndDelete(orderId);
//     if (!deletedOrder) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.status(200).json({ message: "Order deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


const dataItemDeleted = async (req, res) => {
  try {
    const datas = await Order.findByIdAndDelete(req.params.id);
    console.log("Item deleted Successfully!", datas);
    return res.status(200).json({
      message: "Item deleted Successfully!",
      data: datas,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).send("Internal Server Error");
  }
};


module.exports = { postDataItems, dataItemsGet, dataItemDeleted };
