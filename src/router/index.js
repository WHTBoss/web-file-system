// 导入配置文件
import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import dataV from '@jiaminghi/data-view'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.use(dataV)
Vue.use(Router)

// 导入所有的路由
import RouterAdmin from './model-router/admin'
import RouterUser from './model-router/user'
import RouterStart from './model-router/start'

export default new Router({
  routes: [
    ...RouterUser,
    ...RouterAdmin,
    ...RouterStart
  ]
})



