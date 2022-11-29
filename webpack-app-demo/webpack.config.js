const path = require('path');

module.exports = {
  module: {
    rules: [
      { 
        test: /\.m?js$/,
        include: [
          /src/,
          /node_modules\/@guoguolong\/babel-tutorial/
        ],
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      }
    ],
  }
};