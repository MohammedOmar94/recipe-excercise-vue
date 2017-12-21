<template>
  <div id="app">
     <navBar></navBar>
    <router-view></router-view>
    <!-- Shows what ever route has been selected -->
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
