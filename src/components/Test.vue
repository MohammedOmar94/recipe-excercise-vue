<template>
    <div id="Test">
      <ul id="account-dropdown-mobile" class="dropdown-content">
          <li>
            <a href="my-recipes.php">
              <i class="material-icons left">cake</i>My recipes</a>
          </li>
          <li>
            <a href="my-ingredients.php">
              <i class="material-icons left">kitchen</i>My ingredients</a>
          </li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li>
            <a href="index.php">Create recipes</a>
          </li>
          <li>
            <a href="create-ingredients.php">Create ingredients</a>
          </li>
          <li>
            <a class="dropdown-button" href="#!" data-activates="account-dropdown-mobile">
              <i class="material-icons left">account_circle</i>Account
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>