# [VUE-CLI](https://cli.vuejs.org/)

>[proxy](https://cli.vuejs.org/config/#devserver-proxy)

    vue.config.js--devServer.proxy
    // vue.config.js
    module.exports = {
        devServer: {
            proxy: 'http://localhost:8080'
        }
    }


    more config
    npm install http-proxy-middleware --save
    module.exports = {
    devServer: {
        proxy: {
        '/api': {
            target: '<url>',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
            '^/api': ''
            }
        },
        '/foo': {
            target: '<other_url>'
        }
        }
    }
    }
    
