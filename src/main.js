// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import YDUI from 'vue-ydui'


Vue.config.productionTip = false

Vue.use(YDUI)
// 引入第三方文件
import 'vue-ydui/dist/ydui.rem.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
