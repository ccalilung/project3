require("dotenv").config();
const mongoose = require("mongoose")
const db = require("../model")
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodDb";
const bcrypt = require('bcrypt')
const saltRounds = 10
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)
const request = require('request')


let calls = {
findFoodIngredients: (idNumber,cb) => {
    let website = 'https://api.nal.usda.gov/ndb/reports/?ndbno=' + idNumber + '&type=b&format=json&api_key=' + process.env.apikey
    request.get(website, (err,res,data) => {
        let JSONfile = JSON.parse(data)
        cb(JSONfile)
    })
},

findFoodId: (foodTerm,cb) => {
    
    let website = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + foodTerm +"&sort=n&max=5&offset=0&api_key=" + process.env.apikey
    
    request.get(website, (err,res,data) => {
        let JSONfile = JSON.parse(data)
        cb(JSONfile)
        
        
    })
},

findRecipes: (foodTerm, cb) => {
    let website = 'https://api.edamam.com/search?q=' + foodTerm + '&app_id='+ process.env.app_id + '&app_key='+process.env.app_key
    request.get(website, (err, res, data) => {
        let jsonData = JSON.parse(data)
        cb(jsonData)
        
           
    })
}

}



let auth = {
    verifyAuth: (username,enteredPass,cb) => {
        
        db.User.find({username:username}, (err,found) => {
            bcrypt.compare(enteredPass,found[0].password).then(data => {
            if(data === true)
                cb(data)

            else if (data === false)
                cb(res.redirect("/"))
            
        })
        })
        
        
       
    },

    createUser: (username, password, cb) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            db.User.create({
                username: username,
                password: hash
            }).then(() =>
            {
                console.log("success")
            })
        })
    }
}

let entries = {
    findEntries: function (callback) {
        db.Note.find({}, function (error, found) {
            if (error) {
            } else {
                callback(found)
            }
        })
    },
    
   
    createEntry: (title, postType, body,cb) => {
        db.Note.create({
            title: title,
            postType: postType,
            body: body
        }).then((x) => {
            // cb(x)
        })
    },

    
    viewOneEntry: (id, callback) => {
        db.Article.findOne({
            _id: id
        }).populate("note").then(function (found) {
            
            
            }
        )
    }}
    


module.exports = {
entries:entries,
calls:calls,
auth:auth
}


















