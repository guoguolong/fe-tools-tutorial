## Installation

```
npm i @guoguolong/react-ui-component
```

## Usage

```jsx
import JobSelect from '@guoguolong/react-ui-component'
export default () => {
	return <div><JobSelect bgColor="lightgreen" /></div>
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


### 插件用途

* @rollup/plugin-node-resolve

这个插件使引入的 node_modules 下的库可以被打包到目标.js文件中。

* rollup-plugin-typescript2

ts(x) 转 es6/es5

* rollup-plugin-postcss
处理css - postcss插件

* @rollup/plugin-commonjs
支持 require 函数

