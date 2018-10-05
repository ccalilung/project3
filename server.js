// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const PORT = process.env.PORT || 3001;
// const app = express();
// const routes = require('./routes/index')
// const mongoose = require('mongoose')


// // mongoose.connect("mongodb://localhost/mybooksdb");
// app.use(express.static("public"))
// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static("client/build"));
// // }




// app.use(routes)
// // Define API routes here

// // Send every other request to the React app
// // Define any API routes before this runs
// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// // });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });


const express = require("express");
// const mongojs = require("mongojs");
const request = require("request");
// const cheerio = require("cheerio");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const app = express();
const post_controller = require("./controllers/index")
const PORT = process.env.PORT || 3001;



app.use(express.static("public"))

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(post_controller)




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});





