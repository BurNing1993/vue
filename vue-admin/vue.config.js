// vue.config.js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  devServer: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/', // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    // 一个规则里的 基础Loader
    // svg是个基础loader
    // const svgRule = config.module.rule('svg');

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear();

    // 添加要替换的 loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/plugins/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/plugins/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },
};
