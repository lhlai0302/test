<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageIndex:1,
            goodsList:[]
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(result=>{
                if(result.body.status===0){
                    // this.goodsList=result.body.message;
                    this.goodsList=this.goodsList.concat(result.body.message);
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getGoodsList();
        },
        goDetail(id){
            //使用JS的形式进行路由导航
            //1.最简单的
            // this.$router.push('/home/goodsinfo/'+id)
            //2.传递对象
            //this.$router.push({path:"/home/goodsinfo/"+id})
            //3.传递命名的路由
            this.$router.push({name:"goodsinfo",params:{ id }})
        }
    }
}
</script>
<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            width: 49%;
            margin:4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 291px;
            img{
                width: 100%;
            }
            .title{
                font-size:14px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding:5px;
                }
                .price{
                    .now{
                        color:red;
                        font-weight: bold;
                        font-size:16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size:12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display:flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>