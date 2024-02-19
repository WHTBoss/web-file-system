<template>
    <div class="container-fuild">
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-6 text-center">
                <h3>夜猫王注册平台</h3>
            </div>
            <div class="col-md"></div>
        </div>
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text username">用户名：</span>
                    </div>
                    <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-md"></div>
        </div>
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text password">密&nbsp;&nbsp;&nbsp;码：</span>
                    </div>
                    <input v-model="password" type="text" class="form-control" placeholder="password" aria-label="Password" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-md"></div>
        </div>
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-6">
                <div class="input-group mb-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text vcode">验证码：</span>
                    </div>
                    <input v-model="verifyCode" type="text" class="form-control" placeholder="vcode" aria-label="Vcode" aria-describedby="basic-addon1">
                    <img class="vcode-img-set" src="../assets/login/R-C.png">
                </div>     
            </div>
            <div class="col-md"></div>
        </div>
        <div class="row">
            <div class="col-md"></div>
            <div class="col-md-6">
                <button type="button" class="btn btn-success btn-bottom-set" @click="register">点击注册</button>
            </div>
            <div class="col-md"></div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default{
        name:"RegisterView",
        data:function(){
            return {
                username:"",
                password:"",
                verifyCode:"",
            }
        },
        methods:{
            register(){
                // const res = axios.get('http://localhost:10090/gateway/sendRegister?username=' + this.username + '&password=' + this.password + '&verifyCode=' + this.verifyCode);
                // res.then(Response=>{
                //     alert("用户注册成功，请联系管理员激活账号");
                //     console.log('请求成功:');
				// 	console.log('请求成功响应对象获取',Response);
                //     location.href = "http://localhost:8080/index.html#/login"
                // });
                // res.catch(Error=>{
                //     alert("用户注册失败，请检查输入信息");
                //     alert("请输入正确的用户名与密码");
                //     console.log('请求失败:');
				// 	console.log('请求失败响应对象获取',Error);
                // });
            }
        }
    }
</script>


<style scoped>
.container-fuild{
    overflow: hidden;
    height: 100vh;
    background-image: url(../assets/register/background.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 20vh;
}
.row{
    margin-top: 3vh;
}
h3{
    font-weight: 1000;
    font-family: "幼圆";
    color: #7093f5;

}
.btn-bottom-set{
  
    width: 100%;
}
.username{
    background-color: #7093f5;
    color: #fcfcfc;
}
.password{
    background-color: #7093f5;
    color: #fcfcfc;
}
.vcode{
    background-color: #7093f5;
    color: #fcfcfc;
}
.vcode-img-set{
        padding-left: 5%;
        width: 30%;
        height: 4.5vh;
    }
</style>