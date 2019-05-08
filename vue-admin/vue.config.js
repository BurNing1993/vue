// vue.config.js

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
  },
};
