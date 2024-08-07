const menuItems = require("../../models/AddMenuItems/menuItems-model");
const { format } = require("date-fns");
const currentDate = new Date();
const today = format(currentDate, "yyyy-MM-dd");

// Post (Create or Add)
const menuItemsAdd = async (req, res) => {
  try {
    console.log(req.body);
    const {
      menuItemName,
      menuItemDescription,
      menuItemPrices,
      menuItemDiscount,
      menuItemGst,
      // menuItemFullPrice,
      // menuItemHalfPrice,
    } = req.body;
    const menuItemCreated = await menuItems.create({
      menuItemName,
      menuItemDescription,
      menuItemPrices,
      menuItemDiscount,
      menuItemGst,
      // menuItemFullPrice,
      // menuItemHalfPrice,
    });
    console.log("Menu Items added Successfully!", menuItemCreated);
    return res.status(200).json({
      message: "Menu Items added Successfully!",
      menu: menuItemCreated,
    });
  } catch (error) {
    console.error("Error adding Menu items:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Get All Items
const menuItemsGet = async (req, res) => {
  try {
    const menus = await menuItems.find();
    if (!Array.isArray(menus)) {
      throw new Error("Menu Items fetched are not an array");
    }
    console.log("Menu Items fetched Successfully!", menus);
    return res.status(200).json({
      message: "Menu Items fetched Successfully!",
      menu: menus,
    });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Item by ID
const menuItemsId = async (req, res) => {
  try {
    const menus = await menuItems.findById(req.params.id);
    console.log("Menu Item fetched Successfully by ID!", menus);
    return res.status(200).json({
      message: "Menu Item fetched Successfully by ID!",
      menu: menus,
    });
  } catch (error) {
    console.error("Error fetching menu item by ID:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Update Item
const menuItemsUpdated = async (req, res) => {
  try {
    const menus = await menuItems.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("Menu Item updated Successfully!", menus);
    return res.status(200).json({
      message: " Menu Item updated Successfully!",
      menu: menus,
    });
  } catch (error) {
    console.error("Error updating menu item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Delete Item
const menuItemDeleted = async (req, res) => {
  try {
    const menus = await menuItems.findByIdAndDelete(req.params.id);
    console.log("Menu Item deleted Successfully!", menus);
    return res.status(200).json({
      message: "Menu Items deleted Successfully!",
      menu: menus,
    });
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  menuItemsAdd,
  menuItemsGet,
  menuItemsId,
  menuItemsUpdated,
  menuItemDeleted,
};
