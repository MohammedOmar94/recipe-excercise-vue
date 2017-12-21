import actions from './actions'
import mutations from './mutations'

export default {
  increment (state) {
    alert('JUST DO IT! ' + state.count)
    state.count++
  },
  recipeUrl () {
    return 'http://api.10goto20.com/v1/recipe/OMAR14/'
  },
  getRecipes (state) { // For when dealing with arrays.
    return state.recipes
  },
  allActions () {
    return Object.keys(actions)
  },
  allMutations () {
    return Object.keys(mutations)
  }
}
