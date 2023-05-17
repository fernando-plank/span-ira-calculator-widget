const path = require('path');

const alias = {
    '@components': path.resolve(__dirname, '../src/components'),
    '@services': path.resolve(__dirname, '../src/services'),
    '@styles': path.resolve(__dirname, '../src/styles'),
    '@utils': path.resolve(__dirname, '../src/utils'),
    '@routes': path.resolve(__dirname, '../src/routes'),
    "@assets": path.resolve(__dirname, '../src/assets'),
    "@pages": path.resolve(__dirname, '../src/pages'),
}

module.exports = alias