export default {
  // For arrays example
  addRecipe (state, recipe) {
    state.recipes.push(recipe)
    for (var i = 0; i < state.recipes.length; i++) {
      alert('Current recipes:  ' + state.recipes[i].name)
    }
  },
  increment (state) {
    alert('JUST DO IT! ' + state.count)
    state.count++
  },
  getRecipes (state) {
    return state.recipes
  }
}
