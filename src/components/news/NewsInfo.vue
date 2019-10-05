<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time |dateFormat }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,  //将url地址中传递过来的id值，挂载到data上，方便以后调用
            newsinfo:{}  //新闻对象
        };
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.newsinfo=result.body.message[0];
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{  //注册子组件
        'comment-box':comment
    }
}
</script>
<style lang="scss">
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size:16px;
        text-align: center;
        margin:15px 0;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width:100%;
        }
    }
}
</style>