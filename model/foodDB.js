
const mongoose = require("mongoose")
const db = require("./schemas")


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/food";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)


// let entries = {
//     findEntries: function (callback) {
//         db.Article.find({}, function (error, found) {
//             if (error) {
//             } else {
//                 callback(found)
//             }
//         })
//     },
//     savedEntries: function (callback) {
//         db.Article.find({saved:"true"}, function (error, found) {
//             if (error) {
//             } else {
//                 callback(found)
//             }
//         })
//     },savePost: (save,id, callback) => {
//         db.Article.findOneAndUpdate({
//             _id: id
//         },{"saved":save}).then(function (found) {
            
//                 callback(found)
//             }
//         )
//     },
//     createEntry: (articleTitle, articleLink, articleSource) => {
//         db.Article.create({
//             title: articleTitle,
//             link: articleLink,
//             source: articleSource
//         }).then((x) => {

//         })
//     },

    
//     viewOneEntry: (id, callback) => {
//         db.Article.findOne({
//             _id: id
//         }).populate("note").then(function (found) {
            
//                 callback(found)
//             }
//         )
//     },

//     createPost: (postTitle,postBody,postId, cb) => {
        
//             db.Note.create({
//                 title: postTitle,
//                 body: postBody
                
//             })
//               .then(function(dbNote) {
                
//                 return db.Article.findOneAndUpdate({ _id: postId }, { note: dbNote._id }, { new: true });
//               })
//               .then(function(dbArticle) {
//                 // console.log(dbArticle)
//                 cb(dbArticle);
//               })
//               .catch(function(err) {
//                 // If an error occurred, send it to the client
//                 // res.json(err);
//               });
          
//     },
//     deletePost: (postId,cb) => {
//     db.Note.create({
//         title: "",
//         body: ""
        
//     })
//       .then(function(dbNote) {
//         return db.Article.findOneAndUpdate({ _id: postId }, { note: dbNote._id }, { new: true });
//       })
//       .then(function(dbArticle) {
//         // console.log(dbArticle)
//         cb(dbArticle);
//       })
//       .catch(function(err) {
//         // If an error occurred, send it to the client
//         // res.json(err);
//       });

//     }

// }

module.exports = {
    db: db,
    entries: entries


};