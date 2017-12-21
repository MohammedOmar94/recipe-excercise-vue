<template>
    <div id="Create" class="section scrollspy">
            <div class="row container">
                <h2 class="header">My recipes</h2>
                <div class="row">
                    <table id="recipesTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cooking time</th>
                                <th>Preparation time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="recipe in rows">
                             <td><input v-model="recipe.Name"> </input></td>
                             <td><input v-model="recipe.PrepTime"></input></td>
                             <td><input v-model="recipe.CookingTime"></input></td>
                             <td :id="recipe.Id" @click="deleteRecipe(recipe.Id)" name="delete_text">DELETE</td>
                             <td @click="updateRecipe(recipe.Id, recipe.Name, recipe.PrepTime, recipe.CookingTime)" name="update_text">UPDATE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>

export default {
  name: 'myRecipes',
  data () {
    return {
      rows: []
    }
  },
  beforeMount () {
    this.$store.dispatch('getRecipes', this)
  },
  computed: {
    recipeNames () {
      return this.$store.getters.recipeNames
    }
  },
  methods: {
    deleteRecipe (recipeID) {
      this.$store.dispatch('deleteRecipe', recipeID)
    },
    updateRecipe (recipeID, name, prepTime, cookingTime) {
      const recipe = {
        id: recipeID,
        name: name,
        prepTime: prepTime,
        cookingTime: cookingTime
      }
      this.$store.dispatch('updateRecipe', recipe)
    }
  }
}
</script>