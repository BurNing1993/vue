# bootstrap_material

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Bootstrap引入
    npm install --save jquery
    cc
    Popper.js 添加
    c
    
    在build/webpack.base.conf.js文件中添加
    const  webpack = require('webpack')
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.ProvidePlugin({
     jQuery: 'jquery',
     $: 'jquery',
    Popper: ['popper.js', 'default'],
    })
    ]
    
    在src/main.js文件添加
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    http://placehold.it/820x230

### Material安装

    npm install material-design-lite --save
    index.html引入
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.red-deep_orange.min.css" />
    src/main.js引入
    import 'material-design-lite/material.min.css'
    import 'material-design-lite/material.min.js'

