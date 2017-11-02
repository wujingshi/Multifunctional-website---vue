import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'


// 组件
Vue.use(Router)
Vue.use(VueResource)


// 导入文件
const home =()=>import('../components/home/home.vue')
const nba=()=>import('../components/nba/nba.vue')
const music=()=>import('../components/music/music.vue')
const today=()=>import('../components/today/today.vue')

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
    },
    {
      path:'/nba',
      component:nba
    },
    {
      path:'/music',
      component:music
    },
    {
      path:'/today',
      component:today
    }
  ]
})
