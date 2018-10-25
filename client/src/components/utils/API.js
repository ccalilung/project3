import axios from "axios";

export default {
  //nutrition
  getIngredients: function (num) {
    return axios.get("/api/nutrition/dbnum/" + num);
  },
  getFoods: function (id) {
    return axios.get("/api/nutrition/" + id);
  },
  //recipes
  findRecipes: (searchTerm) => {
    return axios.get("/api/recipe/" + searchTerm)
  },
  //auth
  authCheck: function (credentials) {
    return axios.post("/api/auth/authcheck/", credentials).then((response) => {
      if (!response.data) {
        return response.data
      } else if (response.data) {
        window.location = "/home"
      }
    })
  },
  createUser: function (credentials) {
    return axios.post("/api/auth/createuser", credentials).then(function (response) {
      return response
    })
  },
  //blog
  addBlogs: (blogPost) => {
    console.log(blogPost)
    return axios.post("/api/blog/write", blogPost).then(data => {
      window.location = "/blog"
    })
  },
  findBlogs: () => {
    return axios.get("/api/blog/show").then(data => {
      console.log(data)
      return data
      
    })
  },
  //foodtrckr
  addFoodEntry: (food) => {
    return axios.post("/api/foodtrckr/track", food).then(data => {
      return data.data
    })
  },

  createGraph: () => {
    return axios.get("/api/foodtrckr/graph").then(data => {
      return data
    })
  },

  deleteGraphs: () => {
    return axios.delete("api/foodtrckr/delete").then(data => {
      return data
    })
  }

};