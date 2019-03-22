# VUE

## [VUE-CLI3 优化](https://github.com/BurNing1993/VUE/tree/master/vue-cli3-optimization)

## [Material](https://github.com/BurNing1993/VUE/tree/master/Bootstrap_material)

<http://placehold.it/820x230>

### VScode vue代码片段

    {
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<template>",
            "   <div>",
            "   $1",
            "   </div>",
            "</template>\n",
            "<script>",
            "export default {",
            "   name: '$1',",
            "   components: {\n",
            "   },",
            "   data() {",
            "       return {\n",
            "       }",
            "   }",
            "}",
            "</script>\n",
            "<style scoped>",
            "</style>",
            "$2"
        ],
        "description": "VUE"
        }
    }

### VScode vue-store代码片段

    {
    "Print to console": {
        "prefix": "vue-store",
        "body": [
            "const $1 = {",
            "     state: {",
            "   $2",
            "   },",
            "    mutations: {",
            "   $3",
            "   },",
            "    actions: {",
            "   $4",
            "   }",
            "}",
            "export default $1",
            "$5"
        ],
        "description": "VUE-STORE"
        }
    }

## [Vuecli](https://github.com/BurNing1993/VUE/tree/master/vuecli)

## [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs)

## [moment](http://momentjs.cn/)

        import moment from 'moment';
        import 'moment/locale/zh-cn';
## [BUGS]

      1.  在header里不要用 "_" 下划线，可以用驼峰命名或者其他的符号代替。
      2. 在nginx里的 nginx.conf文件中配置http的部分添加 ： underscores_in_headers on;（默认值是off）