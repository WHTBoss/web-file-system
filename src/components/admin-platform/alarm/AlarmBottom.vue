<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">用户/系统（名称）</th>
                <th scope="col">报警类型</th>
                <th scope="col">报警时间</th>
                <th scope="col">删除警报</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span>XXXXXXXX</span>
                </td>
                <td>
                    <span>登录警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>输入警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>爆破警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>越级警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>内存警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>存储警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
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
                    <span>Docker警报</span>
                </td>
                <td>
                    <span>XXXXXXXXXXXXXXXX</span>
                </td>
                <td>
                    <button class="btn btn-danger" @click="changeStatus">删除</button>
                </td>      
            </tr>
        </tbody>
    </table>
</template>
    
    
    <script>
        export default{
            name:"MessageBody",
            methods:{
              changeStatus(){
                window.alert("该条警报已被删除！");
              }
            }
        }
    </script>
    
    <style scoped>
        td button{
            width: 15vw;
        }
    
        span{
          font-size: larger;
        }
    
        th,td{
          color: white;
        }
    </style>