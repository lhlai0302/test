<template>
    <!-- 使用watch属性监听父组件传递过来的max值，不管watch会被触发几次，但是最后一次肯定是一个合法的max数值 -->
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        //初始化数字选择框组件
        mui(".mui-numbox").numbox();
    },
    methods:{
        countChanged(){
            this.$emit('getCount',parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch:{
        //属性监听
        'max':function(newVal,oldVal){
            //使用JS API设置numbox的最大值
            mui(".mui-numbox").numbox().setOption('max',newVal);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>