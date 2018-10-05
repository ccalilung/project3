// const db = require("../model/book")
const request = require('request')

let calls = {
findFoodIngredients: (req,res) => {
    let website = ' https://api.nal.usda.gov/ndb/reports/?ndbno=45099743&type=b&format=json&api_key=b5BZ4JOYpXqHwA8EktVH9fOCPdJf2ZLRP8Rtztez'
    request.get(website, (err,res,data) => {
        let a = JSON.parse(data)
        a.report.food.nutrients.forEach(x => {
            console.log(x.name)
        })
    })
},

findFoodId: (b,cb) => {
    
    let website = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + b +"&sort=n&max=5&offset=0&api_key=b5BZ4JOYpXqHwA8EktVH9fOCPdJf2ZLRP8Rtztez"
    request.get(website, (err,res,data) => {
        let a = JSON.parse(data)
        a.list.item.forEach(x => {
          cb(x.name)
            
        })
        
    })
}
}


module.exports = {
// findAllBooks: (req,res) => {
//     db.Books.find().then(dbModel => {
//         res.json(dbModel)
       
//     }).catch(err=> res.status(500).json(err))
// }

calls:calls
}

calls.findFoodIngredients();
















