# app-ts 

ts 类型的应用

## 库有TS定义 - 一般用法

引用 `@guoguolong/lib-ts`带有ts声明的库，例子如下：

```ts
import tsLib, { Pair } from '@guoguolong/lib-ts';

const channel: Pair = tsLib.constants.channel.WECHAT;
console.log('Channel: ', channel);
```

## 库没有TS定义 - 使用外部模块

如果库没有随带 ts 定义，仍然想使用上述方法写 TS，使用 namespace。
为了做这个实验，将 `@guoguolong/lib-ts`的 `index.d.ts`代码注释，
把代码复制到当前项目根目录下的 `global.d.ts`，用`declare module '@guoguolong/lib-ts'`包裹

```ts
declare module '@guoguolong/lib-ts' {
  // 这里 @guoguolong/lib-ts 模块的 index.d.ts 内容
}
```

上述代码仍可通过编译.

## 给 window 添加新的属性

* global.d.ts
```ts
interface Window {
  martCtx: string;
}
```

这样，ts 文件里使用 `window.martCtx`不会报红

## 添加一个全局变量声明

* global.d.ts
```ts
declare const globalPool;
```
这样，ts 文件里使用 `console.log(globalPool)`不会报红
