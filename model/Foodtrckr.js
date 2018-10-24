var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var FoodtrckrSchema = new Schema({

  food: String,
  calories: Number,
  carbs: Number,
  fat: Number,
  protein: Number,
  sodium: Number,
  sugar: Number,

});


var Foodtrckr = mongoose.model("foodtrckr", FoodtrckrSchema);

// Export the Note model
module.exports = Foodtrckr;
