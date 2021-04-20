import { App } from 'vue'
import { ElButton, ElLoading, ElMessage } from 'element-plus'

// https://element-plus.org/#/zh-CN/component/quickstart
const components = [ElButton]
const plugins = [ElLoading, ElMessage]

export default (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
