require("dotenv").config();
const mongoose = require("mongoose")
const db = require("../model")
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodDb";
const bcrypt = require('bcrypt')
const saltRounds = 10
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)
const request = require('request')
const rp = require('request-promise')
const fs = require('fs')


module.exports = {
    //nutrition
    findFoodIngredients: (req, res) => {
        let website = 'https://api.nal.usda.gov/ndb/reports/?ndbno=' + req.params.numb + '&type=b&format=json&api_key=' + process.env.apikey
        try {
            rp.get(website, (err, res, data) => {
                let date = new Date();
                let error = date + "@findFoodIngredients: " + data
                if (res.statusCode !== 200) {
                    fs.appendFile('./logs/error.txt', error, (err) => {
                        if (err) throw err;
                    });
                }
            }).then(data => {
                res.send(data)
            })
        } catch {
            res.send("Error - Contact Administrator to Check Logs")
        }
    },
    findFoodId: (req, res) => {
        let website = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + req.params.name + "&sort=n&max=5&offset=0&api_key=" + process.env.apikey
        try {
            rp.get(website, (err, res, data) => {
                let date = new Date();
                let error = date + "@findFoodId: " + data
                if (res.statusCode !== 200) {
                    fs.appendFile('./logs/error.txt', error, (err) => {
                        if (err) throw err;
                    });
                }
            }).then(data => {
                res.send(data)
            })
        } catch {
            res.send("Error - Contact Administrator to Check Logs")
        }

    },
    //recipes
    findRecipes: (req, res) => {
        let website = 'https://api.edamam.com/search?q=' + req.params.search + '&app_id=' + process.env.app_id + '&app_key=' + process.env.app_key
        try {
            rp.get(website, (err, res, data) => {
                let date = new Date();
                let error = date + "@findRecipes: " + data
                if (res.statusCode !== 200) {
                    fs.appendFile('./logs/error.txt', error, (err) => {
                        if (err) throw err;
                    });
                }
            }).then(data => {
                res.send(data)
            })
        } catch {
            res.send("Error - Contact Administrator to Check Logs")
        }

    },
    //auth
    verifyAuth: (req, res) => {
        db.User.find({
            username: req.body.username
        }).then((data) => {
            if (data.length !== 0){
            bcrypt.compare(req.body.password, data[0].password).then(data => {
                res.send(data)
            })
        } else {
            return res.send(false)
        }
        
        })
    
        
    },
    createUser: (req, res) => {
        db.User.find({
            username: req.body.username
        }).then(data => {
            if (data.length !== 0) {
                res.send(false)
            } else {
                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    db.User.create({
                        username: req.body.username,
                        password: hash
                    }).then((data) => {
                        res.send(data)
                    })
                })
            }
        })
    },
    //blog
    findAll: (req,res) => {
        db.Blog.find({}).then(function (data) {
            res.json(data)
            })
    },
    createEntry: (req,res) => {
        db.Blog.create({
            title: req.body.title,
            body: req.body.content
        }).then((data) => {
            res.send(data)
        })
    },

    //foodtrckr
    addFoodEntry: (req,res) => {
        db.Foodtrckr.create({
            food: req.body.food,
            calories: req.body.calories,
            carbs: req.body.carbs,
            fat: req.body.fat,
            protein: req.body.protein,
            sodium: req.body.sodium,
            sugar: req.body.sugar,
        }).then(data => {
            res.send(data)
        })
    },
    createGraph: (req,res) => {
        db.Foodtrckr.find({}).then((data) => {
            res.json(data)
        })
    }

}
