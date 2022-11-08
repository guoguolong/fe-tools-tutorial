// import "core-js";

const asynFunc = (text) => {
  return new Promise((resolve, reject)=>{
    resolve('Async Call ' + text);
  })
}

const calc = () => {
  let { x, y, ...z } = { x: 1, y: 2, name: 'Allen', addr: 'Mars' };  
  console.log('Calc: ', z)
}

calc();

asynFunc('CheckName').then(resp => {
  console.log(resp)
})

// npm install --save-dev @babel/core @babel/cli @babel/preset-env