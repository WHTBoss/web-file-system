<template>
    <div class="container-fuild">
        <div class="row">
            <div class="col-md-1 col-sm-1"></div>
            <div class="col-md col-sm canvas-set d-none d-lg-block top-set"></div>
            <div class="col-md col-sm login-set top-set">
                <div class="row">
                    <div class="col-md-12 text-center form-top">
                        <h3>夜猫王登录平台</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12 title-set">
                                <button type="button" class="btn btn-outline-primary user " @click="setUserText">用户登录</button>
                                <button type="button" class="btn btn-outline-danger admin" @click="setAdminText">管理员登录</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 input-set">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-bounding-box"></i></span>
                            <span class="input-group-text name">{{ name }}</span>
                            <input v-model="username" type="text" class="form-control" placeholder="请输入用户名" aria-label="Dollar amount (with dot and two decimal places)">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 input-set">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-bag-x"></i></span>
                            <span class="input-group-text">密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                            <input v-model="password" type="text" class="form-control" placeholder="请输入密码" aria-label="Dollar amount (with dot and two decimal places)">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row vcode-all-set">
                            <div class="col-md-8 col-8">
                                <div class="input-group mb-3">
                                    <span class="input-group-text vcode-set">{{ vcodeOrmail }}</span>
                                    <input v-model="verifyCode" type="text" class="form-control" placeholder="请输入验证码" aria-label="Vcode" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-md-4 col-4">
                                <img class="vcode-img-set" src="../assets/login/R-C.png" v-if="vcodeUse">
                                <button type="button" class="btn btn-info mail-send-set" v-if="mailUse" @click="sendMail">点击发送</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md col">
                                <button type="button" class="btn btn-success btn-bottom-set" @click="login">登入</button>
                            </div>
                            <div class="col-md-3 col-3 register-set"  v-if="registerUse">
                                <button type="button" class="btn btn-secondary btn-bottom-set" @click="register">注册</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1 col-sm-1"></div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default{
        name:"LoginView",
        data:function(){
            return {
                mail:"",
                name:"用户名：",
                vcodeOrmail:"验证码：",
                mailUse:false,
                vcodeUse:true,
                registerUse:true,
                LoginUrl:"./index.html#/user",
                RegisterUrl:"./index.html#/register",
                username:"",
                password:"",
                verifyCode:"",
                backurl: this.JavaBaseUrl + "/user-serv/user/findAll"
            }
        },
        methods:{
            setUserText(){
                this.name = "用户名：";
                this.vcodeOrmail = "验证码：";
                this.mailUse = false;
                this.vcodeUse = true;
                this.registerUse = true;
                this.LoginUrl = "./index.html#/user";
            },
            setAdminText(){
                this.name = "管理员：";
                this.vcodeOrmail = "邮箱密码：";
                this.mailUse = true;
                this.vcodeUse = false;
                this.registerUse = false;
                this.LoginUrl = "./index.html#/admin";
            },
            login(){
                window.location.href = this.LoginUrl;
                // const res = axios.get(this.JavaLoginUrl + '/user/auth/login?username=' + this.username + '&password=' + this.password + '&verifyCode=' + this.verifyCode + '&backurl=' + this.backurl);
                // res.then(Response=>{
                //     // const res = axios.get(this.JavaBaseUrl + '/user-serv/user/findUserByUsername?username=' + this.username);
                //     const res = axios.get(this.JavaLoginUrl + '/user/findUserByUsername?username=' + this.username);
                //     res.then(Response=>{
                //         window.sessionStorage.setItem("uid",Response.data.obj.uid);
                //         window.sessionStorage.setItem("username",Response.data.obj.username);
                //         window.sessionStorage.setItem("password",Response.data.obj.password);
                //         console.log('请求成功:');
				// 	    console.log('请求成功响应对象获取',Response);
                //     });
                //     location.href = "./#/user";
                // });
                // res.catch(Error=>{
                //     alert("请输入正确的用户名与密码");
                //     console.log('请求失败:');
				// 	console.log('请求失败响应对象获取',Error);
                // });
            },
            register(){
                window.location.href = this.RegisterUrl;
            },
            sendMail(){
                const res = axios.get(this.JavaLoginUrl + '/user/auth/admin?mail=' + this.username);
                res.then(Response=>{
                    console.log('请求成功:');
					console.log('请求成功响应对象获取',Response);
                    alert(Response.data);
                });
            }
        }
    }
</script>


<style scoped>
    .container-fuild{
        overflow: hidden;
        background-image: url(../assets/login/background.png);
        background-position: 100% 100%;
        background-repeat: repeat;
        height: 100vh;
        padding-top: 10vh;
        padding-bottom:10vh;
    }
    .top-set{
        height: 600px;
        padding-bottom: 10vh;
        background-color: #fcfcfc;
    }
    .login-set{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .canvas-set{
        background-image: url(../assets/login/canvas.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px
    }

    h3{
        font-size: 2em;
        font-family: "幼圆";
        font-weight: 1000;
        color: #7093f5;
    }
    .form-top{
        background-image: url(../assets/login/title.png);
        background-color: #fcfcfc;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 10vh;
    }

    .btn{
        width: 49%;
    }

    .title-set{
        margin-top: 3vh;
    }

    .input-set{
        margin-top: 4vh;
    }
    .input-set span{
        background-color: #7093f5;
        color: #fcfcfc;
    }

    .vcode-set{
        background-color: #7093f5;
        color: #fcfcfc;
    }
    .vcode-img-set{
        width: 100%;
        height: 5vh;
    }

    .vcode-all-set{
        margin-top: 4vh;
    }

    .mail-send-set{
        width: 100%;
    }

    .btn-bottom-set{
        width: 100%;
        margin-top: 4vh;
    }

</style>