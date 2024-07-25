const inventoryItems = require("../../models/Inventory/inventoryMaterials-model");
const { format } = require("date-fns");
const currentDate = new Date();
const today = format(currentDate, "yyyy-MM-dd");

//post
const inventoryItemsAdd = async (req, res) => {
  try {
    console.log(req.body);
    const {
      inventoryItemName,
      inventoryItemDescription,
      inventoryItemQty,
      inventoryItemCode,
      inventoryItemUnit,
      inventoryItemPrice,
    } = req.body;

    const inventoryItemCreated = await inventoryItems.create({
      inventoryItemName,
      inventoryItemDescription,
      inventoryItemQty,
      inventoryItemCode,
      inventoryItemUnit,
      inventoryItemPrice,
    });

    console.log("Inventory Items added successfully!", inventoryItemCreated);
    return res.status(200).json({
      massage: "Inventory Items created successfully",
      inventory: inventoryItemCreated,
    });
  } catch (error) {
    console.error("Error adding inventory item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// get
const inventoryItemsGet = async (req, res) => {
  try {
    const inventories = await inventoryItems.find();
    if (!Array.isArray(inventories)) {
      throw new Error("Inventory Items fached are not an array");
    }
    console.log("Inventory Items fetched Successfully!", inventories);
    return res.status(200).json({
      massage: "Inventory Items fetched Successfully",
      inventory: inventories,
    });
  } catch (error) {
    console.error("Error fetching inventory items:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get through id
const inventoryItemsId = async (req, res) => {
  try {
    const inventories = await inventoryItems.findById(req.params.id);
    console.log("Inventory Item fetched Successfully by ID!", inventories);
    return res.status(200).json({
      message: "Inventory Item fetched Successfully by ID!",
      inventory: inventories,
    });
  } catch (error) {
    console.error("Error fetching menu item by ID:", error);
    return res.status(500).send("Internal Server Error");
  }
};

//Update
const inventoryItemsUpdated = async (req, res) => {
  try {
    const inventories = await inventoryItems.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log("Inventory Item Updated Successfully!", inventories);
    return res.status(200).json({
      massage: "Inventory Item updated Successfully!",
      inventory: inventories,
    });
  } catch (error) {
    console.error("Error updating inventory item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

//Delete
const inventoryItemDeleted = async (req, res) => {
  try {
    const inventories = await inventoryItems.findByIdAndDelete(req.params.id);
    console.log("Inventory Item Deleted Successfully!", inventories);
    return res.status(200).json({
      massage: "Inventory Item Deleted Successfully!",
      inventory: inventories,
    });
  } catch (error) {
    console.error("Error deleting inventory item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  inventoryItemsAdd,
  inventoryItemsGet,
  inventoryItemsId,
  inventoryItemsUpdated,
  inventoryItemDeleted,
};



// const inventoryItems = require("../../models/Inventory/inventoryMaterials-model");
// const { format } = require("date-fns");
// const currentDate = new Date();
// const today = format(currentDate, "yyyy-MM-dd");

// // Post
// const inventoryItemsAdd = async (req, res) => {
//   try {
//     console.log(req.body);
//     const {
//       inventoryItemName,
//       inventoryItemDescription,
//       inventoryItemQty,
//       inventoryItemCode,
//       inventoryItemUnit,
//       inventoryItemPrice,
//     } = req.body;

//     const inventoryItemCreated = await inventoryItems.create({
//       inventoryItemName,
//       inventoryItemDescription,
//       inventoryItemQty,
//       inventoryItemCode,
//       inventoryItemUnit,
//       inventoryItemPrice,
//     });

//     console.log('Inventory Items added successfully!', inventoryItemCreated);
//     return res.status(200).json({
//       message: 'Inventory Items created successfully',
//       inventory: inventoryItemCreated,
//     });
//   } catch (error) {
//     console.error('Error adding inventory item:', error);
//     return res.status(500).send('Internal Server Error');
//   }
// };

// // Get
// const inventoryItemsGet = async (req, res) => {
//   try {
//     const inventories = await inventoryItems.find();
//     if (!Array.isArray(inventories)) {
//       throw new Error('Inventory Items fetched are not an array');
//     }
//     console.log('Inventory Items fetched successfully!', inventories);
//     return res.status(200).json({
//       message: 'Inventory Items fetched successfully',
//       inventory: inventories,
//     });
//   } catch (error) {
//     console.error('Error fetching inventory items:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Get by ID
// const inventoryItemsId = async (req, res) => {
//   try {
//     const inventories = await inventoryItems.findById(req.params.id);
//     console.log('Inventory Item fetched successfully by ID!', inventories);
//     return res.status(200).json({
//       message: 'Inventory Item fetched successfully by ID!',
//       inventory: inventories,
//     });
//   } catch (error) {
//     console.error('Error fetching inventory item by ID:', error);
//     return res.status(500).send('Internal Server Error');
//   }
// };

// // Update
// const inventoryItemsUpdated = async (req, res) => {
//   try {
//     const inventories = await inventoryItems.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     console.log('Inventory Item updated successfully!', inventories);
//     return res.status(200).json({
//       message: 'Inventory Item updated successfully!',
//       inventory: inventories,
//     });
//   } catch (error) {
//     console.error('Error updating inventory item:', error);
//     return res.status(500).send('Internal Server Error');
//   }
// };

// // Delete
// const inventoryItemDeleted = async (req, res) => {
//   try {
//     const inventories = await inventoryItems.findByIdAndDelete(req.params.id);
//     console.log('Inventory Item deleted successfully!', inventories);
//     return res.status(200).json({
//       message: 'Inventory Item deleted successfully!',
//       inventory: inventories,
//     });
//   } catch (error) {
//     console.error('Error deleting inventory item:', error);
//     return res.status(500).send('Internal Server Error');
//   }
// };

// module.exports = {
//   inventoryItemsAdd,
//   inventoryItemsGet,
//   inventoryItemsId,
//   inventoryItemsUpdated,
//   inventoryItemDeleted,
// };
