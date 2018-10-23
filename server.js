require("dotenv").config();
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let routes = require("./routes/")
let PORT = process.env.PORT || 8080;

app.get('*', function (req, res) {
 const index = path.join(__dirname, 'foodapp','build', 'index.html');
  res.sendFile(index);

  
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(routes)




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
