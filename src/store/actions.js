import axios from 'axios'

export default {
  addRecipe ({ commit, getters }, recipe) {
    axios.post(getters.recipeUrl, {
      Name: recipe.name,
      PrepTime: recipe.prepTime,
      CookingTime: recipe.cookingTime
    })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
  },
  getRecipes ({ commit, getters }, _this) {
    axios.get(getters.recipeUrl)
    .then(function (response) {
      console.log(response.data)
      _this.rows = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  deleteRecipe ({ commit, getters }, recipeID) {
    axios.delete(getters.recipeUrl + recipeID)
    .then(function (response) {
      location.reload()
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  updateRecipe ({ commit, getters }, recipe) {
    axios.put(getters.recipeUrl + recipe.id, {
      Name: recipe.name,
      PrepTime: recipe.prepTime,
      CookingTime: recipe.cookingTime
    })
     .then(function (response) {
       location.reload()
       console.log(response)
     })
     .catch(function (error) {
       console.log(error)
     })
  }
}
