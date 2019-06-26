// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 从src文件下寻找
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
import VueAwesomeSwiper from  'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//1px在多倍屏下显示问题，可能是2px，或者3px

//点击300毫秒点击问题

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //路由就是根据网址的不同，返回不同的内容给用户
  components: { App },
  template: '<App/>' //定义组件
})
