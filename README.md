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