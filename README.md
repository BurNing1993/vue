# VUE

## VsCode Snippets

### TS

- vue-ts

```json
"Vue TS": {
    "prefix": "vue-ts",
    "body": [
        "<template>",
        "\t<div>",
        "\t$1",
        "\t</div>",
        "</template>\n",
        "<script lang=\"ts\">",
        "import { defineComponent } from 'vue';\n",
        "export default defineComponent({",
        "\tname: '$1',",
        "\tsetup (props, { attrs, slots, emit }) {",
        "\t\treturn {\n\t\t\t$2",
        "\t\t};",
        "\t}",
        "});",
        "</script>\n",
        "<style lang=\"scss\" scoped>\n",
        "</style>"
    ],
    "description": "Vue TS"
}
```

- vuex-module

```json
"vuex-module": {
    "prefix": "vuex-module",
    "body": [
        "import { Module } from 'vuex';",
        "import { RootState } from '../'';\n",
        "export interface State {\n\t$2\n}\n",
        "const initState: () => State = () => ({\n\t$3\n});\n",
        "const $1: Module<State, RootState> = {",
        "\tstate: initState(),",
        "\tmutations: {},",
        "\tactions: {},",
        "\tgetters: {},",
        "}\n",
        "export default $1;\n"
    ],
    "description": "vuex-module"
}
```

### JS

- vue

```json
"Vue base": {
    "prefix": "vue",
    "body": [
        "<template>",
        "\t<div>",
        "\t\t$1",
        "\t</div>",
        "</template>\n",
        "<script>",
        "export default {",
        "\tname: '$1',",
        "\tdata() {",
        "\t\treturn {\n\t\t\t$2",
        "\t\t};",
        "\t},",
        "\tmethods: {\n\t\t",
        "\t},",
        "};",
        "</script>\n",
        "<style lang=\"scss\" scoped>\n",
        "</style>"
    ],
    "description": "Vue base"
}
```

- vuex-module

```json
"vuex-module": {
    "prefix": "vuex-module",
    "body": [
        "const initState = () => ({\n\t$2\n});\n",
        "const $1 = {",
        "\tstate: initState(),",
        "\tmutations: {},",
        "\tactions: {},",
        "\tgetters: {},",
        "}\n",
        "export default $1;\n"
    ],
    "description": "vuex-module"
}
```

## [VUE-CLI3 优化](https://github.com/BurNing1993/VUE/tree/master/vue-cli3-optimization)

## TOOLS

### 占位图片

- <https://placeholder.com/>

```txt
http://placehold.it/820x230
```

### TIPS

```txt
1. 在header里不要用 "_" 下划线，可以用驼峰命名或者其他的符号代替。
2. 在nginx里的 nginx.conf文件中配置http的部分添加 ： underscores_in_headers on;（默认值是off）
```
