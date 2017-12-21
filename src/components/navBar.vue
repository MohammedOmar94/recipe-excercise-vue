<template>
    <div id="nav" class="navbar-fixed">
      <!-- Dropdown Structure -->
      <ul id="account-dropdown" class="dropdown-content">
        <li><router-link to="/my-recipes"><i class="material-icons left">cake</i>My recipes</router-link></li>
        <li><router-link to="/my-ingredients"><i class="material-icons left">kitchen</i>My ingredients</router-link></li>
      </ul>
      <nav class="nav-extended grey lighten-4">
        <div class="nav-wrapper container">
          <a href="/" class="recipe-title">Recipe Exercise</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/create-recipe">Create recipes</router-link></li>
            <li><router-link to="/create-ingredients">Create ingredients</router-link></li>
            <li><a class="dropdown-button" href="#!" data-activates="account-dropdown"><i class="material-icons left">account_circle</i>Account<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>