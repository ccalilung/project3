// const foodController = require('../controller/controller')


// const router = require("express").Router();
// const path = require("path");

// // router.use("/", (req,res) => {
// //     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// // })

// // router.route("/api/food").get(foodController.findAllBooks)

// router.get("/", (req,res) => {

// })

// router.get("/api/nutrition/:name", (req,res)=> {
    
//     foodController.calls.findFoodId(req.params.name,(data) => {
//         return res.json(data)
//     })
// })

// router.get("/api/recipe/:search", (req,res)=> {
    
//     foodController.calls.findRecipes(req.params.search,(data) => {
        
//         return res.json(data)
//     })
// })

// router.get("/api/nutrition/dbnum/:numb", (req,res)=> {
    
//     foodController.calls.findFoodIngredients(req.params.numb,(data) => {
//         return res.json(data)
//     })
// })

// router.get("/api/blog/show", (req,res)=> {
    
//     foodController.blogs.findAll((data) => {
//         return res.json(data)
//     })
// })


// router.post("/api/blog/write", (req,res) => {
//     foodController.entries.createEntry(req.body.title, req.body.postType, req.body.thePost, () => {
//         res.json(data)
//     })

// })

// router.post("/api/auth/createuser", (req,res) => {
//     foodController.auth.createUser(req.body.username, req.body.password, (data) => {

//     })
//     // res.redirect("/home")
// })

// router.post("/api/auth/authcheck", (req,res) => {
//     foodController.auth.verifyAuth(req.body.username, req.body.password, (data) => {
//         console.log(data)
//         res.send(data)
        
//     })
// })
    

// module.exports = router;