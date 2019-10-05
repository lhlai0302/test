import Vue from 'vue'
//导入App根组件
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
import app from './App.vue'
//按需导入Mint-UI中的组件     
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//1.3导入自己的router.js路由模块
import router from './router.js'
//2.1导入vue-resource
//2.2安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router  //1.4挂载路由对象到vm实例上
})