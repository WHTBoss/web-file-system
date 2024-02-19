<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th class="text-center" scope="col">编号</th>
        <th class="text-center" scope="col">头像</th>
        <th class="text-center" scope="col">名称</th>
        <th class="text-center" scope="col">查看</th>
        <th class="text-center" scope="col">权限</th>
        <th class="text-center" scope="col">禁用</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0001</td>
        <td>
          <img src="../../../assets/login/background.png">
        </td>
        <td>XXXXXXXX</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
        </td>
        <td>
          <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">权限</button>
        </td> 
        <td>
          <button class="btn btn-danger" @click="changeStatus">禁用</button>
        </td>      
      </tr>

      <tr>
        <td>0001</td>
        <td>
          <img src="../../../assets/login/background.png">
        </td>
        <td>XXXXXXXX</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
        </td>
        <td>
          <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">权限</button>
        </td> 
        <td>
          <button class="btn btn-danger" @click="changeStatus">禁用</button>
        </td>      
      </tr>

      <tr>
        <td>0001</td>
        <td>
          <img src="../../../assets/login/background.png">
        </td>
        <td>XXXXXXXX</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
        </td>
        <td>
          <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">权限</button>
        </td> 
        <td>
          <button class="btn btn-danger" @click="changeStatus">禁用</button>
        </td>      
      </tr>

      <tr>
        <td>0001</td>
        <td>
          <img src="../../../assets/login/background.png">
        </td>
        <td>XXXXXXXX</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
        </td>
        <td>
          <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">权限</button>
        </td> 
        <td>
          <button class="btn btn-danger" @click="changeStatus">禁用</button>
        </td>      
      </tr>

      <tr>
        <td>0001</td>
        <td>
          <img src="../../../assets/login/background.png">
        </td>
        <td>XXXXXXXX</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
        </td>
        <td>
          <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">权限</button>
        </td> 
        <td>
          <button class="btn btn-danger" @click="changeStatus">禁用</button>
        </td>      
      </tr>
    </tbody>
  </table>

  <div class="modal fade" id="exampleModal1" tabindex="10" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">
            <div class="container">
                <div class="row">
                  <div class="col-4">
                    <span>出生年月：</span>
                  </div>
                  <div class="col-8">
                    <span>2021年12月23日</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <span>Gitee账号：</span>
                  </div>
                  <div class="col-8">
                    <span>XXXXXXXXXX</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <span>GitHub账号：</span>
                  </div>
                  <div class="col-8">
                    <span>XXXXXXXXXX</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <span>QQ账号：</span>
                  </div>
                  <div class="col-8">
                    <span>2164591400@qq.com</span>
                  </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" style="width: 100%;">删除用户</button>
          <button class="btn btn-primary" style="width: 100%;">文件提取</button>
            <button type="button" class="btn btn-secondary" style="width: 100%;" data-dismiss="modal">关闭</button>
        </div>
        </div>
    </div>
  </div>



  <div class="modal fade" id="exampleModal2" tabindex="10" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <span>普通用户</span>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col-4">
                    <span>聊天功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div> -->

                <div class="row">
                  <div class="col-4">
                    <span>文件功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <span>可视化功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline3" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="userRadioInline3" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 text-center">
                    <span>管理员</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <span>用户监控功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <span>消息管理功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <!-- <div class="row">
                  <div class="col-4">
                    <span>安全工具功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline3" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline3" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div> -->

                <div class="row">
                  <div class="col-4">
                    <span>控制台功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline4" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline4" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <span>报警机制功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline5" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline5" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <span>分布式管理功能：</span>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline6" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                      <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-check form-switch">
                      <input class="form-check-input" name="adminRadioInline6" type="radio" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" style="width: 100%;" data-dismiss="modal">关闭</button>
          </div>
          </div>
      </div>
  </div>
</div>
</template>


<script>
    export default{
        name:"Monitor",
        methods:{
          changeStatus(){
            window.alert("该用户已被禁用！");
            this.$data = "wan2002";
          }
        }
    }
</script>

<style scoped>
    *{
        font-size: 100%;
    }
    img{
        width: 2vw;
        height: 2vw;
        border-radius: 5vw;
    }

    @media (max-width: 450px) {
        img{
            width: 10vw;
            height: 5vw;
        }
    }
    td button{
        width: 20vw;
    }

    span{
      font-size: larger;
    }

    .col-12{
      height: 30px;
      background-color: greenyellow;
    }

    th,td{
      color: white;
    }
</style>