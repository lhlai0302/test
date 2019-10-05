##制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
    +在制作购物车小图标的时候，操作会相对多一些：
    +先把扩展图标的css样式拷贝到项目中
    +拷贝扩展字体库ttf文件，到项目中
    +为购物车小图标添加如下样式：'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar为router-link

##设置路由高亮

##点击tabbar中的路由链接，展示对应的路由组件

##制作首页轮播图图布局

##加载首页轮播图数据
1.获取数据，如何获取？使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染每个item项

##改造九宫格区域的样式

##改造新闻资讯路由链接

##新闻资讯页面制作
1.绘制界面，使用MUI中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

##实现新闻资讯列表点击跳转到新闻详情
1.把列表中的每一项改造为router-link,同时在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面：NewsInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应起来

##实现新闻详情的页面布局和数据渲染

##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中，先手动导入comment组件
    +import comment from './comment.vue'
3.在父组件中使用'components'属性将刚才导入的comment组件注册为自己的子组件
4.将注册子组件时候的注册名称，以标签形式，在页面中引用

##获取所有的评论数据显示到页面中

##实现点击加载更多评论的功能
1.为加载更多按钮绑定点击事件，在事件中请求下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getComments()方法重新获取最新一页的数据
3.为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数组，应该让老数据调用数组的concat方法拼接上新数组