import axios from "axios";

export default {

  getIngredients: function(num) {
    return axios.get("/api/dbnum/" + num);
  },

  getFoods: function(id) {
    return axios.get("/api/food/" + id);
  },

  authCheck: function(credentials) {
    return axios.post("/api/authcheck/",credentials).then((response) => {
      console.log(response)
      // window.location = "/home"
    })

  },
  
  createUser: function(credentials) {
    console.log(credentials)
    return axios.post("/api/createuser",credentials).then(function(response)
    {
      console.log(response)
      

    })
  }

//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
