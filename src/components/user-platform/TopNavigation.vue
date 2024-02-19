<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
      <!-- 1.普通用户界面包含：a.文件操作。b.聊天界面。c.个人中心。d.系统设置。e.用户反馈。f.消息通知。g.可视化布局。 -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="./index.html#/user">
                <img src="../../assets/main-view/logo.png">
              </a>
            <a class="navbar-brand" href="./index.html#/user"><span>夜猫王工程中心</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
              <i class="bi bi-three-dots"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false" style="color: white;">
                      用户操作
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="./index.html#/user/chat/talk">聊天</a>
                      <a class="dropdown-item" href="./index.html#/user/chat/address">通讯录</a>
                      <a class="dropdown-item" href="./index.html#/user" target="_blank">可视化布局</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" style="color: white;">
                      文件操作
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="./index.html#/user/file/pdf">PDF文件操作</a>
                      <a class="dropdown-item" href="./index.html#/user/file/photo">图片操作</a>
                      <a class="dropdown-item" href="./index.html#/user/file/audio">音频操作</a>
                      <a class="dropdown-item" href="./index.html#/user/file/video">视频操作</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false" style="color: white;">
                      个人配置
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="./index.html#/user/message">消息通知</a>
                      <a class="dropdown-item" href="./index.html#/user/person">个人中心</a>
                      <a class="dropdown-item" href="./index.html#/user/feedback">用户反馈</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./index.html#/user/account" style="color: white;">系统设置</a>
                  </li>
                </ul>
                <button type="button" class="btn btn-outline-success btn-set">进入游戏</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item dropdown">
                    <img data-toggle="dropdown" src="../../assets/main-view/logo.png">
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="./index.html#/user/person">个人中心</a>
                      <a class="dropdown-item" href="./index.html#/login">切换账号</a>
                      <a class="dropdown-item" href="./index.html#/login">用户注销</a>
                    </div>
                  </li>
                &nbsp;&nbsp;
            </div>
          </div>
        </nav>
      </div>
    </div>


  <div class="collapse" id="navbarToggleExternalContent">
    <div class="list-group">
      <div class="list-group">
        <div class="list-group-item list-group-item-info active" style="border-top-right-radius: 0%; border-top-left-radius: 0%;">
          <div class="list-group-item list-group-item-info">
            <a class="" data-toggle="collapse" href="#userOperate" aria-controls="collapseExample"><h6>用户操作</h6></a>
            <div class="collapse" id="userOperate">
              <a href="./index.html#/user/chat/talk" class="list-group-item list-group-item-warning">&nbsp;&nbsp;聊天</a>
              <a href="./index.html#/user/chat/address" class="list-group-item list-group-item-warning">&nbsp;&nbsp;通讯录</a>
              <a href="./index.html#/user" target="_blank" class="list-group-item list-group-item-warning">&nbsp;&nbsp;可视化布局</a>
            </div>
          </div>
          <div class="list-group-item list-group-item-info">
            <a class="" data-toggle="collapse" href="#fileOperate" aria-controls="collapseExample"><h6>文件操作</h6></a>
            <div class="collapse" id="fileOperate">
              <a href="./index.html#/user/file/pdf" class="list-group-item list-group-item-warning">&nbsp;&nbsp;PDF文件操作</a>
              <a href="./index.html#/user/file/photo" class="list-group-item list-group-item-warning">&nbsp;&nbsp;图片操作</a>
              <a href="./index.html#/user/file/audio" class="list-group-item list-group-item-warning">&nbsp;&nbsp;音频操作</a>
              <a href="./index.html#/user/file/video" class="list-group-item list-group-item-warning">&nbsp;&nbsp;视频操作</a>
            </div>
          </div>
          <div class="list-group-item list-group-item-info">
            <a class="" data-toggle="collapse" href="#peopleSet" aria-controls="collapseExample"><h6>个人设置</h6></a>
            <div class="collapse" id="peopleSet">
              <a href="./index.html#/user/message" class="list-group-item list-group-item-warning">消息通知</a>
              <a href="./index.html#/user/person" class="list-group-item list-group-item-warning">个人中心</a>
              <a href="./index.html#/user/feedback" class="list-group-item list-group-item-warning">用户反馈</a>
            </div>
          </div>
          <div class="list-group-item list-group-item-info">
            <a href="./index.html#/user/account" color="black"><h6>系统设置</h6></a>
          </div>
          <div class="list-group-item list-group-item-info">
            <a href="#" color="black"><h6>进入游戏</h6></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopNavigation'
}
</script>

<style scoped>
  nav{
    border-radius: 2px;
    border-bottom-left-radius: 0;
  }
  .container-fluid{
    background-color: #1972c6;
  }
  span{
    font-size: 20px;
    color: white;
  }
  img{
    width:30px;
    height:30px;
  }
  i{
    font-size: 30px;
  }
</style>
