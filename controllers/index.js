const foodController = require('../controllers/foodController')


const router = require("express").Router();
const path = require("path");

router.use("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// router.route("/api/food").get(foodController.findAllBooks)

router.get("/api/food/:name", (req,res)=> {
    foodController.findFoodId(req.params.id,(data) => {
        console.log(data)
    })
})
    

module.exports = router;