import Vue from 'vue'
import Hello from '@/components/Hello'
import Vuex from 'vuex'

require('es6-promise').polyfill()

Vue.use(Vuex)

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
