const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts或者tsx后缀的文件，就是typescript文件
        use: 'ts-loader', // 就是上面安装的ts-loader
        // exclude: '/node-modules/', // 排除node-modules目录
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
