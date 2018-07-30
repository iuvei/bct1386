// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.prototype.$http = Axios
Vue.config.productionTip = false
// Axios.defaults.baseURL = 'https://admin.bct1386.com'
Vue.prototype.$http = Axios

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: './assets/images/loading.svg',
  loading: './static/loading.svg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.afterEach((to,from,next) => { // 滚动条置顶
  window.scrollTo(0,0);
})