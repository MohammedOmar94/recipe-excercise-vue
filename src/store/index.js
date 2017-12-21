import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    recipes: [
      {name: 'Chocolate Cake', cookingTime: 'About 20 mins', prepTime: 'About 10 mins'}
    ]
  },
  getters,
  mutations,
  actions
    //   state: {},
    //   getters,
})

export default store
