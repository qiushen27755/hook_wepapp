
# Check Order for someone

## 简介

### 基本功能

    以订单为主要内容导向，区分开三个展示页面
        1.未认领(未处理/处理中)
        2.已认领(处理完毕)
        3.合同(全部)

### 记录

    合同的展示不太一样为了不让组件变得过于复杂所以区分开来写,实现方法差不多
    
    1.2020-1-27 原先使用class组件,现在改为hooks组件
    2.2020-2-26 将认领的页面统合成 静态组件 由1-2共同使用

### 运行

- npm start 运行
  
- npm build 打包
  
### 目录

    ├── api        //通信及工具
    └── application //组件路由的页面入口
    ├── assets  //资源
    ├── component        // 封装的组件 主要都在这
    ├── router       //路由
    ├── ui      //一些第三方插件和自定义组件有些没用上没删
    ├── App.js // 入口文件
    ├── index.js  // 启动文件   
    ├── style.js     //全局样式
