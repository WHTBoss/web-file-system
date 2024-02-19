<template>
  <div class="container-all">
    <div class="row">
      <div class="col-12 button-bar">
        <button class="btn  btn-block btn-outline-info border-top-set" type="button">
          &nbsp;&nbsp;&nbsp;<i class="bi bi-house align-middle"></i>
          <a class="text-monospace align-middle text-decoration-none" href="./index.html#/user">大数据平台</a>
        </button>

        <button class="btn  btn-block btn-outline-info" type="button"  data-toggle="collapse" data-target="#collapseExampleChat" aria-expanded="false" aria-controls="collapseExampleChat">
          <i class="bi bi-chat-left-dots align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none">聊天界面</a>
        </button>

        <div class="collapse" id="collapseExampleChat">
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/chat/talk">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;聊天</a>
          </button>
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/chat/address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通讯录</a>
          </button>
        </div>

        <button class="btn btn-outline-info btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <i class="bi bi-folder-check align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none">文件操作</a>
        </button>

        <div class="collapse" id="collapseExample">
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/file/pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PDF操作</a>
          </button>
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/file/photo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图片操作</a>
          </button>
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/file/audio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;音频操作</a>
          </button>
          <button class="btn btn-outline-info btn-block" type="button">
            <a class="text-decoration-none text-right font-weight-light text-monospace align-middle" href="./index.html#/user/file/video">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视频操作</a>
          </button>
        </div>

        <button class="btn btn-outline-info btn-block" type="button">
          &nbsp;&nbsp;&nbsp;<i class="bi bi-eye align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none" target="_blank" href="./index.html#/user">可视化布局</a>
        </button>

        <button class="btn btn-outline-info btn-block" type="button">
          <i class="bi bi-chat-left-text align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none" href="./index.html#/user/message">消息通知</a>
        </button>

        <button class="btn btn-outline-info btn-block" type="button">
          <i class="bi bi-person-circle align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none" href="./index.html#/user/person">个人中心</a>
        </button>

    

        <button class="btn btn-outline-info btn-block" type="button">
          <i class="bi bi-gear align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none" href="./index.html#/user/account">系统设置</a>
        </button>

        <button class="btn btn-outline-info btn-block border-bottom-set" type="button">
          <i class="bi bi-patch-question align-middle"></i>
          <a class="text-center text-monospace align-middle text-decoration-none" href="./index.html#/user/feedback">用户反馈</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name:"Navigation",
        methods:{
          
        }
    }
</script>

<style scoped>
.col-12{
  padding: 0px 0px;
}


  button,a{
    width: 100%;
    color: aqua;
    border-radius: 0%;
    font-size: 1.5vw;
    
  }

  .btn-block+.btn-block {
    margin-top: .0rem;
  }


  .border-bottom-set{
    border-bottom-right-radius: 0.3vw;
    border-bottom-left-radius: 0.3vw;
  }

  .container-all{
    height: 100%;
  }
</style>