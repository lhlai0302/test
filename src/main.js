import Vue from 'vue'
//导入App根组件
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次刚进入网站，肯定会调用main.js，在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中
var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({
    state:{  //this.$store.state.***
        car:car  //将购物车中商品的数据，用一个数组存储起来。在car数组中，存储一些商品的对象，可以暂时将这个商品对象设计成这个样子：
                //{id:商品的id,count:要购买的数量,price:商品的单价,selected:false}
    },
    mutations:{  //this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state,goodsinfo){  //点击加入购物车，把商品信息保存到store的car上
            //分析：
            //1.如果购物车中之前已经有这个对应的商品了，那么只需要更新数量
            //2.如果没有，则直接把商品数据push到car中即可
            //假设在购物车中没有找到对应的商品
            var flag=false
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag=true
                    return true;
                }
            })
            //如果最终循环完毕得到的falg还是false，则把商品数据直接push到购物车中
            if(!flag){
                state.car.push(goodsinfo)
            }
            //当更新car之后，把car数组存储到本地的localStorage中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中商品的数量值
            //分析
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count)
                    return true
                }
            })
            //当修改完商品的数量，把最新的购物车数据保存到本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            //根据id从store中的购物车中删除对应的那条商品数据
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true;
                }
            })
            //将删除完毕后的最新的购物车数据同步到本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id===info.id){
                    item.selected=info.selected
                }
            })
            //把最新的所有购物车商品的状态保存到store中去
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{  //this.$store.getters.***
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        getGoodsCount(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.count
            })
            return o
        },
        getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count
                    o.amount+=item.price*item.count
                }
            })
            return o
        }
    }
})
//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})
import app from './App.vue'
//按需导入Mint-UI中的组件     
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//1.3导入自己的router.js路由模块
import router from './router.js'
//2.1导入vue-resource
//2.2安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;  //全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { stat } from 'fs'
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router,  //1.4挂载路由对象到vm实例上
    store  //挂载store状态管理对象
})