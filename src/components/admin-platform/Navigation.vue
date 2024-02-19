<template>
  <div class="container-all">
    <div class="row">
      <div class="col-12 button-bar">
        <a href="./index.html#/admin">
          <button class="btn  btn-block btn-outline-info border-top-set" type="button">
            &nbsp;&nbsp;&nbsp;<i class="bi bi-house align-middle"></i>
            <span class="text-monospace align-middle">可视化平台</span>
          </button>
        </a>
        
        <a href="./index.html#/admin/monitor">
          <button class="btn  btn-block btn-outline-info" type="button">
            <i class="bi bi-eye align-middle"></i>
            <span class="text-center text-monospace align-middle">用户监控</span>
          </button>
        </a>
       
        <a href="./index.html#/admin/message">
          <button class="btn btn-outline-info btn-block" type="button">
            <i class="bi bi-envelope-exclamation"></i>
            <span class="text-center text-monospace align-middle">消息管理</span>
          </button>
        </a>
        

        <a href="./index.html#/admin/security">
          <button class="btn btn-outline-info btn-block" type="button">
            &nbsp;&nbsp;&nbsp;<i class="bi bi-shield-fill-exclamation"></i>
            <span class="text-center text-monospace align-middle">安全工具</span>&nbsp;&nbsp;&nbsp;
          </button>
        </a>
        

        <a href="./index.html#/admin">
          <button class="btn btn-outline-info btn-block" type="button">
            <i class="bi bi-ui-radios"></i>
            <span class="text-center text-monospace align-middle">控制台</span>&nbsp;&nbsp;&nbsp;
          </button>
        </a>
        

        <a href="./index.html#/admin/alarm">
          <button class="btn btn-outline-info btn-block" type="button">
            <i class="bi bi-bell-fill"></i>
            <span class="text-center text-monospace align-middle">报警机制</span>
          </button>
        </a>
        

        <a href="./index.html#/admin">
          <button class="btn btn-outline-info btn-block" type="button">
            &nbsp;&nbsp;&nbsp;<i class="bi bi-database-fill-gear"></i>
            <span class="text-center text-monospace align-middle">分布式管理</span>
          </button>
        </a>
        

        <a href="./index.html#/admin/system">
          <button class="btn btn-outline-info btn-block border-bottom-set" type="button">
            <i class="bi bi-gear-fill"></i>
            <span class="text-center text-monospace align-middle">系统设置</span>
          </button>
        </a> 
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name:"AdminNavigation",
        methods:{
          
        }
    }
</script>

<style scoped>
.col-12{
  padding: 0px 0px;
}


  button{
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