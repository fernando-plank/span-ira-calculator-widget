const path = require('path');
const commonConfig = require('./webpack.common')

module.exports = {
  ...commonConfig,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
};
