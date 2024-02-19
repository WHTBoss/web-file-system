// 导入配置文件
import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import dataV from '@jiaminghi/data-view'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.use(dataV)
Vue.use(Router)

Vue.prototype.JavaLoginUrl = "http://localhost:10010"
Vue.prototype.JavaBaseUrl = "http://localhost:10090"


// 导入具体组件


// 导入管理员具体组件
import AdminTopNavigation from '@/components/admin-platform/TopNavigation'
import AdminNavigation from '@/components/admin-platform/Navigation'
import AdminButtonBar from '@/components/admin-platform/ButtonBar'
import AdminMainTop from '@/components/admin-platform/home/MainTop'
import AdminMainBody from '@/components/admin-platform/home/MainBody'
import AdminMainLeft from '@/components/admin-platform/home/MainLeft'
import AdminMainCenter from '@/components/admin-platform/home/MainCenter'
import AdminMainRight from '@/components/admin-platform/home/MainRight'
import AdminMainLine from '@/components/admin-platform/home/MainLine'
// 用户监控
import AdminMonitor from '@/components/admin-platform/monitor/Monitor'
// 消息管理
import AdminMessageTop from '@/components/admin-platform/message/MessageTop'
import AdminMessageBody from '@/components/admin-platform/message/MessageBody'
// 安全工具
import AdminToolsTop from '@/components/admin-platform/security/ToolsTop'
import AdminToolsBottom from '@/components/admin-platform/security/ToolsBottom'
// 报警机制
import AdminAlarmTop from '@/components/admin-platform/alarm/AlarmTop'
import AdminAlarmBottom from '@/components/admin-platform/alarm/AlarmBottom'
// 系统设置
import AdminSystemBody from '@/components/admin-platform/system/SystemBody'


// 导入管理员布局组件
import AdminMainView from '@/components/view-platform/admin-view/MainView'
import AdminMonitorView from '@/components/view-platform/admin-view/MonitorView'
import AdminMessageView from '@/components/view-platform/admin-view/MessageView'
import AdminSecurityView from '@/components/view-platform/admin-view/SecurityView'
import AdminAlarmView from '@/components/view-platform/admin-view/AlarmView'
import AdminSystemView from '@/components/view-platform/admin-view/SystemView'




// 管理员全局组件
Vue.component('admin-navigation', AdminNavigation)
Vue.component('admin-top-navigation', AdminTopNavigation)
Vue.component('admin-main-top', AdminMainTop)
Vue.component('admin-main-body', AdminMainBody)
Vue.component('admin-main-left', AdminMainLeft)
Vue.component('admin-main-center', AdminMainCenter)
Vue.component('admin-main-right', AdminMainRight)
Vue.component('admin-button-bar', AdminButtonBar)
Vue.component('admin-main-line',AdminMainLine)
Vue.component('admin-monitor',AdminMonitor)
Vue.component('admin-message-top',AdminMessageTop)
Vue.component('admin-message-body',AdminMessageBody)
Vue.component('admin-tools-top',AdminToolsTop)
Vue.component('admin-tools-bottom',AdminToolsBottom)
Vue.component('admin-alarm-top',AdminAlarmTop)
Vue.component('admin-alarm-bottom',AdminAlarmBottom)
Vue.component('admin-system-body',AdminSystemBody)


export default 
  [
    {
      path: '/admin',
      component:AdminMainView
    },
    {
      path: '/admin/monitor',
      component:AdminMonitorView
    },
    {
      path: '/admin/message',
      component:AdminMessageView
    },
    {
      path: '/admin/security',
      component:AdminSecurityView
    },
    {
      path: '/admin/alarm',
      component:AdminAlarmView
    },
    {
      path: '/admin/system',
      component:AdminSystemView
    }
  ]


