# VUE CLI3 优化

1. 最小化处理

        // vue.config.js
        module.exports = {
            chainWebpack: config => {
                // 最小化处理: 代码的最优化
                config.optimization.minimize(true);
            }
        }

2. 分割代码

        module.exports = {
            chainWebpack: config => {
                // 最小化处理: 代码的最优化
                config.optimization.minimize(true);
                // 分割代码
                config.optimization.splitChunks({
                    chunks: 'all'
                })
            }
        }

3. 提取公用代码, 使用免费的 cdn 资源

        // vue.config.js
        module.exports = {
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
        // public/index.html 加入对应库的CDN
        <script src="https://cdn.bootcss.com/vue/2.6.8/vue.runtime.min.js"></script>
        <script src="https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js"></script>
        <script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>
        <script src="https://unpkg.com/element-ui/lib/index.js"></script>

4. 提取css代码, 到单个文件中

        // vue.config.js
        module.exports = {
            // 提取css代码
            css: {
                extract: true
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
        // 代码去掉css引入  public/index.html 加入CSS CDN
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

5. gzip压缩


        // nginx 配置
        http {
                gzip  on;
                gzip_static on;
                gzip_min_length 1024;
                gzip_buffers 4 16k;
                gzip_comp_level 2;
                gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;
                gzip_vary off;
                gzip_disable "MSIE [1-6]\.";
        }

