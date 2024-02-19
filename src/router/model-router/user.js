// 导入配置文件
import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import dataV from '@jiaminghi/data-view'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.use(dataV)
Vue.use(Router)


// 导入具体组件


// 导入用户具体组件
import UserNavigation from '@/components/user-platform/Navigation'
import UserTopNavigation from '@/components/user-platform/TopNavigation'
import UserButtonBar from '@/components/user-platform/ButtonBar'
// 主界面
import UserMainTop from '@/components/user-platform/home/MainTop'
import UserMainBody from '@/components/user-platform/home/MainBody'
import UserMainLeft from '@/components/user-platform/home/MainLeft'
import UserMainCenter from '@/components/user-platform/home/MainCenter'
import UserMainRight from '@/components/user-platform/home/MainRight'
// 聊天界面
import UserChatTalkTop from '@/components/user-platform/chat/talk/TopTalk'
import UserChatTalkBody from '@/components/user-platform/chat/talk/BodyTalk'
import UserChatTalkBottom from '@/components/user-platform/chat/talk/BottomTalk'
import UserChatAddressTop from '@/components/user-platform/chat/address/TopAddress'
import UserChatAddressBody from '@/components/user-platform/chat/address/BodyAddress'
// 文件操作
import UserPDFFileSystemTop from '@/components/user-platform/file-system/pdf-system/TopFile'
import UserPDFFileSystemBody from '@/components/user-platform/file-system/pdf-system/BodyFile'
import UserPhotoFileSystemTop from '@/components/user-platform/file-system/photo-system/TopFile'
import UserPhotoFileSystemBody from '@/components/user-platform/file-system/photo-system/BodyFile'
import UserVideoFileSystemTop from '@/components/user-platform/file-system/video-system/TopFile'
import UserVideoFileSystemBody from '@/components/user-platform/file-system/video-system/BodyFile'
import UserAudioFileSystemTop from '@/components/user-platform/file-system/audio-system/TopFile'
import UserAudioFileSystemBody from '@/components/user-platform/file-system/audio-system/BodyFile'
// 消息通知
import UserMessageTop from '@/components/user-platform/message/TopMessage'
// 个人中心
import UserLeftPerson from '@/components/user-platform/person-center/LeftPerson'
import UserRightAccount from '@/components/user-platform/person-center/RightAccount'
import UserPersonButton from '@/components/user-platform/person-center/ButtonSet'
// 账号设置
import UserAccountSet from '@/components/user-platform/account/AccountSet'
// 用户反馈
import UserLeftFeedback from '@/components/user-platform/feedback/LeftFeedback'
import UserRightFeedback from '@/components/user-platform/feedback/RightFeedback'


//导入用户布局组件
import UserMainView from '@/components/view-platform/user-view/MainView'
import UserChatTalkView from '@/components/view-platform/user-view/ChatTalkView'
import UserChatAddressView from '@/components/view-platform/user-view/ChatAddressView'
import PDFFileSystemView from '@/components/view-platform/user-view/PDFFileSystemView'
import PhotoFileSystemView from '@/components/view-platform/user-view/PhotoFileSystemView'
import AudioFileSystemView from '@/components/view-platform/user-view/AudioFileSystemView'
import VideoFileSystemView from '@/components/view-platform/user-view/VideoFileSystemView'
import UserMessageView from '@/components/view-platform/user-view/MessageView'
import UserPersonAccountView from '@/components/view-platform/user-view/PersonAccountView'
import UserAccountView from '@/components/view-platform/user-view/AccountView'
import UserFeedbackView from '@/components/view-platform/user-view/FeedbackView'


// 用户全局组件
Vue.component('user-navigation', UserNavigation)
Vue.component('user-top-navigation', UserTopNavigation)
Vue.component('user-button-bar', UserButtonBar)
// 主界面
Vue.component('user-main-top', UserMainTop)
Vue.component('user-main-body', UserMainBody)
Vue.component('user-main-left', UserMainLeft)
Vue.component('user-main-center', UserMainCenter)
Vue.component('user-main-right', UserMainRight)
// 聊天界面
Vue.component('user-chat-talk-top', UserChatTalkTop)
Vue.component('user-chat-talk-body', UserChatTalkBody)
Vue.component('user-chat-talk-bottom', UserChatTalkBottom)
Vue.component('user-chat-address-top', UserChatAddressTop)
Vue.component('user-chat-address-body', UserChatAddressBody)
// 文件系统
Vue.component('user-pdf-file-system-top', UserPDFFileSystemTop)
Vue.component('user-pdf-file-system-body', UserPDFFileSystemBody)
Vue.component('user-photo-file-system-top', UserPhotoFileSystemTop)
Vue.component('user-photo-file-system-body', UserPhotoFileSystemBody)
Vue.component('user-video-file-system-top', UserVideoFileSystemTop)
Vue.component('user-video-file-system-body', UserVideoFileSystemBody)
Vue.component('user-audio-file-system-top', UserAudioFileSystemTop)
Vue.component('user-audio-file-system-body', UserAudioFileSystemBody)
// 消息管理
Vue.component('user-message-top',UserMessageTop)
// 个人中心
Vue.component('user-left-person',UserLeftPerson)
Vue.component('user-right-account',UserRightAccount)
Vue.component('user-person-button',UserPersonButton)
// 账号设置
Vue.component('user-account-set',UserAccountSet)
// 用户反馈
Vue.component('user-left-feedback',UserLeftFeedback)
Vue.component('user-right-feedback',UserRightFeedback)


export default
  [
    {
      path:"/user",
      component:UserMainView
    },
    {
      path:"/user/account",
      component:UserAccountView
    },
    {
      path:"/user/message",
      component:UserMessageView
    },
    {
      path:"/user/chat",
      component:UserChatTalkView
    },
    {
      path:"/user/chat/talk",
      component:UserChatTalkView
    },
    {
      path:"/user/feedback",
      component:UserFeedbackView
    },
    {
      path:"/user/file/pdf",
      component:PDFFileSystemView
    },
    {
      path:"/user/file/photo",
      component:PhotoFileSystemView
    },
    {
      path:"/user/file/audio",
      component:AudioFileSystemView
    },
    {
      path:"/user/file/video",
      component:VideoFileSystemView
    },
    {
      path:"/user/chat/address",
      component:UserChatAddressView
    },
    {
      path:"/user/person",
      component:UserPersonAccountView
    }
  ]



