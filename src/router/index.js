import Vue from 'vue'
import Router from 'vue-router'
import createRecipe from '@/components/createRecipe'
import createIngredients from '@/components/createIngredients'
import myRecipe from '@/components/myRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // Url path so index.html
      name: 'home',
      component: createRecipe // Links to Test.vue
    },
    {
      path: '/create-recipe', // Url path so index.html
      name: 'createRecipe',
      component: createRecipe // Links to Test.vue
    },
    {
      path: '/create-ingredients', // Url path so index.html
      name: 'createIngredients',
      component: createIngredients // Links to Test.vue
    },
    {
      path: '/my-recipes', // Url path so index.html
      name: 'myRecipe',
      component: myRecipe // Links to Test.vue
    }
  ],
  mode: 'history'
})
