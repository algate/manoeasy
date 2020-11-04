# issue

## vuepress加载element-ui时报错Cannot find module ‘core-js/library/fn/object/assign

原来是element ui依赖core-js的2.x版本，而web项目依赖core-js的3.x版本导致的
改core-js的版本是不可能的，安装依赖async-validator就可以解决问题了！

``` bash
yarn add async-validator@1.11.5 
Or
npm install async-validator@1.11.5
```

