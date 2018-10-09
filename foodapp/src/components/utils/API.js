import axios from "axios";

export default {
  // Gets all books
  getIngredients: function(num) {
    return axios.get("/api/dbnum/" + num);
  },
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
