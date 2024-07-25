const mongoose = require ('mongoose')
const itemSchema = new mongoose.Schema({
    item_name:{
        type:"String",
    },
    item_description:{
        type:"String",
    },
    item_price:{
        type:"Number",
    },
   
    status:{
        type:"String",
        enum:["enable", "disable"],
        default:"enable",
    }
})
module.exports = mongoose.model("food_items", itemSchema)