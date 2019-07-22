// vue.config.js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 4000,
  },
  chainWebpack: (config) => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all',
    });
    // config.externals({
    //   vue: 'Vue',
    //   vuex: 'Vuex',
    //   'vue-router': 'VueRouter',
    //   'element-ui': 'ELEMENT'
    // })
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
