import axios from "axios";

export default {
  // Gets all books
//   getFoods: function() {
//     return axios.get("/api/food/");
//   },
  // Gets the book with the given id
  getFoods: function(id) {
    return axios.get("/api/food/" + id);
  },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
