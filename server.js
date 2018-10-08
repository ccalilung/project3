let express = require("express");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");
let app = express();
let routes = require("./routes/routes")
let PORT = process.env.PORT || 8080;



app.use(express.static("public"))

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(routes)




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});