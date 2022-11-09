import * as lib from '@guoguolong/babel-tutorial';

// 不处理库代码的 ES6->ES5
lib.calc();

lib.asynFunc('CheckName').then(resp => {
  console.log(resp)
})

// 也不处理项目内代码 ES6->ES5
const demo = () => {
  let { x, y, ...z } = { x: 1, y: 2, name: 'Allen', addr: 'Mars' };  
  console.log('Demo: ', z)
}

demo();