## User Guide

### Installation

```bash
npm i @guoguolong/react-ui-nation-select
```

### Usage

```jsx
import NationSelect from '@guoguolong/react-ui-nation-select'
export default () => {
	return <div><NationSelect bgColor="lightgreen" /></div>
}
```


## Developer Guide

### sideEffects

package.json中的 sideEffects是 webpack使用的，rollup 使用配置

```js
  treeshake: {
    moduleSideEffects: false // 默认为true
  }
```

`NationSelect.tsx` 中的 `import 'babel-polyfill'`是个例子

### polyfill

推崇 https://polyfill.io! 对于App项目（和Lib项目相对），入口html加入: 

```html
<script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js"></script>
```
不同浏览器运行时就会返回相应的Polyfill方法。

可以给使用 https://polyfill.io/v3/url-builder 构建带有参数的 ployfill，如使支持 es7：

```
https://polyfill.io/v3/polyfill.min.js?features=es7 
```
于是可以支持 NationSelect中的`Array.incldue`函数的使用：

```js
['allen', 'koda', 'judy'].includes(parsed.name) ? 1 : 0
```

### 插件用途

* @rollup/plugin-node-resolve

这个插件使引入的 node_modules 下的库可以被打包到目标.js文件中。

* rollup-plugin-typescript2

ts(x) 转 es6/es5

* rollup-plugin-postcss
处理css - postcss插件

* @rollup/plugin-commonjs
支持 require 函数

