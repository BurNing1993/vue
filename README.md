# vuedemo2

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
    npm install bootstrap--save
    在build/webpack.base.conf.js文件中添加
     plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
    ]
    在src/main.js文件添加
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    Popper.js 添加
    npm install --save popper.js
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.ProvidePlugin({
     jQuery: 'jquery',
     $: 'jquery',
    Popper: ['popper.js', 'default'],
    })
    ]