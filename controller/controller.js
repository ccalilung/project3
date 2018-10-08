// const db = require("../model/book")
const request = require('request')

let calls = {
findFoodIngredients: (idNumber,cb) => {
    let website = ' https://api.nal.usda.gov/ndb/reports/?ndbno=' + idNumber + '&type=b&format=json&api_key=b5BZ4JOYpXqHwA8EktVH9fOCPdJf2ZLRP8Rtztez'
    request.get(website, (err,res,data) => {
        let JSONfile = JSON.parse(data)
        cb(JSONfile)
    })
},

findFoodId: (foodTerm,cb) => {
    
    let website = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + foodTerm +"&sort=n&max=5&offset=0&api_key=b5BZ4JOYpXqHwA8EktVH9fOCPdJf2ZLRP8Rtztez"
    request.get(website, (err,res,data) => {
        let JSONfile = JSON.parse(data)
        cb(JSONfile)
        
        
    })
}
}

// calls.findFoodId("ritz",(data)=> {console.log(data)})


module.exports = {
// findAllBooks: (req,res) => {
//     db.Books.find().then(dbModel => {
//         res.json(dbModel)
       
//     }).catch(err=> res.status(500).json(err))
// }

calls:calls
}


















