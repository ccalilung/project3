const foodController = require('../controller/controller')


const router = require("express").Router();
const path = require("path");

// router.use("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })

// router.route("/api/food").get(foodController.findAllBooks)

router.get("/", (req,res) => {

})

router.get("/api/food/:name", (req,res)=> {
    
    foodController.calls.findFoodId(req.params.name,(data) => {
        console.log(data)
        res.json(data)
    })
})

router.get("/api/dbnum/:num", (req,res)=> {
    
    foodController.calls.findFoodIngredients(req.params.num,(data) => {
        console.log(data)
        res.json(data)
    })
})
    

module.exports = router;