import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './routes'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
