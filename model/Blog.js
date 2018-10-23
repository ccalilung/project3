var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var BlogSchema = new Schema({

  title: String,
  
  body: String
});


var Blog = mongoose.model("Blog", BlogSchema);

// Export the Note model
module.exports = Blog;
