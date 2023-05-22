[TOC]

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

### 准备旧版浏览器

* ES5浏览器：firefox 27 (https://ftp.mozilla.org/pub/firefox/releases/)
* ES6浏览器：https://www.slimjet.com/chrome/google-chrome-old-version.php 

 下载chrome55，其发行于 2016-12-09，所以支持 ES2016，但不支持 ES2017、ES2018等更高版本.

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

### ES.X -> ES.Y transpile

#### A. tsc 编译 - 使用 rollup-plugin-typescript2 插件

##### ES Target设置

tsc的设置都在 tsconfig.json里

##### 使 node_modules 下的包参与 transpile.

下面例子设置使 query-string 参与 transpile
```js
    RollupTypescript({
      include: [
        'src/**/*',
        'node_modules/**/query-string/**/*'
      ]
    }
```

#### B. esbuild 编译 - 使用 rollup-plugin-esbuild 插件

替代 `rollup-plugin-typescript2`， esbuild编译最低可以转到es6，不支持es5。

##### ES Target设置

例：NationSelect.tsx 使用了es2017特性async/await、es2018的`...`增强语法如下：
```tsx
  // async/awwait - es2017
  const getRemoteData = async () => {
    await parsed.data? 'data1:':'default-data';
  }

  // ...扩展语法 - es2018
  const people = {
    nickname: 'allen',
    gender: 'male',
  }
  const es2018_chineseInfo = {...people, hobby: 'Basketball'};
```
尝试调整`esbuild.target`参数为 `es6`、`es1017`、`es2018`， 运行`pnpm build`看看 esbuild是怎样 transpile的。

##### 使 node_modules 下的包参与 transpile.
本项目也示例了 node_modules下的包transpile，以`query-string`为例，排除非`query-string`，即可使之参与transpile：
```js
  plugins: [
    esbuild({
      exclude: [
        /!query-string/,
      ]
    })
  ]
```

#### C. babel

TODO

### 插件用途

#### @rollup/plugin-node-resolve

这个插件使引入的 node_modules 下的库可以被打包到目标.js文件中，即：和项目源代码同等大家，根据配置 transpile 为指定的目标js版本。

#### rollup-plugin-typescript2

ts(x) 转 es6/es5

#### rollup-plugin-postcss
处理css - postcss插件

#### @rollup/plugin-commonjs
支持 require 函数

