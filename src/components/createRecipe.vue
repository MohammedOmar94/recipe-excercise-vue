<template>
    <div class="row container">
        <h2 class="header">Create recipe</h2>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input v-model="recipeName" @blur="onBlur()" id="Name" type="text" class="validate">
                        <label for="Name">Recipe name</label>
                    </div>
                    <div class="input-field col s6">
                        <input v-model="prepTime" placeholder="e.g. About 10 minutes" id="prepTime" type="text" class="validate">
                        <label class="active" for="prepTime">Preparation time</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input v-model="cookingTime" placeholder="e.g. About 20 minutes" id="cookingTIme" type="text" class="validate">
                        <label class="active"  for="cookingTIme">Cooking time</label>
                    </div>
                </div>
            </form>
            <div class="col s6">
                <a @click="createRecipe" id="create_button" class="waves-effect waves-light btn">Create</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'createRecipe',
  data () {
    return {
      message: 'hello!'
    }
  },
  mounted: {
    message: 'bye!'
  },
  methods: {
    doCommit: function (event) {
      this.$store.commit('increment')
    },
    createRecipe () {
      const recipe = {
     // all below should exist in your component and be linked to inputs with v-model
        name: this.recipeName,
        cookingTime: this.cookingTime,
        prepTime: this.prepTime
      }
      this.$store.dispatch('addRecipe', recipe)
     // all below should exist in your component and be linked to inputs with v-model
    // // A. use this method if you have setup a mutations on the store to do what B. does
    //   this.$store.commit('addRecipe', recipe)
    },
    onBlur () {
      if (this.recipeName === 'Cupcake') {
        this.prepTime = '1234567890'
        console.log(this.prepTime)
      }
    }
  }
}
</script>