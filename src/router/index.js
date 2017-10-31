import Vue from 'vue'
import Router from 'vue-router'


// 组件
Vue.use(Router)


// 导入文件
const home =()=>import('../components/home/home.vue')

// 路由初始化配置
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    }
  ]
})
