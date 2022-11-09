# 极简 webpack 例子

```bash
npm i webpack webpack-cli -D
```

webpack 默认构建的包格式 IIFE/commonjs，本身不处理ES6+到ES5的转换（有限处理比如箭头函数为`function`），当然更不会处理 `node_modules` 下的ES6代码。


不过我们的 `@guoguolong/babel-tutorial`已经是ES6代码，只是没有处理里面ES6新增函数。

