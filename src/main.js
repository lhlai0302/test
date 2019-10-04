import Vue from 'vue'
//导入App根组件
import app from './App.vue'
//按需导入Mint-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)
//导入MUI的样式
import './lib/mui/css/mui.min.css'
var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})