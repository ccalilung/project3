const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingList = new Schema( 
    {
        itemName: {type: String, require: true},
        qty: {type: String, required: true},
        price: {type: Number, required: false}
    }

);

const shoppingList = mongoose.model("List", bookSchema)

module.exports = shoppingList;