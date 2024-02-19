<template>
  <div class="container-all">
    
 <!-- 2.管理员界面包含：a.可视化平台。b.用户监控。c.报警机制。d.消息管理。e.系统配置。f.控制台。g.分布式管理。k.安全工具(包含信息查询，监控记录)。 -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html#/admin">
          <img src="../../assets/main-view/logo.png" style="width: 30px; height: 30px;">
        </a>
      <a class="navbar-brand" href="./index.html#/admin"><strong>夜猫王工程中心</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
        <i class="bi bi-three-dots"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" style="color: white;">
              管理员操作
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./index.html#/admin">可视化平台</a>
              <a class="dropdown-item" href="./index.html#/admin/monitor">用户监控</a>
              <a class="dropdown-item" href="./index.html#/admin/message">消息管理</a>
              <a class="dropdown-item" href="./index.html#/admin/security">安全工具</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" style="color: white;">
              系统配置
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./index.html#/admin">控制台</a>
              <a class="dropdown-item" href="./index.html#/admin/alarm">报警机制</a>
              <a class="dropdown-item" href="./index.html#/admin">分布式管理</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index.html#/admin/system" style="color: white;">系统设置</a>
          </li>
        </ul>
        <button type="button" class="btn btn-outline-success">保护工程</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown">
            <img data-toggle="dropdown" src="../../assets/main-view/logo.png" width="30" height="30">
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./index.html#/admin/system">系统设置</a>
              <a class="dropdown-item" href="./index.html">切换账号</a>
            </div>
          </li>
        &nbsp;&nbsp;
      </div>
    </div>
  </nav>

  <div class="collapse" id="navbarToggleExternalContent">
    <div class="list-group">
      <div class="list-group">
        <div href="#" class="list-group-item list-group-item-info active" style="border-top-right-radius: 0%; border-top-left-radius: 0%;">
        <div class="list-group-item list-group-item-info">
          <a class="" data-toggle="collapse" href="#userOperate" aria-controls="collapseExample"><h6>管理员操作</h6></a>
          <div class="collapse" id="userOperate">
            <a href="./index.html#/admin" class="list-group-item list-group-item-warning">&nbsp;&nbsp;可视化平台</a>
          <a href="./index.html#/admin/monitor" class="list-group-item list-group-item-warning">&nbsp;&nbsp;用户监控</a>
          <a href="./index.html#/admin/message" class="list-group-item list-group-item-warning">&nbsp;&nbsp;消息管理</a>
          <a href="./index.html#/admin/security" class="list-group-item list-group-item-warning">&nbsp;&nbsp;安全工具</a>
          </div>
        </div>
        <div class="list-group-item list-group-item-info">
          <a class="" data-toggle="collapse" href="#peopleSet" aria-controls="collapseExample"><h6>系统配置</h6></a>
          <div class="collapse" id="peopleSet">
          <a href="./index.html#/admin" class="list-group-item list-group-item-warning">控制台</a>
          <a href="./index.html#/admin/alarm" class="list-group-item list-group-item-warning">报警机制</a>
          <a href="./index.html#/admin" class="list-group-item list-group-item-warning">分布式管理</a>
          </div>
        </div>
        <div class="list-group-item list-group-item-info">
          <a href="./index.html#/admin/system" color="black"><h6>系统设置</h6></a>
        </div>
        <div class="list-group-item list-group-item-info">
          <a href="#" color="black"><h6>保护工程</h6></a>
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
    width: 100%;
    height: 50px;
    border-radius: 2px;
    border-bottom-left-radius: 0;
  }
  .container-all{
    background-color: #1972c6;
  }
  strong{
    color: white;
  }
</style>
