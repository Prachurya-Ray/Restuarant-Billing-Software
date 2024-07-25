const Items = require("../models/items-model");
const { format } = require("date-fns");
const currentDate = new Date();
const today = format(currentDate, "yyyy-MM-dd");

// Post (Create or Add)
const foodItems = async (req, res) => {
  try {
    console.log(req.body);
    const { item_name, item_description, item_price } = req.body;
    const itemCreated = await Items.create({
      item_name,
      item_description,
      item_price,
    });
    console.log("Items added Successfully!", itemCreated);
    return res.status(200).json({
      message: "Items added Successfully!",
      item: itemCreated,
    });
  } catch (error) {
    console.error("Error adding item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Get All Items
const foodItemsGet = async (req, res) => {
  try {
    const items = await Items.find();
    if (!Array.isArray(items)) {
      throw new Error('Items fetched are not an array');
    }
    console.log("Items fetched Successfully!", items);
    return res.status(200).json({
      message: "Items fetched Successfully!",
      item: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Item by ID
const foodItemsId = async (req, res) => {
  try {
    const items = await Items.findById(req.params.id);
    console.log("Item fetched Successfully by ID!", items);
    return res.status(200).json({
      message: "Item fetched Successfully by ID!",
      item: items,
    });
  } catch (error) {
    console.error("Error fetching item by ID:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Update Item
const foodItemUpdated = async (req, res) => {
  try {
    const items = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("Item updated Successfully!", items);
    return res.status(200).json({
      message: "Item updated Successfully!",
      item: items,
    });
  } catch (error) {
    console.error("Error updating item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Delete Item
const foodItemDeleted = async (req, res) => {
  try {
    const items = await Items.findByIdAndDelete(req.params.id);
    console.log("Item deleted Successfully!", items);
    return res.status(200).json({
      message: "Item deleted Successfully!",
      item: items,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  foodItems,
  foodItemsGet,
  foodItemsId,
  foodItemUpdated,
  foodItemDeleted,
};
