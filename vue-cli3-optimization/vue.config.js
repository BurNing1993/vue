// vue.config.js
module.exports = {
  css: {
    extract: true,
  },
  chainWebpack: (config) => {
    // 最小化处理: 代码的最优化
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all',
    });
    // 忽略这些模块的打包
    config.externals({
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
    });
  },
};
