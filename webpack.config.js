var path=require('path')
var htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./src/main.js'),   //入口文件
    node:{
        fs:'empty'
    },
    output:{  //指定输出选项
        path:path.join(__dirname,'./dist'),  //输出路径
        filename:'bundle.js'  //指定输出文件的名称
    },
    plugins:[  //所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),  //指定模板文件路径
            filename:'index.html'  //设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{  //配置所有第三方loader模块的
        rules:[  //第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},  //处理css文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},  //处理less文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},  //处理scss文件的loader
            {test:/\.(jpg|png|bmp|gif)$/,use:'url-loader?limit=33350&name=[hash:8]-[name].[ext]'},  //处理图片路径的loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},//处理字体文件的loader	
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},  //配置Babel来转换高级的ES语法
            {test:/\.vue$/,use:'vue-loader'}  //处理.vue文件的loader
        ]
    },
    resolve:{
        alias:{  //修改Vue被导入时候的包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}