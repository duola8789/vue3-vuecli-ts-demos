/**
 * @file Vue-CLI 配置文件
 */
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// 将打包后的 JS/CSS/IMG/FONTS 等资源统一放到 static 目录中
const ASSERTS_DIR = 'static';

module.exports = {
  lintOnSave: isDev ? 'warning' : false,
  assetsDir: isDev ? '' : ASSERTS_DIR,
  publicPath: '/',
  devServer: {
    port: 8789,
    disableHostCheck: true
  },
  chainWebpack: (config) => {
    // 自动导入样式文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
  }
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.scss'),
        path.resolve(__dirname, './src/styles/mixins.scss'),
        path.resolve(__dirname, './src/styles/functions.scss')
      ]
    });
}
