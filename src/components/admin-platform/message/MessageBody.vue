<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th class="text-center" scope="col">发送者</th>
            <th class="text-center" scope="col">标题</th>
            <th class="text-center" scope="col">查看</th>
            <th class="text-center" scope="col">回复</th>
            <th class="text-center" scope="col">删除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <span>XXXXXXXX</span>
            </td>
            <td>
              <span>XXXXXXXX</span>
            </td>
            <td>
              <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">回复</button>
            </td> 
            <td>
              <button class="btn btn-danger" @click="changeStatus">删除</button>
            </td>      
          </tr>
    
          <tr>
            <td>
                <span>XXXXXXXX</span>
            </td>
            <td>
              <span>XXXXXXXX</span>
            </td>
            <td>
              <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">回复</button>
            </td> 
            <td>
              <button class="btn btn-danger" @click="changeStatus">删除</button>
            </td>      
          </tr>
    
          <tr>
            <td>
                <span>XXXXXXXX</span>
            </td>
            <td>
              <span>XXXXXXXX</span>
            </td>
            <td>
              <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">回复</button>
            </td> 
            <td>
              <button class="btn btn-danger" @click="changeStatus">删除</button>
            </td>      
          </tr>
    
          <tr>
            <td>
                <span>XXXXXXXX</span>
            </td>
            <td>
              <span>XXXXXXXX</span>
            </td>       
            <td>
              <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">回复</button>
            </td> 
            <td>
              <button class="btn btn-danger" @click="changeStatus">删除</button>
            </td>      
          </tr>
    
          <tr>
            <td>
                <span>XXXXXXXX</span>
            </td>
            <td>
              <span>XXXXXXXX</span>
            </td>
            <td>
              <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal2">回复</button>
            </td> 
            <td>
              <button class="btn btn-danger" @click="changeStatus">删除</button>
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
                            <span>标题：</span>
                        </div>
                        <div class="col-8">
                            <span>XXXXXXXX</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-3">
                            <span>内容：</span>
                        </div>
                        <div class="col-9">
                            <span class="text-break text-monospace font-weight-bold font-body-set">
                                &nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            </span>
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
    
    
    
      <div class="modal fade" id="exampleModal2" tabindex="10" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
              <div class="modal-header"></div>
              <div class="modal-body">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">请输入回复的内容：</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
            name:"MessageBody",
            methods:{
              changeStatus(){
                window.alert("该条消息已被删除！");
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
    
        th,td{
          color: white;
        }
    </style>