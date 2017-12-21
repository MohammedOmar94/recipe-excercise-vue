// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// var apiURL = '"http://api.10goto20.com/v1/recipe/OMAR14';

/* eslint-disable no-new */
new Vue({
  el: '#app', // Links to element in index.html
  router, // Links to index.js
  template: '<App/>',
  components: { App }, // Links to App.vue
  store
})
