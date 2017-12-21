<template>
    <div class="row container">
        <h2 class="header">Create ingredient</h2>
        <div class="row">
            <div class="input-field col s3">
                <select id="dropdown">
                </select>
                <label for="dropdown">Recipe</label>
            </div>
        </div>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="Name" type="text" class="validate">
                        <label class="active" for="Name">Ingredient name</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="e.g. A pinch" id="Quantity" type="text" class="validate">
                        <label class="active"  for="Quantiy">Quantity</label>
                    </div>
                </div>
            </form>
            <div class="col s6">
                <a id="create_button" class="waves-effect waves-light btn">Create</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'createIngredient'
}
</script>